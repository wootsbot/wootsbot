"use client";

import Link from "next/link";
import { ViewTransition } from "react";

import { formatDateShort } from "#/lib/date";

import type { Post as PostT } from "#/velite";

type PostProps = {
  post: PostT;
};

export function Post({ post }: PostProps) {
  return (
    <ViewTransition>
      <li>
        <Link
          href={`/${post.slug}`}
          className="text-white/70 transition-colors hover:text-white text-lg flex flex-col md:flex-row md:items-center gap-3"
        >
          <ViewTransition name={`post-${post.slug}-title`}>
            <h2>{post.title}</h2>
          </ViewTransition>

          <ViewTransition name={`post-${post.slug}-date`}>
            <span className="flex items-center gap-1 text-white/45 hover:text-white/60 text-sm">
              <time dateTime={formatDateShort(post.publishedAt)}>{formatDateShort(post.publishedAt)}</time>
              <span>·</span>
              <time>{post.metadata.readingTime ? `${post.metadata.readingTime} min` : "N/A"}</time>
            </span>
          </ViewTransition>
        </Link>
      </li>
    </ViewTransition>
  );
}
