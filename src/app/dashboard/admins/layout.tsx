import { mergeTitle } from "@/lib/utils";
import auth from "@/server/auth";
import { redirect } from "next/navigation";

const AdminsLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const session = await auth();
  if (!session || !("admin" in session)) redirect("/dashboard");
  return <>{children}</>;
};

export default AdminsLayout;

export const metadata = {
  title: mergeTitle("Панель управления администратора"),
};
