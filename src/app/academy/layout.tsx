import { AcademyShell } from "@/components/AcademyShell";

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return <AcademyShell>{children}</AcademyShell>;
}
