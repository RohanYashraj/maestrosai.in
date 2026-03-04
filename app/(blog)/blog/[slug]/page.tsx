interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [];
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  console.warn(`[Blog] Attempted access to deprecated blog post: ${slug}`);
  return null;
}
