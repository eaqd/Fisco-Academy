import Link from "next/link";

export default function NotFound() {
  return (
    <div className="card p-10 text-center">
      <p className="text-5xl">🧹</p>
      <h1 className="mt-4">Page not found</h1>
      <p className="mt-2 text-muted">That page doesn&apos;t exist. Let&apos;s get you back to your training.</p>
      <Link href="/academy" className="btn-primary mt-6">
        Back to dashboard
      </Link>
    </div>
  );
}
