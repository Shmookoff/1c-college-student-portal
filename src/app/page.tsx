import StartButton from "./_components/start-button";
import { appName, orgName } from "@/lib/constants";

export default async function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {appName}
        </h1>
        <div className="text-lg font-semibold">{orgName}</div>
      </div>
      <StartButton />
    </div>
  );
}
