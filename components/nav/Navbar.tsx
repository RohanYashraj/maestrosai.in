"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-xl supports-backdrop-filter:bg-background/80">
      <div className="border-border/60">
        <Container className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeMenu}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-muted/60">
              <span className="text-xs font-mono font-semibold text-ink/80">
                AI
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
            </nav>
            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="accent"
                size="sm"
                className="hidden sm:inline-flex"
              >
                <Link href="/contact#demo">Request a demo</Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="inline-flex md:hidden"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
              >
                {isOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </Container>

        {isOpen && (
          <div className="md:hidden border-t border-border/60 bg-background/95">
            <Container className="flex flex-col gap-2 py-4 text-xs font-medium tracking-[0.18em] uppercase">
              <Link
                href="/solutions"
                className="py-2 text-muted-foreground hover:text-ink transition-colors"
                onClick={closeMenu}
              >
                Solutions
              </Link>
              <Button
                asChild
                variant="accent"
                size="sm"
                className="mt-3 w-full"
              >
                <Link href="/contact#demo" onClick={closeMenu}>
                  Request a demo
                </Link>
              </Button>
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}
