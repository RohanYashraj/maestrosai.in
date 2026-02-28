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
    <section className="relative overflow-hidden bg-aurora pt-24 pb-32">
      {/* Ledger-inspired grid wash */}
      <div className="absolute inset-x-0 -top-1/2 h-[140%] bg-grid-elevated opacity-[0.06] pointer-events-none" />

      {/* Structural accent line across the top */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/40 to-transparent" />

      <Container className="relative z-10 grid gap-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        <div className="max-w-3xl">
          <header className="mb-12">
            <h1 className="text-balance text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-ink leading-[1.03] mb-8">
              {headline}
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground/95 leading-relaxed max-w-3xl font-light">
              {subhead}
            </p>
          </header>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
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
              className="w-full sm:w-auto h-14 px-8 text-base"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>

          {trustLine && (
            <footer className="flex flex-col gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-surface/90"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium tracking-wide text-muted-foreground">
                {trustLine}
              </p>
            </footer>
          )}
        </div>

        <aside className="hidden lg:block">
          <div className="card-elevated bg-surface/95 border border-border/70 px-8 py-7">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-accent/85 mb-4">
              Where MaestrosAI shows up
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                Underwriting workbenches and decisioning systems
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                Claims intake, triage, and next-best-action flows
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                Actuarial analytics, monitoring, and audit-ready reports
              </li>
            </ul>
          </div>
        </aside>
      </Container>
    </section>
  );
}
