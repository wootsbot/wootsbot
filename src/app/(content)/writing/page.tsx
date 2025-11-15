"use client";

import { ViewTransition } from "react";

import { DocsPageHeader } from "#/components/markdown/layout/page-header";
import { PostsList } from "#/components/writing/posts-list";
import { posts } from "#/velite";

export default function WritingPage() {
  return (
    <ViewTransition>
      <DocsPageHeader heading="Escribiendo" />
      <PostsList posts={posts} />
    </ViewTransition>
  );
}
