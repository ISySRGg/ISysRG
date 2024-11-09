import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import { postQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"
import { PortableText, type SanityDocument } from "next-sanity"

const options = { next: { revalidate: 30 } }

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await client.fetch<SanityDocument>(postQuery, params, options)
  const postImageUrl = post.image
    ? urlForImage(post.image)?.width(550).height(310).url()
    : null

  return (
    <main className="container mx-auto flex flex-col gap-4 p-8">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="mb-8 text-4xl font-bold">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  )
}
