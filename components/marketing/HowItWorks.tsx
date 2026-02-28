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
    <section className="py-24 md:py-32 bg-ink text-surface overflow-hidden">
      <Container>
        <div className="max-w-3xl mb-24">
          <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase block mb-6">
            The Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
            {title}
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[39px] top-0 h-full w-px bg-surface/10 hidden md:block" />

          <div className="space-y-20">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-8 md:gap-24 items-start group"
              >
                <div className="shrink-0 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-ink border border-surface/20 flex items-center justify-center text-xl font-mono font-bold group-hover:border-accent group-hover:text-accent transition-all duration-300">
                    {item.step}
                  </div>
                </div>

                <div className="max-w-2xl pt-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-lg text-surface/60 leading-relaxed font-light">
                    {item.description}
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
