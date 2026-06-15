"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { modules } from "@/data/content";
import { CATEGORY_LABELS } from "@/lib/types";

interface Hit {
  href: string;
  title: string;
  context: string;
  kind: "Module" | "Lesson";
}

// Flatten all searchable content once.
const INDEX: (Hit & { haystack: string })[] = modules.flatMap((m) => {
  const moduleHit = {
    href: `/academy/modules/${m.slug}`,
    title: m.title,
    context: `${CATEGORY_LABELS[m.category]} module`,
    kind: "Module" as const,
    haystack: `${m.title} ${m.description}`.toLowerCase(),
  };
  const lessonHits = m.lessons.map((l) => ({
    href: `/academy/lessons/${l.slug}`,
    title: l.title,
    context: `${m.title} · lesson`,
    kind: "Lesson" as const,
    haystack: [
      l.title,
      l.summary,
      l.intro,
      ...l.learningObjectives,
      ...l.method,
      ...l.dos,
      ...l.donts,
      ...l.safetyNotes,
    ]
      .join(" ")
      .toLowerCase(),
  }));
  return [moduleHit, ...lessonHits];
});

export function SearchView() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return [];
    return INDEX.filter((item) => item.haystack.includes(term)).slice(0, 30);
  }, [q]);

  return (
    <div className="space-y-6">
      <header>
        <h1>🔍 Search</h1>
        <p className="mt-1 text-muted">Find a module or lesson by topic — e.g. &ldquo;dwell time&rdquo;, &ldquo;nappy&rdquo;, &ldquo;COSHH&rdquo;.</p>
      </header>

      <input
        type="search"
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search the academy…"
        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus-visible:ring-2"
        aria-label="Search the academy"
      />

      {q.trim().length >= 2 && (
        <p className="text-sm text-muted">
          {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{q.trim()}&rdquo;
        </p>
      )}

      <ul className="space-y-2">
        {results.map((r) => (
          <li key={r.href + r.title}>
            <Link href={r.href} className="card flex items-center justify-between gap-3 p-4 no-underline hover:shadow-md">
              <span>
                <span className="block font-semibold text-ink">{r.title}</span>
                <span className="block text-sm text-muted">{r.context}</span>
              </span>
              <span className="pill bg-brand-light text-brand-dark">{r.kind}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
