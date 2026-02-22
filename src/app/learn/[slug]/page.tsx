import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "content/learn", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data, content };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Niet gevonden" };
  return {
    title: `${post.data.title} | No Effort`,
    description: post.data.description || "",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return (
      <div style={{ backgroundColor: "#0a1a0f" }} className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-white/30 text-sm mb-3">404</div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Artikel niet gevonden
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            De pagina die je zoekt bestaat niet (meer), of de link is onjuist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#0a1a0f" }} className="pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-white/30 text-sm mb-4">{post.data.date}</div>
        <h1 className="text-4xl font-bold text-white mb-6">{post.data.title}</h1>
        <div className="max-w-none text-white/70">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </div>
  );
}
