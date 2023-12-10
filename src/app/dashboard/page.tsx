import auth from "@/server/auth";
import { redirect } from "next/navigation";

const DashboardPage: React.FC = async () => {
  const session = await auth();
  if (!session) redirect("/sign-in");
  if ("student" in session) redirect("/dashboard/students");
  if ("admin" in session) redirect("/dashboard/admins");
  redirect("/");
};

export default DashboardPage;
