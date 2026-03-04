import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/40">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
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
