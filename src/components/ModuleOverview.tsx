"use client";

import Link from "next/link";
import type { Module } from "@/lib/types";
import { CATEGORY_LABELS } from "@/lib/types";
import { ProgressBar } from "./ProgressRing";
import { isModuleLocked, moduleProgress, useStoreVersion } from "@/lib/hooks";
import { getLessonStatus, getCertificate } from "@/lib/progress";

export function ModuleOverview({ module }: { module: Module }) {
  useStoreVersion();
  const locked = isModuleLocked(module);
  const { percent, quizPassed } = moduleProgress(module);
  const cert = getCertificate(module.slug);

  if (locked) {
    return (
      <div className="space-y-6">
        <Crumb module={module} />
        <div className="card p-8 text-center">
          <p className="text-5xl">🔒</p>
          <h1 className="mt-4">{module.title} is locked</h1>
          <p className="mx-auto mt-2 max-w-md text-muted">
            Complete all Foundation modules and pass their quizzes to unlock this site training.
          </p>
          <Link href="/academy/foundations" className="btn-primary mt-6">
            Go to Foundations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Crumb module={module} />

      <header className="card p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-light text-3xl" aria-hidden>
            {module.icon}
          </span>
          <div className="flex-1">
            <h1>{module.title}</h1>
            <p className="mt-1 text-muted">{module.description}</p>
            <p className="mt-2 text-sm text-muted">
              ⏱ About {module.estimatedMinutes} minutes · {module.lessons.length} lesson
              {module.lessons.length > 1 ? "s" : ""} · quiz pass mark {module.quiz.passMark}%
            </p>
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-1 flex justify-between text-sm">
            <span className="font-semibold">Module progress</span>
            <span className="font-bold text-brand">{percent}%</span>
          </div>
          <ProgressBar percent={percent} />
        </div>
      </header>

      <section>
        <h2 className="mb-3">Lessons</h2>
        <ol className="space-y-3">
          {module.lessons.map((lesson, i) => {
            const status = getLessonStatus(lesson.slug);
            const done = status === "completed";
            return (
              <li key={lesson.slug}>
                <Link
                  href={`/academy/lessons/${lesson.slug}`}
                  className="card flex items-center gap-4 p-4 no-underline transition hover:shadow-md"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      done ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
                    }`}
                    aria-hidden
                  >
                    {done ? "✓" : i + 1}
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-ink">{lesson.title}</span>
                    <span className="block text-sm text-muted">{lesson.summary}</span>
                  </span>
                  <span className="text-sm text-muted">⏱ {lesson.estimatedMinutes}m</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="card p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="flex items-center gap-2">
              📝 End-of-module quiz
              {quizPassed && <span className="pill bg-green-100 text-green-700">Passed ✓</span>}
            </h2>
            <p className="mt-1 text-sm text-muted">
              {module.quiz.questions.length} questions · pass mark {module.quiz.passMark}% · instant feedback.
              {quizPassed ? " You passed — you can retake it any time." : " Pass it to earn your certificate."}
            </p>
          </div>
          <Link href={`/academy/modules/${module.slug}/quiz`} className="btn-primary shrink-0">
            {quizPassed ? "Retake quiz" : "Take the quiz"}
          </Link>
        </div>
        {cert && (
          <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800">
            🏆 Certificate <strong>{cert.certificateNo}</strong> issued.{" "}
            <Link href="/academy/progress" className="font-semibold underline">
              View it on your Progress page
            </Link>
            .
          </p>
        )}
      </section>
    </div>
  );
}

function Crumb({ module }: { module: Module }) {
  const catHref =
    module.category === "foundational" ? "/academy/foundations" : `/academy/${module.category}`;
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <Link href="/academy" className="text-brand">
        Home
      </Link>{" "}
      /{" "}
      <Link href={catHref} className="text-brand">
        {CATEGORY_LABELS[module.category]}
      </Link>{" "}
      / {module.title}
    </nav>
  );
}
