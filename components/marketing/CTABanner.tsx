import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTABannerProps {
  title: string;
  body: string;
  buttonLabel: string;
}

export function CTABanner({ title, body, buttonLabel }: CTABannerProps) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden bg-ink text-surface p-12 md:p-24 group card-elevated">
          {/* Background grid accent */}
          <div className="pointer-events-none absolute inset-0 bg-grid-elevated opacity-[0.12]" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-balance text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-surface/70 leading-relaxed mb-10 font-light">
              {body}
            </p>
            <Button
              asChild
              size="lg"
              variant="accent"
              className="h-14 px-10 text-base shadow-2xl shadow-accent/20"
            >
              <Link href="/contact#demo">{buttonLabel}</Link>
            </Button>
          </div>

          {/* Subtle corner accents */}
          <div className="absolute top-0 left-0 m-8 h-16 w-16 border-l-2 border-t-2 border-accent/30" />
          <div className="absolute bottom-0 right-0 m-8 h-16 w-16 border-r-2 border-b-2 border-accent/30" />
        </div>
      </Container>
    </section>
  );
}
