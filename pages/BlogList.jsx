import { getAllPosts } from "@/app/getData"
import Link from "next/link"

const BlogList = async () => {
  const posts = await getAllPosts()
  return (
    <div className="flex flex-wrap justify-center">
      {posts &&
        posts.map((post) => (
          <Link
            href={`blog/${post.id}`}
            className="relative bg-slate-950 px-4 py-8 m-2 w-96 space-y-3"
            key={post.id}
          >
            <span className="text-2xl font-bold">{post.title}</span>
            <p>{post.summary}</p>
            <p className="absolute right-2 bottom-2 text-sm">
              {" "}
              - {post.author}
            </p>
          </Link>
        ))}
    </div>
  )
}

export default BlogList
