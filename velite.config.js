import { join } from "node:path";
import rehypeShiki from "@shikijs/rehype";
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { defineCollection, defineConfig, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: ["posts/**/*.mdx"],
  schema: s
    .object({
      title: s.string(),
      description: s.string().optional(),
      publishedAt: s.isodate(),
      published: s.boolean().optional(),
      author: s.string().optional(),
      tags: s.array(s.string()).optional(),
      image: s.string().optional(),
      metadata: s.metadata(),
      content: s.markdown(),
      toc: s.toc(),
      code: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: meta.path.replace(/.*\/posts\//, "").replace(/\.mdx$/, ""),
    })),
});

export default defineConfig({
  root: join(process.cwd(), "./src/content"),
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeShiki,
        {
          transformers: [
            transformerNotationDiff(),
            transformerNotationFocus(),
            transformerNotationHighlight(),
            transformerNotationWordHighlight(),
            transformerMetaHighlight(),
            transformerMetaWordHighlight(),
          ],
          theme: "vitesse-dark",
        },
      ],
      [
        rehypeAutolinkHeadings,
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
