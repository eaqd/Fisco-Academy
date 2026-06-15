import { notFound } from "next/navigation";
import { getModule, modules } from "@/data/content";
import { Quiz } from "@/components/Quiz";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mod = getModule(slug);
  return { title: mod ? `${mod.title} — Quiz` : "Quiz" };
}

export default async function QuizPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) notFound();
  return <Quiz module={mod} />;
}
