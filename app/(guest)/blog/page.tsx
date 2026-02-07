import Link from "next/link";
import { BLOG_POSTS } from "@/constants/blog";

export default function BlogPage() {
  console.log(BLOG_POSTS)

  return (
    <div className="py-7">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="flex flex-col gap-4">
        {BLOG_POSTS.map((post) => (
          <Link key={post.id} href={`./blog/${post.slug}`}>
            <div className="border rounded-lg p-4 hover:bg-muted/50">
              <h2 className="font-semibold text-lg">{post.title}</h2>
              <p className="text-muted-foreground text-base mt-1">{post.overview}</p>
              <p className="text-sm text-muted-foreground text-base mt-2">{post.date} • {post.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}