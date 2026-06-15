import Link from "next/link";
import { getModulesByCategory } from "@/data/content";
import { CATEGORY_BLURB, CATEGORY_LABELS, type Category } from "@/lib/types";
import { ModuleGrid } from "./ModuleGrid";

const ICON: Record<Category, string> = {
  foundational: "🎓",
  offices: "🏢",
  schools: "🏫",
  nurseries: "🧸",
};

export function CategoryView({ category }: { category: Category }) {
  const modules = getModulesByCategory(category);
  const isSite = category !== "foundational";

  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link href="/academy" className="text-brand">
          Home
        </Link>{" "}
        / {CATEGORY_LABELS[category]}
      </nav>

      <header>
        <h1 className="flex items-center gap-2">
          <span aria-hidden>{ICON[category]}</span> {CATEGORY_LABELS[category]}
        </h1>
        <p className="mt-2 max-w-2xl text-muted">{CATEGORY_BLURB[category]}</p>
      </header>

      {isSite && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          🔒 These modules unlock once you have passed every Foundation quiz. Foundations cover the core skills
          (colour coding, COSHH, two-stage cleaning, safety) every operative needs before site work.
        </div>
      )}

      <ModuleGrid modules={modules} />
    </div>
  );
}
