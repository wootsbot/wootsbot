import Link from "next/link";
import { DocsPageHeader } from "#/components/markdown/layout/page-header";
import { formatDateShort } from "#/lib/date";
import { groupPostsByYear } from "#/lib/posts/util";
import { posts } from "#/velite";

export default function PostsPage() {
  const postsByYear = groupPostsByYear(posts);

  return (
    <div>
      <DocsPageHeader heading="Posts" />

      <div className="mt-24 flex flex-col gap-16">
        {postsByYear.map(([year, yearPosts]) => (
          <div key={year} className="relative mb-16">
            <h2 className="absolute -top-[75px] -left-14 text-9xl font-semibold text-white/5 italic pointer-events-none select-none">
              {year}
            </h2>

            <ul className="flex flex-col gap-6 relative z-10">
              {yearPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-white/70 transition-colors hover:text-white text-lg flex flex-col md:flex-row md:items-center gap-3"
                  >
                    {post.title}

                    <span className="flex items-center gap-1 text-white/45 hover:text-white/60 text-sm">
                      <time dateTime={formatDateShort(post.publishedAt)}>{formatDateShort(post.publishedAt)}</time>
                      <span>·</span>
                      <time>{post.metadata.readingTime ? `${post.metadata.readingTime} min` : "N/A"}</time>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
