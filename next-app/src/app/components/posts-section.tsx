import Link from "next/link"
import { client } from "@/sanity/client"
import { allPostsQuery } from "@/sanity/queries"

import { Post } from "@/types/sanity.types"
import { Button } from "@/components/ui/button"
import BaseSection from "@/components/base-section"

const options = { next: { revalidate: 30 } }

export default async function PostsSection() {
  const posts = await client.fetch<Post[]>(allPostsQuery, {}, options)

  return (
    <BaseSection title="Posts">
      <article className="prose prose-sm md:prose-base">
        <p>
          Stay updated with the latest news, research insights, and developments
          from the Intelligent Systems Research Group (ISysRG).
        </p>
      </article>
      <ul className="mt-4 flex flex-col gap-6">
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`posts/${post.slug?.current}`} className="group">
              <h2 className="text-lg font-bold group-hover:underline md:text-xl">
                {post.title}
              </h2>
              <p className="text-sm md:text-base">
                {new Date(post.publishedAt as string).toDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-end pt-8">
        <Button variant="outline" size="xl" asChild className="w-full sm:w-fit">
          <Link href="/datasets">Explore more</Link>
        </Button>
      </div>
    </BaseSection>
  )
}
