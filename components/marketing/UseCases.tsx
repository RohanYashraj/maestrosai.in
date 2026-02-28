import { Container } from "@/components/ui/container";

interface UseCase {
  role: string;
  impact: string;
}

interface UseCasesProps {
  title: string;
  items: UseCase[];
}

export function UseCases({ title, items }: UseCasesProps) {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase block mb-6">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-ink leading-tight">
              {title}
            </h2>
          </div>
          <div className="shrink-0">
            <div className="text-sm font-mono text-ink/40 border-l border-accent pl-4">
              [ ROLE-BASED IMPACT ]
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-surface p-12 transition-colors hover:bg-muted/30"
            >
              <h3 className="text-xs font-bold tracking-widest text-accent uppercase mb-4">
                FOR {item.role}
              </h3>
              <p className="text-2xl font-serif italic text-ink leading-relaxed">
                &ldquo;{item.impact}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
