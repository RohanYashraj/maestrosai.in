import { SolutionOverview } from "@/components/marketing/SolutionOverview";
import { homeCopy } from "@/content/marketing/home";
import { CTABanner } from "@/components/marketing/CTABanner";

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      <SolutionOverview {...homeCopy.solutions} />
      <CTABanner {...homeCopy.cta} />
    </div>
  );
}
