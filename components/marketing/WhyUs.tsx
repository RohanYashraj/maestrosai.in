import { Container } from "@/components/ui/container";

interface WhyUsPoint {
  title: string;
  description: string;
}

interface WhyUsProps {
  title: string;
  points: WhyUsPoint[];
}

export function WhyUs({ title, points }: WhyUsProps) {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase block mb-6">
            The Advantage
          </span>
          <h2 className="text-balance text-3xl md:text-5xl font-serif font-bold text-ink leading-tight">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {points.map((point, index) => (
            <div key={index} className="relative pt-12">
              <div className="absolute top-0 left-0 text-6xl font-serif italic text-ink/5 select-none pointer-events-none">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-ink mb-4 border-b border-accent/25 pb-4">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
