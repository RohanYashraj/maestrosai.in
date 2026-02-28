import { Impact } from "@/components/marketing/Impact";
import { homeCopy } from "@/content/marketing/home";
import { CTABanner } from "@/components/marketing/CTABanner";

export default function ImpactPage() {
  return (
    <div className="flex flex-col w-full">
      <Impact {...homeCopy.impact} />
      <CTABanner {...homeCopy.cta} />
    </div>
  );
}
