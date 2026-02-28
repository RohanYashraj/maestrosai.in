import { Container } from "@/components/ui/container";

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="py-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
          Article: {params.slug}
        </h1>
        <p className="text-xl text-muted-foreground font-light">
          Content coming soon.
        </p>
      </Container>
    </div>
  );
}
