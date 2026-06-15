import { notFound } from "next/navigation";
import { getModule, modules } from "@/data/content";
import { ModuleOverview } from "@/components/ModuleOverview";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mod = getModule(slug);
  return { title: mod?.title ?? "Module" };
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) notFound();
  return <ModuleOverview module={mod} />;
}
