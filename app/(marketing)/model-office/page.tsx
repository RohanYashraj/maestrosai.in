import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  Brain,
  Database,
  BarChart3,
  Users,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Model Office | MaestrosAI",
  description:
    "Agentic AI driven insurance model office—a digital twin where AI agents and humans collaborate across underwriting, pricing, claims, and risk.",
};

const offices = [
  {
    title: "Product Development Office",
    description:
      "AI agents analyze market trends, emerging risks, and regulatory conditions to propose new insurance products. Pricing agents apply actuarial models and predictive analytics to estimate premiums and evaluate product viability.",
    icon: LayoutGrid,
  },
  {
    title: "Underwriting Office",
    description:
      "Risk assessment agents evaluate policy applications using predictive models and risk classification. They analyze applicant data, historical claims patterns, and external risk indicators to recommend underwriting decisions—aligned with risk appetite and regulatory guidelines.",
    icon: Brain,
  },
  {
    title: "Actuarial Office",
    description:
      "Agents perform pricing analysis, reserving estimation, and experience studies. They continuously monitor claims and portfolio performance for dynamic updates to assumptions and projections. Scenario and stress-testing agents evaluate solvency and resilience under extreme events.",
    icon: BarChart3,
  },
  {
    title: "Claims Management Office",
    description:
      "Intake agents register claims and extract data from documentation. Assessment agents analyze coverage and estimate severity; fraud-detection agents flag suspicious patterns. Settlement agents recommend approval and payment processing.",
    icon: Zap,
  },
  {
    title: "Risk & Investment Management",
    description:
      "Agents analyze enterprise risk exposures, catastrophe risk, and asset–liability interactions. They support strategic decisions on capital allocation, portfolio diversification, and financial stability.",
    icon: Database,
  },
];

const layers = [
  {
    name: "AI agent layer",
    detail: "LLM-based agents and orchestration that coordinate reasoning, planning, and collaboration.",
    icon: Brain,
  },
  {
    name: "Data layer",
    detail: "Insurance and claims datasets plus external economic and climate data.",
    icon: Database,
  },
  {
    name: "Analytics layer",
    detail: "Actuarial models, predictive algorithms, and machine learning tools.",
    icon: BarChart3,
  },
  {
    name: "Interaction layer",
    detail: "Dashboards and interfaces for human–agent collaboration.",
    icon: Users,
  },
];

export default function ModelOfficePage() {
  return (
    <main className="flex-1">
      <Section
        eyebrow="Our key offering"
        title="Agentic AI–driven insurance model office"
        description="An advanced digital framework that simulates a modern insurance company using autonomous AI agents. It integrates actuarial science, data science, and insurance operations so decision-making, risk assessment, and core workflows run as a digital twin—with AI and humans working together."
      >
        <article className="max-w-3xl space-y-14">
          {/* Intro */}
          <div className="space-y-5 text-muted-foreground/95 leading-relaxed">
            <p>
              The model office is a <strong className="text-ink">digital twin</strong> of an
              insurance enterprise. Each core department is represented by
              specialized AI agents that perform domain-specific tasks, interact
              with structured data and actuarial models, and complete complex
              workflows across underwriting, pricing, claims, and risk
              management.
            </p>
            <p>
              At the heart of the framework is a{" "}
              <strong className="text-ink">multi-agent architecture</strong>:
              agents are assigned specific operational roles and can reason, plan
              tasks, and collaborate. Unlike traditional rule-based automation,
              agentic AI can interpret data dynamically, evaluate scenarios, and
              generate recommendations for decision-making.
            </p>
          </div>

          {/* Why agentic – inline */}
          <div>
            <h2 className="text-xl font-serif font-semibold text-ink mb-4">
              Reasoning, not just rules
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Rule-based systems follow fixed steps. Agentic AI agents interpret
                context, weigh options, and coordinate across functions—closer to
                how expert teams work.
              </p>
              <p className="text-ink/90 text-sm pl-4 border-l-2 border-accent/40">
                For example, when a major storm is simulated, underwriting and
                claims agents jointly assess exposure and projected losses while
                reserving agents update estimates—all without manual handoffs.
                Product and pricing agents can then adjust terms for affected
                regions.
              </p>
            </div>
          </div>

          {/* Functional units */}
          <div>
            <h2 className="text-xl font-serif font-semibold text-ink mb-2">
              Every department, represented by agents
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              The framework mirrors the key units of a typical insurer. Each
              office is powered by agents that execute domain-specific tasks and
              collaborate across the model.
            </p>
            <ul className="space-y-6">
              {offices.map((office) => {
                const Icon = office.icon;
                return (
                  <li key={office.title} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border/70 bg-muted/40 mt-0.5">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">
                        {office.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {office.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Architecture */}
          <div>
            <h2 className="text-xl font-serif font-semibold text-ink mb-2">
              Four layers, one integrated system
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              The framework is built on a clear separation: agents, data,
              analytics, and human interaction.
            </p>
            <ul className="space-y-4">
              {layers.map((layer) => {
                const Icon = layer.icon;
                return (
                  <li key={layer.name} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border/70 bg-muted/40 mt-0.5">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <span className="font-medium text-ink">{layer.name}</span>
                      <span className="text-muted-foreground"> — {layer.detail}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Use cases */}
          <div>
            <h2 className="text-xl font-serif font-semibold text-ink mb-4">
              Where the model office comes to life
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The framework enables simulation of events such as catastrophe
              scenarios, portfolio stress testing, new product launches, and
              claims surges. Teams can explore &quot;what if&quot; outcomes,
              validate strategies, and train on realistic workflows without
              touching live systems.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Catastrophe events and exposure impact",
                "Portfolio stress testing and solvency",
                "New product launch and pricing",
                "Claims surge and triage response",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Closing */}
          <div className="pt-4 border-t border-border/60">
            <p className="text-muted-foreground/95 leading-relaxed mb-8">
              By combining actuarial expertise with intelligent AI agents, the
              Agentic AI–Driven Insurance Model Office is an innovative way to
              understand and manage complex insurance systems—and to advance
              data-driven decision-making across the industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact#demo">Request a demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#solutions">View all solutions</Link>
              </Button>
            </div>
          </div>
        </article>
      </Section>
    </main>
  );
}
