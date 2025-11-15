"use client";

import { ViewTransition } from "react";

import { groupPostsByYear } from "#/lib/posts/util";
import type { Post as PostT } from "#/velite";

import { Post } from "./post";

type PostsListProps = {
  posts: PostT[];
};

export function PostsList({ posts }: PostsListProps) {
  const postsByYear = groupPostsByYear(posts);

  return (
    <ViewTransition>
      <div className="mt-24 flex flex-col gap-16">
        {postsByYear.map(([year, yearPosts]) => (
          <div key={year} className="relative mb-16">
            <h2 className="absolute -top-[75px] -left-14 text-9xl font-semibold text-white/5 italic pointer-events-none select-none">
              {year}
            </h2>

            <ul className="flex flex-col gap-6 relative z-10">
              {yearPosts.map((post) => (
                <ViewTransition key={post.slug}>
                  <Post post={post} />
                </ViewTransition>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ViewTransition>
  );
}
