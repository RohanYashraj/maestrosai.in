import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Calculator,
  CircleAlert,
  CircleCheck,
  FileCheck,
  FileDown,
  Globe,
  LineChart,
  Scale,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "Actuarial Agents Suite | MaestrosAI",
  description:
    "We built an agentic AI product for actuarial teams. Book a demo or work with us to deploy it at your company.",
};

const marketSignals = [
  {
    title: "US regulators expect clear AI governance",
    stat: "2023",
    description:
      "Insurers are expected to show how they govern AI: testing, records, and oversight—not just good intentions.",
    sourceLabel: "NAIC AI Model Bulletin",
    sourceHref:
      "https://content.naic.org/sites/default/files/cmte-h-big-data-artificial-intelligence-wg-ai-model-bulletin.pdf.pdf",
    icon: ShieldCheck,
  },
  {
    title: "Many insurers already use AI",
    stat: "50% / 24%",
    description:
      "In Europe, about half of non-life insurers and about a quarter of life insurers reported using AI, with more growth expected.",
    sourceLabel: "EIOPA digitalisation report",
    sourceHref:
      "https://www.eiopa.europa.eu/eiopa-report-takes-pulse-digitalisation-european-insurance-market-2024-04-30_en",
    icon: Globe,
  },
  {
    title: "Actuaries are still figuring out day-to-day use",
    stat: "2025",
    description:
      "A Society of Actuaries survey found wide interest but limited weekly use; compliance worries and skills gaps are common hurdles.",
    sourceLabel: "SOA Member AI Survey",
    sourceHref:
      "https://beta.soa.org/resources/research-reports/2025/ai-member-survey-summer-2025/",
    icon: LineChart,
  },
  {
    title: "Customers want fast help and human backup",
    stat: "~70%",
    description:
      "Research shows many people already use general AI for insurance shopping; they still care about privacy, accuracy, and talking to a person when it matters.",
    sourceLabel: "Geneva Association",
    sourceHref:
      "https://www.genevaassociation.org/press-releases/insurance-customers-want-both-gen-ai-efficiency-and-human-empathy-finds-new-geneva",
    icon: Sparkles,
  },
];

const whatItDoes = [
  {
    title: "AI that can use your data and tools",
    description:
      "Agents can work with files you upload, run queries, and help with analysis—not only chat text.",
    icon: Workflow,
  },
  {
    title: "Outputs you can review",
    description:
      "Answers are meant to support your experts: assumptions and methods are spelled out so reviewers can check them.",
    icon: BadgeCheck,
  },
  {
    title: "Humans stay in charge",
    description:
      "This is decision support for qualified actuaries and teams. It does not replace professional judgment or sign-offs.",
    icon: ShieldCheck,
  },
];

const workstreams = [
  {
    title: "Reserving",
    description:
      "Work with loss triangles and claims-style data, explore results, and draft language around methods and assumptions.",
    icon: BarChart3,
  },
  {
    title: "Pricing and rates",
    description:
      "Speed up reviews and narratives using your data, without replacing your main pricing systems.",
    icon: Calculator,
  },
  {
    title: "Experience studies",
    description:
      "Help with mortality, lapse, morbidity, severity, and similar studies using structured data and clear summaries.",
    icon: LineChart,
  },
  {
    title: "Model validation",
    description:
      "Support test plans, documentation, and review trails so validation teams can work in a repeatable way.",
    icon: FileCheck,
  },
];

const governance = [
  {
    name: "Activity log",
    detail:
      "See what the system did (for example queries and tool steps), not just the final answer.",
    icon: ScrollText,
  },
  {
    name: "PDF export",
    detail:
      "Export a clean PDF of the Q&A for meetings or files; detailed logs stay in the app.",
    icon: FileDown,
  },
  {
    name: "Configurable skills",
    detail:
      "Domain rules live in versioned instructions so you can align behavior with your standards.",
    icon: Workflow,
  },
  {
    name: "Controls that fit the risk",
    detail:
      "Tighter controls where consumer impact or automation is higher.",
    icon: ShieldCheck,
  },
];

const demoAudience = [
  "Chief actuaries and valuation leaders who want a real product, not a slide deck.",
  "Reserving and pricing teams who need faster cycles with clear review paths.",
  "Model risk and validation groups who care about logs and repeatability.",
  "Innovation and IT teams rolling out agentic AI across the company.",
];

