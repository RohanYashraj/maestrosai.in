import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center relative overflow-hidden">
      <Container>
        <div className="max-w-xl mx-auto relative z-10">
          <h1 className="text-8xl md:text-[10rem] font-serif font-bold text-ink/5 -mb-8 md:-mb-12 select-none pointer-events-none">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-6">
            Page not found
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-light max-w-md mx-auto">
            The link you followed may be broken, or the page has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="accent"
              size="lg"
              className="h-14 px-10 text-base"
            >
              <Link href="/">Back to home</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-10 text-base border-ink/10"
            >
              <Link href="/contact">Contact support</Link>
            </Button>
          </div>
        </div>
      </Container>

      {/* Structural ledger lines background for brand consistency */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
