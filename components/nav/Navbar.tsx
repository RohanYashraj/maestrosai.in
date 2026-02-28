"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">MaestrosAI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/solutions"
              className="transition-colors hover:text-foreground/80"
            >
              Solutions
            </Link>
            <Link
              href="/capabilities"
              className="transition-colors hover:text-foreground/80"
            >
              Capabilities
            </Link>
            <Link
              href="/use-cases"
              className="transition-colors hover:text-foreground/80"
            >
              Use Cases
            </Link>
            <Link
              href="/insights"
              className="transition-colors hover:text-foreground/80"
            >
              Insights
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link href="/contact#demo">Request a demo</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
