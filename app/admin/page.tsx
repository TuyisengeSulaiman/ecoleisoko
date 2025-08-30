import { redirect } from "next/navigation";

export default function AdminPage() {
  // Redirect to registrations page
  redirect("/admin/registrations");
}