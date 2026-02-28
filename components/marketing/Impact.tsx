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
        <div className="mb-16 max-w-xl">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            The Results
          </span>
          <h2 className="text-balance text-3xl font-serif font-bold leading-tight md:text-5xl text-ink">
            {title}
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-border/70 bg-surface/95">
          <div className="grid gap-8 border-b border-border/70 bg-muted/40 p-8 md:grid-cols-[1.4fr_minmax(0,2fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent mb-3">
                Snapshot
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Representative outcomes from production deployments across core insurance workflows.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {items.slice(0, 3).map((item, index) => (
                <div key={index} className="border-l border-border/60 pl-6">
                  <div className="text-3xl font-serif italic text-accent mb-1">
                    {item.metric}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.context}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {items.length > 3 && (
            <div className="grid gap-8 p-8 md:grid-cols-3">
              {items.slice(3).map((item, index) => (
                <div
                  key={index}
                  className="group rounded-lg border border-border/60 bg-background/60 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-accent/70"
                >
                  <div className="mb-4 text-2xl font-serif italic text-accent">
                    {item.metric}
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Case {index + 4}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.context}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
