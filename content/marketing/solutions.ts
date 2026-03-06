export const solutionsCopy = {
  eyebrow: "Models & frameworks",
  title: "AI solutions built for enterprise.",
  description:
    "We design and deploy agentic AI layers that integrate with your existing stack—from model offices to climate risk, legacy modernization, and predictive analytics.",

  /** Our key offering – highlighted as the USP. */
  uspTagline: "Our key offering",

  offerings: [
    {
      id: "insurance-model-office",
      title: "Agentic AI driven insurance model office",
      description:
        "An end-to-end model office powered by agentic AI: from data ingestion and validation to pricing, reserving, and reporting—with full auditability and regulator-ready explanations.",
      isUsp: true,
    },
    {
      id: "climate-risk",
      title: "Agentic AI solution for climate risk",
      description:
        "Climate risk assessment and scenario modeling driven by agentic workflows, integrating external data and internal models for stress testing and disclosure readiness.",
      isUsp: false,
    },
    {
      id: "legacy-workflows",
      title: "Transforming legacy systems in agentic workflows",
      description:
        "Bridge legacy policy, claims, and actuarial systems with modern agentic AI—APIs, orchestration, and human-in-the-loop controls without big-bang replacement.",
      isUsp: false,
    },
    {
      id: "mi-dashboards",
      title: "AI driven dynamic MI dashboards with predictive capabilities",
      description:
        "Management information and KPIs that evolve with your business: automated pipelines, predictive signals, and drill-downs built for actuaries and leadership.",
      isUsp: false,
    },
  ] as const,
};
