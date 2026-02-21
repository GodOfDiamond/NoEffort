import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Learn | No Effort",
  description: "Artikelen, inzichten en achtergrond van No Effort.",
};

interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
}

function getPosts(): PostMeta[] {
  const contentDir = path.join(process.cwd(), "content/learn");
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
    };
  });
}

export default function LearnPage() {
  const posts = getPosts();

  return (
    <div style={{ backgroundColor: "#0a1a0f" }} className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">Learn</h1>
        <p className="text-xl text-white/60 mb-12">Achtergrond, inzichten en verhalen over structuur, geld en gewoonten.</p>

        {posts.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center text-white/40">
            Binnenkort meer.
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link key={post.slug} href={`/learn/${post.slug}`} className="block">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="text-white/30 text-sm mb-2">{post.date}</div>
                  <h2 className="text-white font-semibold text-xl mb-2">{post.title}</h2>
                  <p className="text-white/50 text-sm">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
