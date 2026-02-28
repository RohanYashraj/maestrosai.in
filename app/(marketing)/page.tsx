import { Hero } from "@/components/marketing/Hero";
import { ProblemStatement } from "@/components/marketing/ProblemStatement";
import { WhyUs } from "@/components/marketing/WhyUs";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Impact } from "@/components/marketing/Impact";
import { CTABanner } from "@/components/marketing/CTABanner";
import { homeCopy } from "@/content/marketing/home";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero {...homeCopy.hero} />
      <ProblemStatement {...homeCopy.problem} />
      <WhyUs {...homeCopy.whyUs} />
      <HowItWorks {...homeCopy.howItWorks} />
      <Impact {...homeCopy.impact} />
      <CTABanner {...homeCopy.cta} />
    </div>
  );
}
