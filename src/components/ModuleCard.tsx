"use client";

import Link from "next/link";
import type { Module } from "@/lib/types";
import { ProgressRing } from "./ProgressRing";
import { isModuleLocked, moduleProgress, useStoreVersion } from "@/lib/hooks";

export function ModuleCard({ module }: { module: Module }) {
  useStoreVersion(); // re-render on progress changes
  const locked = isModuleLocked(module);
  const { percent, completed, total, quizPassed } = moduleProgress(module);

  const inner = (
    <div
      className={`card flex h-full flex-col gap-3 p-5 transition ${
        locked ? "opacity-70" : "hover:-translate-y-0.5 hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-2xl" aria-hidden>
          {module.icon}
        </span>
        {locked ? (
          <span className="pill bg-slate-100 text-slate-500" title="Complete the Foundations first">
            🔒 Locked
          </span>
        ) : (
          <ProgressRing percent={percent} label={`${module.title}: ${percent}% complete`} />
        )}
      </div>
      <div className="flex-1">
        <h3 className="leading-snug">{module.title}</h3>
        <p className="mt-1 text-sm text-muted">{module.description}</p>
      </div>
      <div className="flex items-center justify-between text-xs text-muted">
        <span>⏱ {module.estimatedMinutes} min</span>
        <span>
          {completed}/{total} lessons{quizPassed ? " · ✅ quiz passed" : ""}
        </span>
      </div>
      {locked && (
        <p className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
          Finish all Foundation modules to unlock this site training.
        </p>
      )}
    </div>
  );

  if (locked) {
    return <div aria-disabled>{inner}</div>;
  }

  return (
    <Link href={`/academy/modules/${module.slug}`} className="no-underline">
      {inner}
    </Link>
  );
}
