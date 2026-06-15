"use client";

import Link from "next/link";
import { modules } from "@/data/content";
import { moduleProgress, useStoreVersion } from "@/lib/hooks";
import { getBestQuizResult, getCertificates, getProfile } from "@/lib/progress";

/**
 * Admin / supervisor completion dashboard.
 *
 * In this self-contained build the data is the current device's record. When the
 * Supabase backend is wired up (see /supabase/schema.sql), this view queries the
 * `progress`, `quiz_results` and `certificates` tables across all staff (RLS lets
 * admins/supervisors read all rows) and the same table + CSV export work unchanged.
 */
export function AdminView() {
  useStoreVersion();
  const profile = getProfile();
  const certs = getCertificates();

  const rows = modules.map((m) => {
    const { percent, quizPassed } = moduleProgress(m);
    const best = getBestQuizResult(m.slug);
    return {
      module: m.title,
      category: m.category,
      percent,
      quizScore: best ? `${best.score}%` : "—",
      passed: quizPassed ? "Yes" : "No",
      certificate: certs.find((c) => c.moduleSlug === m.slug)?.certificateNo ?? "—",
    };
  });

  function exportCsv() {
    const header = ["Staff", "Role", "Module", "Category", "Progress %", "Best quiz", "Passed", "Certificate"];
    const lines = rows.map((r) =>
      [
        profile?.fullName ?? "",
        profile?.role ?? "",
        r.module,
        r.category,
        r.percent,
        r.quizScore,
        r.passed,
        r.certificate,
      ]
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(","),
    );
    const csv = [header.join(","), ...lines].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fisco-academy-completion-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const isManager = profile?.role === "admin" || profile?.role === "supervisor";

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1>🛠 Admin dashboard</h1>
          <p className="mt-1 text-muted">Staff completion, quiz scores and certificate status.</p>
        </div>
        <button onClick={exportCsv} className="btn-secondary">
          ⬇ Export CSV
        </button>
      </header>

      {!isManager && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          You are signed in as an operative. This dashboard is intended for supervisors and admins, who can see all
          staff once the Supabase backend is connected. Below is your own record.
        </div>
      )}

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
        ℹ This demo build stores data on this device, so the table shows{" "}
        <strong>{profile?.fullName ?? "the current user"}</strong>. Connect Supabase (see{" "}
        <code>supabase/schema.sql</code>) to aggregate every staff member with Row Level Security.
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">Module</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Progress</th>
              <th className="px-4 py-3">Best quiz</th>
              <th className="px-4 py-3">Passed</th>
              <th className="px-4 py-3">Certificate</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3 font-semibold text-ink">{r.module}</td>
                <td className="px-4 py-3 capitalize text-muted">{r.category}</td>
                <td className="px-4 py-3">{r.percent}%</td>
                <td className="px-4 py-3">{r.quizScore}</td>
                <td className="px-4 py-3">
                  <span
                    className={`pill ${r.passed === "Yes" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"}`}
                  >
                    {r.passed}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-muted">{r.certificate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link href="/academy" className="text-sm font-semibold text-brand">
        ← Back to dashboard
      </Link>
    </div>
  );
}
