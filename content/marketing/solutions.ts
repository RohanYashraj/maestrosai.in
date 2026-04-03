export type SolutionOffering = {
  id: string;
  title: string;
  description: string;
  isUsp: boolean;
  /** When set, the card shows a link button to this path. */
  href?: string;
};

export const solutionsCopy = {
  eyebrow: "Models & frameworks",
  title: "AI solutions built for enterprise.",
  description:
    "We design and deploy agentic AI layers that integrate with your existing stack—from model offices to climate risk, legacy modernization, and predictive analytics.",

  /** Our key offering – highlighted as the USP. */
  uspTagline: "Our key offering",

  offerings: [
    {
      id: "actuarial-agents-suite",
      title: "MaestrosAI Actuarial Agents Suite",
      description:
        "A built product for actuarial agentic AI—reserving, pricing, validation, pensions, and reporting. We can deploy with your team; demos available.",
      isUsp: true,
      href: "/actuarial-agents-suite",
    },
    {
      id: "insurance-model-office",
      title: "Agentic AI driven insurance model office",
      description:
        "An end-to-end model office powered by agentic AI: from data ingestion and validation to pricing, reserving, and reporting—with full auditability and regulator-ready explanations.",
      isUsp: false,
      href: "/model-office",
    },
    {
      id: "climate-risk",
      title: "Agentic AI solution for climate risk",
      description:
        "Climate risk assessment and scenario modeling driven by agentic workflows, integrating real-time global climate and geospatial data enables insurers to identify and quantify climate risks and internal models for stress testing and disclosure readiness.",
      isUsp: false,
    },
    {
      id: "legacy-workflows",
      title: "Transforming legacy systems in agentic workflows",
      description:
        "Bridge legacy policy, claims, and actuarial systems with modern agentic AI—APIs, orchestration, and human-in-the-loop controls without big-bang replacement.",
      isUsp: false,
    }
  ] satisfies SolutionOffering[],
};
