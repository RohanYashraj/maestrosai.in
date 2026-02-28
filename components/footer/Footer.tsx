import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-xl font-bold">
              MaestrosAI
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              AI systems insurers can trust—built for underwriting, claims, and
              actuarial decisioning.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/solutions" className="hover:text-foreground">
                  Platform Layer
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-foreground">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-foreground">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-foreground">
                  Modernization
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Use Cases</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/use-cases" className="hover:text-foreground">
                  Underwriting
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-foreground">
                  Claims
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-foreground">
                  Actuarial
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-foreground">
                  Ops
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/insights" className="hover:text-foreground">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MaestrosAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
