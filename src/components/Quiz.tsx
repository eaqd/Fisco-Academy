"use client";

import Link from "next/link";
import { useState } from "react";
import type { Module } from "@/lib/types";
import { CATEGORY_LABELS } from "@/lib/types";
import { getProfile, issueCertificate, saveQuizResult, setLessonStatus } from "@/lib/progress";

export function Quiz({ module }: { module: Module }) {
  const quiz = module.quiz;
  const [answers, setAnswers] = useState<(number | null)[]>(quiz.questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{ score: number; passed: boolean; certNo?: string } | null>(null);

  function choose(qi: number, oi: number) {
    if (submitted) return;
    setAnswers((prev) => {
      const copy = [...prev];
      copy[qi] = oi;
      return copy;
    });
  }

  const allAnswered = answers.every((a) => a !== null);

  function submit() {
    const correct = quiz.questions.reduce(
      (n, q, i) => (answers[i] === q.correctIndex ? n + 1 : n),
      0,
    );
    const score = Math.round((correct / quiz.questions.length) * 100);
    const passed = score >= quiz.passMark;

    saveQuizResult({ moduleSlug: module.slug, score, passed, takenAt: new Date().toISOString() });

    let certNo: string | undefined;
    if (passed) {
      // Passing the quiz completes the module: mark all lessons done + issue certificate.
      module.lessons.forEach((l) => setLessonStatus(l.slug, "completed"));
      const profile = getProfile();
      const cert = issueCertificate({
        moduleSlug: module.slug,
        moduleTitle: module.title,
        fullName: profile?.fullName ?? "FISCO Operative",
      });
      certNo = cert.certificateNo;
    }
    setResult({ score, passed, certNo });
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function retry() {
    setAnswers(quiz.questions.map(() => null));
    setSubmitted(false);
    setResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link href="/academy" className="text-brand">
          Home
        </Link>{" "}
        /{" "}
        <Link
          href={module.category === "foundational" ? "/academy/foundations" : `/academy/${module.category}`}
          className="text-brand"
        >
          {CATEGORY_LABELS[module.category]}
        </Link>{" "}
        /{" "}
        <Link href={`/academy/modules/${module.slug}`} className="text-brand">
          {module.title}
        </Link>{" "}
        / Quiz
      </nav>

      <header>
        <h1>{module.title} — Quiz</h1>
        <p className="mt-1 text-muted">
          {quiz.questions.length} questions · pass mark {quiz.passMark}%. Pick the best answer for each.
        </p>
      </header>

      {/* Result banner */}
      {submitted && result && (
        <div
          className={`card border-2 p-6 ${
            result.passed ? "border-green-300 bg-green-50" : "border-amber-300 bg-amber-50"
          }`}
        >
          <p className="text-4xl">{result.passed ? "🎉" : "💪"}</p>
          <h2 className="mt-2">
            You scored {result.score}% — {result.passed ? "passed!" : "not quite this time."}
          </h2>
          {result.passed ? (
            <>
              <p className="mt-1 text-green-900">
                Great work — you finished this module! Your certificate{" "}
                {result.certNo && <strong>{result.certNo}</strong>} has been issued.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/academy/progress" className="btn-primary">
                  🏆 View certificate
                </Link>
                <Link href="/academy" className="btn-secondary">
                  Back to dashboard
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="mt-1 text-amber-900">
                You need {quiz.passMark}% to pass. Review the explanations below, then try again — you&apos;ve got this.
              </p>
              <button onClick={retry} className="btn-primary mt-4">
                ↻ Try again
              </button>
            </>
          )}
        </div>
      )}

      {/* Questions */}
      <ol className="space-y-5">
        {quiz.questions.map((q, qi) => {
          const chosen = answers[qi];
          return (
            <li key={qi} className="card p-5">
              <p className="font-semibold">
                {qi + 1}. {q.question}
              </p>
              <div className="mt-3 space-y-2">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const isCorrect = oi === q.correctIndex;
                  let cls = "border-slate-300 bg-white hover:bg-slate-50";
                  if (submitted) {
                    if (isCorrect) cls = "border-green-400 bg-green-50";
                    else if (isChosen) cls = "border-red-400 bg-red-50";
                    else cls = "border-slate-200 bg-white opacity-70";
                  } else if (isChosen) {
                    cls = "border-brand bg-brand-light";
                  }
                  return (
                    <button
                      key={oi}
                      type="button"
                      disabled={submitted}
                      onClick={() => choose(qi, oi)}
                      aria-pressed={isChosen}
                      className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-[15px] transition ${cls}`}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold">
                        {String.fromCharCode(65 + oi)}
                      </span>
                      <span className="flex-1">{opt}</span>
                      {submitted && isCorrect && <span aria-hidden>✓</span>}
                      {submitted && isChosen && !isCorrect && <span aria-hidden>✗</span>}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <p
                  className={`mt-3 rounded-lg px-3 py-2 text-sm ${
                    chosen === q.correctIndex ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                  }`}
                >
                  <strong>{chosen === q.correctIndex ? "Correct. " : "Explanation: "}</strong>
                  {q.explanation}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      {!submitted && (
        <div className="no-print sticky bottom-20 z-30 sm:bottom-4">
          <button
            onClick={submit}
            disabled={!allAnswered}
            className="btn-primary w-full shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {allAnswered ? "Submit answers" : `Answer all ${quiz.questions.length} questions to submit`}
          </button>
        </div>
      )}
    </div>
  );
}
