import { Capabilities } from "@/components/marketing/Capabilities";
import { homeCopy } from "@/content/marketing/home";
import { CTABanner } from "@/components/marketing/CTABanner";

export default function CapabilitiesPage() {
  return (
    <div className="flex flex-col w-full">
      <Capabilities {...homeCopy.capabilities} />
      <CTABanner {...homeCopy.cta} />
    </div>
  );
}
