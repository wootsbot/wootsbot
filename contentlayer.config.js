import { defineDocumentType, makeSource } from 'contentlayer/source-files';

import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
//import rehypePrism from 'rehype-prism-plus';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    //resolve: (doc) => doc._raw.flattenedPath,
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  tags: {
    type: 'string',
    resolve: (doc) => doc.tags,
  },
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  // tweetIds: {
  //   type: 'array',
  //   resolve: (doc) => {
  //     const tweetMatches = doc.body.raw.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  //     return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
  //   },
  // },
  structuredData: {
    type: 'object',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image ? `https://wootsbot.dev${doc.image}` : `https://wootsbot.dev/api/og?title=${doc.title}`,
      url: `https://wootsbot.dev/${doc._raw.flattenedPath}`,
      author: {
        '@type': 'Person',
        name: 'Jorge Luis Calleja A.',
      },
    }),
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  //filePathPattern: `**/*.mdx`,
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
    },
    publish: {
      type: 'boolean',
    },

    tags: {
      type: 'string',
      description: 'Comma separated listing of tags',
      required: false,
    },
  },
  computedFields,
}));

// const Snippet = defineDocumentType(() => ({
//   name: "Snippet",
//   filePathPattern: "snippets/*.mdx",
//   contentType: "mdx",
//   fields: {
//     title: { type: "string", required: true },
//     description: { type: "string", required: true },
//     logo: { type: "string", required: true },
//   },
//   computedFields,
// }));

const OtherPage = defineDocumentType(() => ({
  name: 'OtherPage',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: false },
    image: { type: 'string', required: false },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, OtherPage],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          // onVisitHighlightedWord(node) {
          //   node.properties.className = ['word--highlighted'];
          // },

          onVisitHighlightedWord(node, id) {
            node.properties.className = ['word'];

            // `id` will be either 'v', 's', or 'i'.
            // State (v)alue, (s)etter, and (i)nitial value
            if (id) {
              const backgroundColor = {
                v: 'rgb(196 42 94 / 59%)',
                s: 'rgb(0 103 163 / 56%)',
                i: 'rgb(100 50 255 / 35%)',
              }[id];

              const color = {
                v: 'rgb(255 225 225 / 100%)',
                s: 'rgb(175 255 255 / 100%)',
                i: 'rgb(225 200 255 / 100%)',
              }[id];

              // If the word spans across syntax boundaries (e.g. punctuation), remove
              // colors from the child nodes.
              if (node.properties['data-rehype-pretty-code-wrapper']) {
                node.children.forEach((childNode) => {
                  childNode.properties.style = '';
                });
              }

              node.properties.style = `background-color: ${backgroundColor}; color: ${color};`;
            }
          },

          tokensMap: {
            fn: 'entity.name.function',
          },
        },
      ],
      rehypeCodeTitles,
      //rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
