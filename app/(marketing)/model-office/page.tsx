import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Model Office | MaestrosAI",
  description:
    "Agentic AI driven insurance model office—end-to-end from data to pricing, reserving, and reporting with full auditability.",
};

export default function ModelOfficePage() {
  return (
    <main className="flex-1">
      <Section
        eyebrow="Our key offering"
        title="Agentic AI driven insurance model office"
        description="An end-to-end model office powered by agentic AI: from data ingestion and validation to pricing, reserving, and reporting—with full auditability and regulator-ready explanations."
      >
        <div className="space-y-16 max-w-3xl">
          <div>
            <h3 className="text-xl font-serif font-semibold text-ink mb-4">
              Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              [Placeholder: Overview of the model office solution—how it fits into the insurance value chain, key benefits, and who it is for.]
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-ink mb-4">
              Capabilities
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              [Placeholder: Capabilities and features—data ingestion, validation, pricing, reserving, reporting, auditability, and regulator-ready explanations.]
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-ink mb-4">
              Why MaestrosAI
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              [Placeholder: Differentiators and why enterprises choose this solution.]
            </p>
          </div>
          <div className="pt-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact#demo">Request a demo</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
