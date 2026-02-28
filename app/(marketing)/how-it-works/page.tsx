import { HowItWorks } from "@/components/marketing/HowItWorks";
import { homeCopy } from "@/content/marketing/home";
import { CTABanner } from "@/components/marketing/CTABanner";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col w-full">
      <HowItWorks {...homeCopy.howItWorks} />
      <CTABanner {...homeCopy.cta} />
    </div>
  );
}
