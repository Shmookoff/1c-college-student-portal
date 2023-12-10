import { mergeTitle } from "@/lib/utils";
import auth from "@/server/auth";
import { redirect } from "next/navigation";
import LoginForm from "./_components/login-form";

const SignInPage: React.FC = async () => {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <div className="container flex h-screen items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-10">
        <h2 className="text-3xl font-bold">Вход</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default SignInPage;

export const metadata = {
  title: mergeTitle("Войти"),
};
