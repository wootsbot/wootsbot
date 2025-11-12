import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/writing",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/:path*",
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
  images: {
    qualities: [75, 90],
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
      "rehype-slug",
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
