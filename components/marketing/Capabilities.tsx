import { Container } from "@/components/ui/container";
import { CheckCircle2 } from "lucide-react";

interface Capability {
  title: string;
  description: string;
}

interface CapabilitiesProps {
  title: string;
  items: Capability[];
}

export function Capabilities({ title, items }: CapabilitiesProps) {
  return (
    <section className="py-24 md:py-32 bg-muted/20 border-y border-ink/5">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase block mb-6">
            Technical Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-ink mb-8 leading-tight">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {items.map((item, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-sm bg-surface border border-ink/5 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5 text-accent opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
