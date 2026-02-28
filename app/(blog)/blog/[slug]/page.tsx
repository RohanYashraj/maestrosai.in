import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { MdxContent } from "@/components/blog/MdxContent";
import { format, parseISO } from "date-fns";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return;

  return {
    title: `${post.title} | MaestrosAI`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.description,
    image: post.image,
    author: {
      "@type": "Organization",
      name: "MaestrosAI",
    },
  };

  return (
    <article className="flex-1 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Post Hero */}
      <header className="relative pt-20 pb-12 bg-ink text-white overflow-hidden">
        <Container className="max-w-4xl">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="mb-8 p-0 hover:bg-transparent text-accent hover:text-accent/80 font-bold uppercase tracking-widest text-[10px]"
          >
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-3 h-3" /> Back to Blogs
            </Link>
          </Button>

          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase pb-8 border-b border-white/10">
            <span className="flex items-center gap-2 text-accent">
              <Calendar className="w-4 h-4" />{" "}
              {format(parseISO(post.date), "MMMM d, yyyy")}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> {post.author}
            </span>
            {post.tags && (
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4" /> {post.tags.join(", ")}
              </span>
            )}
          </div>
        </Container>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] pointer-events-none" />
      </header>

      {/* Featured Image */}
      <Container className="max-w-4xl mt-12 relative z-10">
        <div className="aspect-video relative rounded-sm overflow-hidden border border-ink/10 shadow-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>

      {/* Content */}
      <Container className="max-w-4xl pt-16">
        <div
          className="prose prose-lg prose-ink max-w-none 
          prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-ink/5
          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
          prose-strong:text-ink prose-strong:font-bold
          prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-sm prose-blockquote:italic prose-blockquote:text-ink
          prose-li:text-muted-foreground
        "
        >
          <MdxContent code={post.body.code} />
        </div>

        <footer className="mt-20 pt-12 border-t border-ink/5">
          <div className="bg-surface/2 p-8 border border-ink/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md text-center md:text-left">
              <h4 className="font-serif font-bold text-xl text-ink mb-2">
                Build your AI roadmap
              </h4>
              <p className="text-sm text-muted-foreground">
                Discuss how our high-trust AI layers can transform your
                underwriting or claims operations.
              </p>
            </div>
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact#demo">Request a Walkthrough</Link>
            </Button>
          </div>
        </footer>
      </Container>
    </article>
  );
}
