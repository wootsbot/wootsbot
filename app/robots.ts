export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://wootsbot.dev/sitemap.xml',
    host: 'https://wootsbot.dev',
  };
}
