import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground gap-8">
      <h1 className="text-4xl font-bold">🚧 Under Development 🚧</h1>
      <p className="text-lg text-center max-w-md">
        This page is currently under development. Please check back soon!
      </p>
      <Button variant="outline" size="lg" asChild>
        <a href="mailto:support@yourdomain.com">Contact Support</a>
      </Button>
    </div>
  );
}
