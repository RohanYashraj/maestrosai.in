"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-serif font-bold tracking-tight">
            MaestrosAI
          </span>
        </Link>

        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/solutions"
              className="transition-colors hover:text-accent"
            >
              Solutions
            </Link>
            <Link
              href="/capabilities"
              className="transition-colors hover:text-accent"
            >
              Capabilities
            </Link>
            <Link
              href="/use-cases"
              className="transition-colors hover:text-accent"
            >
              Use Cases
            </Link>
            <Link href="/blog" className="transition-colors hover:text-accent">
              Blog
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button asChild variant="accent">
              <Link href="/contact#demo">Request a demo</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
