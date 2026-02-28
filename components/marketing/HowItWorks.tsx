import { Container } from "@/components/ui/container";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  steps: Step[];
}

export function HowItWorks({ title, steps }: HowItWorksProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-surface py-24 md:py-32">
      {/* Actuarial grid backdrop */}
      <div className="pointer-events-none absolute inset-x-0 -top-1/2 h-[140%] bg-grid-elevated opacity-[0.08]" />

      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            The Methodology
          </span>
          <h2 className="text-balance text-3xl font-serif font-bold leading-tight md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="relative rounded-xl border border-surface/15 bg-surface/5 p-6 md:p-10 lg:p-12">
          <div className="grid gap-10 md:grid-cols-5">
            {steps.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col gap-4 border-b border-surface/15 pb-8 last:border-none md:border-b-0 md:border-r md:pb-0 md:pr-8 last:md:border-none"
              >
                {/* Step badge */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-surface/40 bg-ink text-xs font-mono font-semibold text-surface group-hover:border-accent group-hover:text-accent transition-colors">
                    {item.step}
                  </div>
                </div>

                {/* Title + description */}
                <div className="space-y-3">
                  <h3 className="text-base font-serif font-semibold leading-snug md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-surface/70">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-col gap-3 border-t border-surface/15 pt-6 text-xs text-surface/60 md:flex-row md:items-center md:justify-between">
            <p className="font-medium">
              Each step is configured around your governance, data contracts, and target KPIs.
            </p>
            <p className="font-mono uppercase tracking-[0.2em]">
              Human-in-the-loop by design
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
