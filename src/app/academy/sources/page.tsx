import Link from "next/link";
import { sourceGroups, sourcingCaveat } from "@/data/sources";

export const metadata = { title: "Learning Sources" };

export default function SourcesPage() {
  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link href="/academy" className="text-brand">
          Home
        </Link>{" "}
        / Learning sources
      </nav>

      <header>
        <h1>📚 Credible learning sources</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Vetted UK-relevant video and web resources behind the academy. Verify every link is live before launch and
          re-check at least termly.
        </p>
      </header>

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        ⚠ {sourcingCaveat}
      </div>

      {sourceGroups.map((group) => (
        <section key={group.heading} className="card p-5">
          <h2>{group.heading}</h2>
          <p className="mt-1 text-sm text-muted">{group.blurb}</p>
          <ul className="mt-4 space-y-3">
            {group.links.map((link) => (
              <li key={link.url} className="border-l-2 border-brand-light pl-3">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand hover:underline"
                >
                  {link.label} ↗
                </a>
                <p className="text-sm text-muted">{link.note}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
