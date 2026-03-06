import { Hero } from "@/components/marketing/Hero";
import { CTABanner } from "@/components/marketing/CTABanner";
import { homeCopy } from "@/content/marketing/home";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero {...homeCopy.hero} showAside={false} />
      <CTABanner {...homeCopy.cta} />
    </div>
  );
}
