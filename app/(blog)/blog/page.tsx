import Link from "next/link";
import Image from "next/image";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata = {
  title: "Blog | MaestrosAI",
  description:
    "Insights into the future of insurance AI, explainability, and automation.",
};

function PostCard(post: Post) {
  return (
    <Card className="group overflow-hidden border-ink/5 hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
      <Link href={post.url} className="block relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors" />
      </Link>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-4 text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />{" "}
            {format(parseISO(post.date), "MMM d, yyyy")}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="w-3 h-3" /> {post.author.split(" ")[0]}
          </span>
        </div>
        <h3 className="text-xl font-serif font-bold text-ink mb-3 group-hover:text-accent transition-colors leading-tight">
          <Link href={post.url}>{post.title}</Link>
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">
          {post.description}
        </p>
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="p-0 hover:bg-transparent text-accent hover:text-accent/80 font-bold uppercase tracking-widest text-[10px]"
        >
          <Link href={post.url} className="flex items-center gap-2">
            Read Analysis <ArrowRight className="w-3 h-3" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(parseISO(a.date), parseISO(b.date)),
  );

  return (
    <main className="flex-1">
      {/* Blog Header */}
      <section className="py-20 bg-ink text-white relative overflow-hidden">
        <Container>
          <div className="max-w-3xl relative z-10">
            <div className="inline-block mb-4 px-3 py-1 border border-accent/20 rounded-full bg-accent/5">
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-accent uppercase">
                Intelligence_Repository
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
              Blogs.
            </h1>
            <p className="text-xl text-muted-foreground/80 font-light leading-relaxed">
              Technical perspectives on decision intelligence, actuarial-grade
              AI, and the operational transformation of modern insurance.
            </p>
          </div>
        </Container>

        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] pointer-events-none" />
      </section>

      {/* Posts Grid */}
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post._id} {...post} />
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20 border border-dashed border-ink/10 rounded-sm">
              <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase">
                {">"} No blogs found
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
