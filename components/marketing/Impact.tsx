import { Container } from "@/components/ui/container";

interface ImpactItem {
  metric: string;
  context: string;
}

interface ImpactProps {
  title: string;
  items: ImpactItem[];
}

export function Impact({ title, items }: ImpactProps) {
  return (
    <section className="py-24 md:py-32 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase block mb-6">
              The Results
            </span>
            <h2 className="text-balance text-3xl md:text-5xl font-serif font-bold text-ink leading-tight">
              {title}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col group">
              <div className="text-5xl lg:text-6xl font-serif italic text-accent mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                {item.metric.split(" ")[0]}
                <span className="text-2xl not-italic ml-2 text-ink/70">
                  {item.metric.split(" ").slice(1).join(" ")}
                </span>
              </div>
              <div className="pt-8 border-t border-border/70">
                <p className="text-lg text-ink font-semibold mb-2">
                  {item.context.split(" ").slice(0, 3).join(" ")}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  {item.context.split(" ").slice(3).join(" ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
