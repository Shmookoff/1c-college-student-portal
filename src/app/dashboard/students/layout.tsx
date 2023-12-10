import { mergeTitle } from "@/lib/utils";
import auth from "@/server/auth";
import { redirect } from "next/navigation";

const StudentsLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const session = await auth();
  if (!session || !("student" in session)) redirect("/dashboard");
  return <>{children}</>;
};

export default StudentsLayout;

export const metadata = {
  title: mergeTitle("Личный кабинет студента"),
};
