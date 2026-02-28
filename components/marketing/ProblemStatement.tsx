import { Container } from "@/components/ui/container";

interface ProblemStatementProps {
  title: string;
  body: string;
  points: string[];
}

export function ProblemStatement({
  title,
  body,
  points,
}: ProblemStatementProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-surface py-24 md:py-32">
      {/* Ledger grid overlay */}
      <div className="pointer-events-none absolute inset-x-0 -top-1/2 h-[140%] bg-grid-elevated opacity-[0.09]" />
      {/* Technical accent frame */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 h-64 w-64 border-r border-t border-surface/10" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="sticky top-24">
            <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase block mb-6 px-3 py-1 border border-accent/20 rounded-full w-fit">
              The Friction
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-surface/70 leading-relaxed font-light">
              {body}
            </p>
          </div>

          <div className="space-y-4">
            {points.map((point, index) => (
              <div
                key={index}
                className="group relative rounded-lg border border-surface/10 bg-surface/5 px-8 py-7 transition-all duration-300 hover:border-accent/40 hover:bg-surface/10"
              >
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-accent group-hover:h-full transition-all duration-500" />
                <div className="flex gap-6 items-start">
                  <span className="text-xs font-mono text-accent pt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  <p className="text-xl font-medium group-hover:translate-x-1 transition-transform">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
