import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-serif font-bold tracking-tight"
            >
              MaestrosAI
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              AI systems insurers can trust—built for underwriting, claims, and
              actuarial decisioning.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink/70">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-ink transition-colors"
                >
                  Platform Layer
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-ink transition-colors"
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-ink transition-colors"
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-ink transition-colors"
                >
                  Modernization
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink/70">
              Use Cases
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/use-cases"
                  className="hover:text-ink transition-colors"
                >
                  Underwriting
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="hover:text-ink transition-colors"
                >
                  Claims
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="hover:text-ink transition-colors"
                >
                  Actuarial
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="hover:text-ink transition-colors"
                >
                  Ops
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink/70">
              Resources
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-ink transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-ink transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-ink transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-ink transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-ink/5 pt-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MaestrosAI. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
