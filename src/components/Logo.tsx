import Link from "next/link";

/** FISCO Academy wordmark. Replace the mark with the official logo when supplied. */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/academy" className="flex items-center gap-2 no-underline" aria-label="FISCO Academy home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-lg font-black text-white">
        F
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight text-ink">FISCO</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">Academy</span>
        </span>
      )}
    </Link>
  );
}
