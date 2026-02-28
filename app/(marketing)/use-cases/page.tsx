import { UseCases } from "@/components/marketing/UseCases";
import { homeCopy } from "@/content/marketing/home";
import { CTABanner } from "@/components/marketing/CTABanner";

export default function UseCasesPage() {
  return (
    <div className="flex flex-col w-full">
      <UseCases {...homeCopy.useCases} />
      <CTABanner {...homeCopy.cta} />
    </div>
  );
}
