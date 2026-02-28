import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";

interface HeroProps {
  headline: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustLine?: string;
}

export function Hero({
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  trustLine,
}: HeroProps) {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-surface">
      {/* Precision grid background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Structural accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-ink leading-[1.05] mb-8">
              {headline}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light">
              {subhead}
            </p>
          </header>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              variant="accent"
              className="w-full sm:w-auto h-14 px-8 text-base"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-base border-ink/20"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>

          {trustLine && (
            <footer className="flex items-center gap-4 border-t border-ink/5 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-surface bg-muted flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium tracking-wide text-ink/70">
                {trustLine}
              </p>
            </footer>
          )}
        </div>
      </Container>

      {/* Decorative contour accent */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 opacity-[0.05] pointer-events-none">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full text-ink"
          fill="none"
          stroke="currentColor"
        >
          <path d="M0,200 C100,250 300,150 400,200" strokeWidth="0.5" />
          <path d="M0,220 C100,270 300,170 400,220" strokeWidth="0.5" />
          <path d="M0,240 C100,290 300,190 400,240" strokeWidth="0.5" />
          <path d="M0,260 C100,310 300,210 400,260" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}
