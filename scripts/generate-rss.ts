import { writeFileSync } from "fs";
import RSS from "rss";
import { posts } from "#/velite";

async function generate() {
  const feed = new RSS({
    title: "Wootsbot",
    site_url: "https://wootsbot.dev",
    feed_url: "https://wootsbot.dev/feed.xml",
  });

  posts?.map((post) => {
    feed.item({
      title: post.title,
      url: `https://wootsbot.dev/${post.slug}`,
      date: post.publishedAt,
      description: post.description ?? "",
    });

    return post;
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
