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
        <div className="bg-ink text-surface p-12 md:p-24 relative overflow-hidden group">
          {/* Background grid accent */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-surface/70 leading-relaxed mb-12 font-light">
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
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-accent/20 m-8" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-accent/20 m-8" />
        </div>
      </Container>
    </section>
  );
}
