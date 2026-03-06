import { Section } from "@/components/ui/section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { solutionsCopy } from "@/content/marketing/solutions";

export default function SolutionsPage() {
  const [usp, ...rest] = solutionsCopy.offerings;

  return (
    <div className="flex flex-col w-full">
      <Section
        eyebrow={solutionsCopy.eyebrow}
        title={solutionsCopy.title}
        description={solutionsCopy.description}
      >
        <div className="space-y-10">
          {/* USP – visually dominant: first, accent border, key offering label */}
          <Card className="border-accent/50 bg-surface shadow-[0_18px_45px_-24px_rgba(15,23,42,0.4)] ring-1 ring-accent/20">
            <CardHeader>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-1">
                {solutionsCopy.uspTagline}
              </span>
              <CardTitle className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-ink">
                {usp.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-muted-foreground/95 leading-relaxed">
                {usp.description}
              </CardDescription>
            </CardContent>
          </Card>

          {/* Remaining three offerings in a grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle className="text-lg font-serif font-semibold text-ink">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
