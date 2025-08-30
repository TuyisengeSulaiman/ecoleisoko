import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { LogoutButton } from "@/components/logout-button";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if(!session){
    redirect("/admin/login");
  }
  return (
      <>
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
        {children}
      </>
  );
}