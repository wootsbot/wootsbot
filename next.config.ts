import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  import("velite").then((m) => m.build({ watch: isDev, clean: !isDev }));
}

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/posts",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/posts/:path*",
        permanent: true,
      },
      {
        source: "/uses",
        destination: "/use",
        permanent: true,
      },
      {
        source: "/guestbook",
        destination: "/",
        permanent: true,
      },
    ];
  },
  experimental: {
    mdxRs: {
      mdxType: "gfm",
    },
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      // Without options
      "rehype-slug",
      // With options
      [
        "rehype-autolink-headings",
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
