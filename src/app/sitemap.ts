import { posts as allPosts } from "#/velite";

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `https://wootsbot.dev/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/posts", "/uses"].map((route) => ({
    url: `https://wootsbot.dev/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
