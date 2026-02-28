import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

interface SolutionOverviewProps {
  title: string;
  body: string;
  pillars: {
    title: string;
    description: string;
  }[];
}

export function SolutionOverview({
  title,
  body,
  pillars,
}: SolutionOverviewProps) {
  return (
    <section className="py-24 md:py-32 bg-surface border-b border-ink/5">
      <Container>
        <div className="max-w-3xl mb-20">
          <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase block mb-6">
            The Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-ink mb-8">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            {body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="border-none shadow-none rounded-none bg-muted/30 p-8 flex flex-col justify-between group h-full"
            >
              <div>
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-serif italic text-ink group-hover:text-accent transition-colors">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </div>
              <div className="mt-8 pt-6 border-t border-ink/5">
                <div className="flex items-center gap-2 group-hover:gap-4 transition-all text-xs font-bold uppercase tracking-widest text-ink">
                  Explore {pillar.title}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
