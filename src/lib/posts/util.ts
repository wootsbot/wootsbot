import type { Post } from "#/velite";

/**
 * Groups posts by year extracted from publishedAt
 * @param posts - Array of posts to group
 * @returns Array of tuples [year, posts] sorted in descending order (most recent year first)
 */
export function groupPostsByYear(posts: Post[]): [string, Post[]][] {
  const grouped = posts.reduce(
    (acc, post) => {
      const year = new Date(post.publishedAt).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    },
    {} as Record<string, Post[]>,
  );

  // Sort years in descending order (most recent first) and return as array of tuples
  return Object.entries(grouped).sort((a, b) => Number(b[0]) - Number(a[0]));
}
