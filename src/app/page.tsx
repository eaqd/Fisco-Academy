import { redirect } from "next/navigation";

// The Academy mounts under /academy so it can attach to an existing site.
export default function RootPage() {
  redirect("/academy");
}
