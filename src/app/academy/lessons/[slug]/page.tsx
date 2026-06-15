import { notFound } from "next/navigation";
import { getLesson, modules } from "@/data/content";
import { LessonView } from "@/components/LessonView";

export function generateStaticParams() {
  return modules.flatMap((m) => m.lessons.map((l) => ({ slug: l.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = getLesson(slug);
  return { title: found?.lesson.title ?? "Lesson" };
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = getLesson(slug);
  if (!found) notFound();
  return <LessonView module={found.module} lesson={found.lesson} />;
}
