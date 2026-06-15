"use client";

import type { Certificate as Cert } from "@/lib/progress";

/** Printable certificate. Use the browser's Print → Save as PDF. */
export function CertificateCard({ cert }: { cert: Cert }) {
  const issued = new Date(cert.issuedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="relative overflow-hidden rounded-2xl border-4 border-brand bg-white p-8 text-center shadow-sm">
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <span className="absolute inset-0 flex items-center justify-center text-[10rem] font-black text-brand">
          F
        </span>
      </div>
      <div className="relative">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">FISCO Academy</p>
        <p className="mt-4 text-sm text-muted">This certifies that</p>
        <p className="mt-1 text-2xl font-extrabold text-ink">{cert.fullName}</p>
        <p className="mt-3 text-sm text-muted">has successfully completed the module</p>
        <p className="mt-1 text-xl font-bold text-brand-dark">{cert.moduleTitle}</p>
        <p className="mt-4 text-sm text-muted">
          to the UK cleaning standards taught by FISCO Cleaning Services.
        </p>
        <div className="mt-6 flex items-center justify-center gap-8 text-xs text-muted">
          <div>
            <p className="font-semibold text-ink">{issued}</p>
            <p>Date issued</p>
          </div>
          <div>
            <p className="font-semibold text-ink">{cert.certificateNo}</p>
            <p>Certificate no.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
