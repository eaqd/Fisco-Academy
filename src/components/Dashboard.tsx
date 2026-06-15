"use client";

import Link from "next/link";
import { allLessons, foundationModules, modules } from "@/data/content";
import { siteModules } from "@/data/sites";
import { ProgressBar } from "./ProgressRing";
import { ModuleGrid } from "./ModuleGrid";
import { foundationsComplete, moduleProgress, useStoreVersion } from "@/lib/hooks";
import { getLessonStatus, getProfile } from "@/lib/progress";
import { CATEGORY_BLURB } from "@/lib/types";

export function Dashboard() {
  useStoreVersion();
  const profile = getProfile();

  // Overall progress across all modules.
  const overall = Math.round(
    modules.reduce((sum, m) => sum + moduleProgress(m).percent, 0) / modules.length,
  );

  // "Continue learning": first lesson not completed, in learning order.
  const next = allLessons().find(({ lesson }) => getLessonStatus(lesson.slug) !== "completed");
  const foundationsDone = foundationsComplete();

  return (
    <div className="space-y-8">
      <section className="card overflow-hidden">
        <div className="bg-brand p-6 text-white sm:p-8">
          <h1 className="text-white">
            Welcome back{profile ? `, ${profile.fullName.split(" ")[0]}` : ""} 👋
          </h1>
          <p className="mt-1 max-w-2xl text-white/90">
            Train to clean offices, schools and nurseries the professional, UK-standards way. Start with the
            Foundations — they unlock the site-specific modules.
          </p>
        </div>
        <div className="p-6 sm:p-8">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-semibold">Your overall progress</span>
            <span className="font-bold text-brand">{overall}%</span>
          </div>
          <ProgressBar percent={overall} />
          <div className="mt-6 flex flex-wrap gap-3">
            {next ? (
              <Link href={`/academy/lessons/${next.lesson.slug}`} className="btn-primary">
                ▶ Continue: {next.lesson.title}
              </Link>
            ) : (
              <Link href="/academy/progress" className="btn-primary">
                🏆 View your certificates
              </Link>
            )}
            <Link href="/academy/foundations" className="btn-secondary">
              Browse Foundations
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-baseline justify-between">
          <h2>🎓 Foundations</h2>
          <Link href="/academy/foundations" className="text-sm font-semibold text-brand">
            See all
          </Link>
        </div>
        <p className="mb-4 text-muted">{CATEGORY_BLURB.foundational}</p>
        <ModuleGrid modules={foundationModules} />
      </section>

      <section>
        <div className="mb-3 flex items-center gap-3">
          <h2>🏢 Site training</h2>
          {!foundationsDone && (
            <span className="pill bg-amber-100 text-amber-800">🔒 Finish Foundations to unlock</span>
          )}
        </div>
        <p className="mb-4 text-muted">
          Specialist modules for Offices, Schools and Nurseries. These unlock once all Foundation quizzes are passed.
        </p>
        <ModuleGrid modules={siteModules} />
      </section>
    </div>
  );
}
