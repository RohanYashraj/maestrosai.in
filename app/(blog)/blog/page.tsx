import { Container } from "@/components/ui/container";

export default function BlogPage() {
  return (
    <div className="py-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
          Blog
        </h1>
        <p className="text-xl text-muted-foreground font-light max-w-2xl">
          Latest articles and analysis on insurance-grade AI, automation, and
          decisioning.
        </p>
      </Container>
    </div>
  );
}
