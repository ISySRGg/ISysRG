import Link from "next/link"
import { client } from "@/sanity/client"
import { allPostsQuery } from "@/sanity/queries"
import { type SanityDocument } from "next-sanity"

const options = { next: { revalidate: 30 } }

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(allPostsQuery, {}, options)

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="mb-8 text-4xl font-bold">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/posts/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
