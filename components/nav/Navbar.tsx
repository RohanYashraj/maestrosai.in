"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-xl supports-backdrop-filter:bg-background/80">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-muted/60">
            <span className="text-xs font-mono font-semibold text-ink/80">
              MA
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-ink">
              MaestrosAI
            </span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Insurance AI Systems
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium tracking-[0.16em] uppercase">
            <Link
              href="/solutions"
              className="text-muted-foreground hover:text-ink transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/capabilities"
              className="text-muted-foreground hover:text-ink transition-colors"
            >
              Capabilities
            </Link>
            <Link
              href="/use-cases"
              className="text-muted-foreground hover:text-ink transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-ink transition-colors"
            >
              Blog
            </Link>
          </nav>
          <div className="flex items-center">
            <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
              <Link href="/contact#demo">Request a demo</Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="md:hidden">
              <Link href="/contact#demo">Go</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
