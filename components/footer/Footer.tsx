import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/40">
      <Container className="py-8 md:py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-base md:text-lg font-serif font-bold tracking-tight text-ink"
          >
            MaestrosAI
          </Link>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MaestrosAI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
