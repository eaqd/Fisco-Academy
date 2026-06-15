"use client";

import Link from "next/link";
import { useState } from "react";
import { modules } from "@/data/content";
import { CATEGORY_LABELS } from "@/lib/types";
import { ProgressBar } from "./ProgressRing";
import { CertificateCard } from "./Certificate";
import { moduleProgress, useStoreVersion } from "@/lib/hooks";
import { getBestQuizResult, getCertificates, getProfile, type Certificate } from "@/lib/progress";

export function ProgressView() {
  useStoreVersion();
  const profile = getProfile();
  const certificates = getCertificates();
  const [open, setOpen] = useState<Certificate | null>(null);

  const overall = Math.round(
    modules.reduce((sum, m) => sum + moduleProgress(m).percent, 0) / modules.length,
  );

  return (
    <div className="space-y-8">
      <header>
        <h1>📊 My progress</h1>
        {profile && (
          <p className="mt-1 text-muted">
            {profile.fullName} · <span className="capitalize">{profile.role}</span>
          </p>
        )}
      </header>

      <section className="card p-6">
        <div className="mb-1 flex justify-between">
          <span className="font-semibold">Overall completion</span>
          <span className="font-bold text-brand">{overall}%</span>
        </div>
        <ProgressBar percent={overall} />
      </section>

      <section>
        <h2 className="mb-3">Modules</h2>
        <div className="space-y-3">
          {modules.map((m) => {
            const { percent, completed, total, quizPassed } = moduleProgress(m);
            const best = getBestQuizResult(m.slug);
            return (
              <Link
                key={m.slug}
                href={`/academy/modules/${m.slug}`}
                className="card flex items-center gap-4 p-4 no-underline transition hover:shadow-md"
              >
                <span className="text-2xl" aria-hidden>
                  {m.icon}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ink">{m.title}</span>
                    <span className="text-sm font-bold text-brand">{percent}%</span>
                  </div>
                  <ProgressBar percent={percent} className="mt-1.5" />
                  <p className="mt-1 text-xs text-muted">
                    {CATEGORY_LABELS[m.category]} · {completed}/{total} lessons ·{" "}
                    {quizPassed ? `quiz passed (${best?.score}%)` : best ? `best quiz ${best.score}%` : "quiz not taken"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-3">🏆 Certificates</h2>
        {certificates.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-muted">
            No certificates yet. Pass a module quiz to earn your first one.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {certificates.map((c) => (
              <button
                key={c.certificateNo}
                onClick={() => setOpen(c)}
                className="card flex items-center gap-3 p-4 text-left transition hover:shadow-md"
              >
                <span className="text-2xl" aria-hidden>
                  🏆
                </span>
                <div>
                  <p className="font-semibold text-ink">{c.moduleTitle}</p>
                  <p className="text-xs text-muted">{c.certificateNo}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Certificate modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate"
          onClick={() => setOpen(null)}
        >
          <div className="w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <CertificateCard cert={open} />
            <div className="no-print mt-4 flex justify-center gap-3">
              <button onClick={() => window.print()} className="btn-primary">
                🖨 Download (PDF) / Print
              </button>
              <button onClick={() => setOpen(null)} className="btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
