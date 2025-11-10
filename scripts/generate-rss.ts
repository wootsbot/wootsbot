import { posts } from "#/velite";
import { writeFileSync } from "fs";
import RSS from "rss";

async function generate() {

  const feed = new RSS({
    title: "Wootsbot",
    site_url: "https://wootsbot.dev",
    feed_url: "https://wootsbot.dev/feed.xml",
  });

  posts?.map((post) => {
    feed.item({
      title: post.title,
      url: `https://wootsbot.dev/posts/${post.slug}`,
      date: post.publishedAt,
      description: post.description ?? "",
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
