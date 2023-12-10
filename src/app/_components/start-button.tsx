import { Button } from "@/components/ui/button";
import Link from "next/link";

const StartButton: React.FC = () => {
  return (
    <Link href="/dashboard">
      <Button>Перейти на портал</Button>
    </Link>
  );
};

export default StartButton;
