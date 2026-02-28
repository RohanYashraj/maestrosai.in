export default function InsightPost({ params }: { params: { slug: string } }) {
  return (
    <div className="container py-24">
      <h1 className="text-4xl font-bold italic">Article: {params.slug}</h1>
      <p className="mt-4 text-muted-foreground">Article content coming soon.</p>
    </div>
  );
}
