import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground gap-8 bg-[url('https://ik.imagekit.io/nvx2ojbab/Tripffic/image.png?updatedAt=1751799649895')] bg-cover bg-center bg-no-repeat bg-black/50">
      <div className="flex flex-col items-center justify-center gap-8 bg-black/60 text-white p-12 rounded-lg backdrop-blur-sm">
        <h1 className="text-4xl font-bold">🚧 Under Development 🚧</h1>
        <p className="text-lg text-center max-w-md">
          Your travel companion for seamless travel planning.
        </p>
        <Button variant="outline" size="lg" className='text-black' asChild>
          <a href="mailto:info@tripffic.com">Contact Support</a>
        </Button>
      </div>
    </div>
  );
}
