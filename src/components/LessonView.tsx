"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Lesson, Module } from "@/lib/types";
import { CATEGORY_LABELS } from "@/lib/types";
import { allLessons } from "@/data/content";
import { DoPanel, DontPanel, ObjectivesBox, SafetyPanel } from "./Panels";
import { YouTubeEmbed } from "./YouTubeEmbed";
import { ColourSwatches } from "./ColourSwatches";
import { LessonDiagram } from "./LessonDiagram";
import { ProgressBar } from "./ProgressRing";
import { getLessonStatus, setLessonStatus } from "@/lib/progress";
import { useStoreVersion } from "@/lib/hooks";

export function LessonView({ module, lesson }: { module: Module; lesson: Lesson }) {
  useStoreVersion();
  const [scrollPct, setScrollPct] = useState(0);

  // Mark "in_progress" on open if not already completed.
  useEffect(() => {
    if (getLessonStatus(lesson.slug) === "not_started") {
      setLessonStatus(lesson.slug, "in_progress");
    }
  }, [lesson.slug]);

  // Sticky reading-progress bar.
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setScrollPct(max > 0 ? Math.round((h.scrollTop / max) * 100) : 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lesson.slug]);

  const completed = getLessonStatus(lesson.slug) === "completed";

  // Prev / next lesson navigation across the whole curriculum.
  const flat = allLessons();
  const idx = flat.findIndex((l) => l.lesson.slug === lesson.slug);
  const prev = idx > 0 ? flat[idx - 1] : undefined;
  const next = idx < flat.length - 1 ? flat[idx + 1] : undefined;

  // Last lesson of this module? Then point to the quiz.
  const isLastInModule = module.lessons[module.lessons.length - 1].slug === lesson.slug;

  function complete() {
    setLessonStatus(lesson.slug, "completed");
  }

  return (
    <article className="space-y-6">
      {/* Sticky progress bar */}
      <div className="no-print sticky top-16 z-30 -mx-4 bg-surface/90 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6">
        <ProgressBar percent={scrollPct} />
      </div>

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
        </Link>
      </nav>

      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">{module.title}</p>
        <h1 className="mt-1">{lesson.title}</h1>
        <p className="mt-2 text-muted">{lesson.summary}</p>
      </header>

      <ObjectivesBox items={lesson.learningObjectives} />

      <section className="prose-fisco">
        <p className="text-[15px] leading-relaxed">{lesson.intro}</p>
      </section>

      {/* Colour swatches for the colour-coding lesson */}
      {lesson.slug === "the-4-colour-code" && (
        <section>
          <h2 className="mb-3">The colour code at a glance</h2>
          <ColourSwatches />
        </section>
      )}

      {/* Labelled instructional diagram(s) for this lesson, where available */}
      <LessonDiagram slug={lesson.slug} />

      <section>
        <h2 className="mb-3">Step-by-step method</h2>
        <ol className="space-y-2">
          {lesson.method.map((step, i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="text-[15px] leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <DoPanel items={lesson.dos} />
        <DontPanel items={lesson.donts} />
      </div>
      <SafetyPanel items={lesson.safetyNotes} />

      {lesson.videos.length > 0 && (
        <section>
          <h2 className="mb-3">🎬 Watch &amp; Learn</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {lesson.videos.map((v, i) => (
              <YouTubeEmbed key={i} video={v} />
            ))}
          </div>
        </section>
      )}

      {lesson.references.length > 0 && (
        <section className="rounded-xl bg-slate-50 p-4 text-sm text-muted">
          <p className="mb-1 font-semibold text-ink">Grounded in UK standards:</p>
          <ul className="list-disc pl-5">
            {lesson.references.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>
      )}

      {/* SOP / print actions */}
      <div className="no-print flex flex-wrap gap-3">
        <button onClick={() => window.print()} className="btn-secondary">
          🖨 Download SOP card (PDF) / Print
        </button>
      </div>

      {/* Complete + navigation */}
      <div className="no-print card flex flex-col items-stretch gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          {completed ? (
            <span className="pill bg-green-100 text-green-700">✓ Lesson completed — great work!</span>
          ) : (
            <button onClick={complete} className="btn-primary">
              ✓ Mark lesson complete
            </button>
          )}
        </div>
        <div className="flex gap-2">
          {prev && (
            <Link href={`/academy/lessons/${prev.lesson.slug}`} className="btn-secondary">
              ← Previous
            </Link>
          )}
          {isLastInModule ? (
            <Link href={`/academy/modules/${module.slug}/quiz`} className="btn-primary">
              Take the quiz →
            </Link>
          ) : next ? (
            <Link href={`/academy/lessons/${next.lesson.slug}`} className="btn-primary">
              Next lesson →
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