export default function ActuarialAgentsSuitePage() {
  return (
    <div className="flex-1">
      <Section
        eyebrow="Product"
        title="MaestrosAI Actuarial Agents Suite"
        description="We built it. We can deploy it with your team. Book a demo when you are ready."
      >
        <article className="max-w-3xl space-y-14">
          <div className="rounded-xl border border-accent/25 bg-accent/5 px-5 py-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              The Actuarial Agents Suite is a working product. We are happy to walk you through it
              live and to discuss how we can help your company roll out agentic AI for actuarial
              work—safely, with your governance in mind.
            </p>
            <div className="mt-4">
              <Button asChild variant="accent" size="sm">
                <Link href="/contact#demo">
                  Book a demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-5 text-muted-foreground/95 leading-relaxed">
            <p>
              <strong className="text-ink">We built the Actuarial Agents Suite</strong> so insurers
              can use agentic AI on real actuarial tasks: reserving, pricing, validation, pensions,
              and reporting—not generic chat alone.
            </p>
            <p>
              If you want to move from experiments to something your teams can actually use,{" "}
              <strong className="text-ink">we can work with you to deploy it</strong>: pilots,
              integration thinking, and workflows that match how you review and approve work.
            </p>
            <p>
              <strong className="text-ink">Demos are available now.</strong> We will show the
              product, answer your questions, and talk through what a rollout could look like for
              your organization.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-ink mb-2">
              Why the industry is paying attention
            </h2>
            <p className="text-muted-foreground text-sm mb-7">
              A few recent signals—in plain terms—on AI and insurance. Read the sources if you
              want the full detail.
            </p>
            <ul className="space-y-5">
              {marketSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <li key={signal.title} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border/70 bg-muted/40 mt-0.5">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2 mb-1">
                        <h3 className="font-semibold text-ink">{signal.title}</h3>
                        <span className="text-xs font-semibold tracking-wide text-accent">
                          {signal.stat}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {signal.description}{" "}
                        <a
                          className="text-accent underline-offset-4 hover:underline"
                          href={signal.sourceHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {signal.sourceLabel}
                        </a>
                        .
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-ink mb-2">
              What the product gives you
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Three ideas that matter for day-to-day use.
            </p>
            <ul className="space-y-6">
              {whatItDoes.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border/70 bg-muted/40 mt-0.5">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-ink mb-2">
              Areas we cover
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Different tabs for different jobs—so teams are not stuck in one generic assistant.
            </p>
            <ul className="space-y-6">
              {workstreams.map((ws) => {
                const Icon = ws.icon;
                return (
                  <li key={ws.title} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border/70 bg-muted/40 mt-0.5">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">{ws.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {ws.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-ink mb-2">
              Built for governance
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Outputs are drafts for your qualified reviewers—not filings or automatic sign-offs.
            </p>
            <ul className="space-y-4">
              {governance.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border/70 bg-muted/40 mt-0.5">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <span className="font-medium text-ink">{item.name}</span>
                      <span className="text-muted-foreground"> — {item.detail}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-ink mb-2">
              Before and after
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-2xl">
              Same team, same standards—less friction getting from question to something reviewers
              can stand behind.
            </p>

            <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
              <div className="flex flex-1 flex-col rounded-xl border border-border/80 bg-muted/25 p-5 md:rounded-r-none md:border-r-0">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-surface/80">
                    <CircleAlert className="h-4 w-4 text-muted-foreground" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Before
                    </p>
                    <p className="font-semibold text-ink">Scattered and hard to audit</p>
                  </div>
                </div>
                <ul className="mt-auto space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    Juggling spreadsheets, email, and one-off AI chats
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    No single record of what ran on your data
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    Reviewers reverse-engineering answers from threads
                  </li>
                </ul>
              </div>

              <div
                className="flex items-center justify-center py-2 md:w-14 md:border-y md:border-border/80 md:bg-muted/10 md:py-0"
                aria-hidden
              >
                <ArrowRight className="h-5 w-5 shrink-0 rotate-90 text-accent md:rotate-0" />
              </div>

              <div className="flex flex-1 flex-col rounded-xl border border-accent/35 bg-accent/6 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] ring-1 ring-accent/15 md:rounded-l-none md:border-l-0">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-surface/80">
                    <CircleCheck className="h-4 w-4 text-accent" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      After
                    </p>
                    <p className="font-semibold text-ink">One surface, traceable by design</p>
                  </div>
                </div>
                <ul className="mt-auto space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    Questions and answers live in one governed workspace
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    Logs show what the agents did—not just the final paragraph
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    PDF handoffs that fit committee and file workflows
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-ink mb-4">
              Who usually books a demo
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {demoAudience.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent/70 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-ink mb-4">
              Try it yourself or talk to us
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              Developers can run the app locally. Prefer a guided tour?{" "}
              <Link className="text-accent underline-offset-4 hover:underline" href="/contact#demo">
                Request a demo
              </Link>{" "}
              and we will show reserving, validation, or another flow that matters to you—with real
              logs and handoff examples.
            </p>
            <pre className="rounded-lg border border-border/70 bg-muted/30 p-4 text-xs leading-relaxed overflow-x-auto font-mono text-ink/90">
              {`cd actuarial_agents_suite
uv sync
uv run playwright install chromium   # one-time, for PDF export
# Set GEMINI_API_KEY in .env (see .env.example)
uv run streamlit run app_streamlit.py`}
            </pre>
            <p className="mt-6 text-sm text-muted-foreground flex flex-wrap gap-x-2 gap-y-1 items-center">
              <span className="font-medium text-ink">Links:</span>
              <a
                className="text-accent underline-offset-4 hover:underline"
                href="https://agentskills.io/specification"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agent Skills
              </a>
              <span aria-hidden>·</span>
              <a
                className="text-accent underline-offset-4 hover:underline"
                href="https://aistudio.google.com/apikey"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google AI Studio (API keys)
              </a>
              <span aria-hidden>·</span>
              <a
                className="text-accent underline-offset-4 hover:underline"
                href="https://github.com/agno-agi/agno"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agno on GitHub
              </a>
            </p>
          </div>

          <div className="pt-4 border-t border-border/60">
            <p className="text-muted-foreground/95 leading-relaxed mb-8 font-serif italic text-ink/80">
              MaestrosAI Actuarial Agents Suite: a real product for agentic AI in insurance—with your
              team in the loop and demos ready when you are.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact#demo">
                  Request a demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#solutions">View all solutions</Link>
              </Button>
            </div>
          </div>
        </article>
      </Section>
    </div>
  );
}
