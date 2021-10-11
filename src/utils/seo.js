import siteConfig from './site-config';

export function getSeo(options = {}) {
  const { omitOpenGraphImage } = options;
  const { seo } = siteConfig;
  const { images, ...openGraph } = seo.openGraph;

  return {
    ...seo,
    openGraph: {
      ...openGraph,
      images: omitOpenGraphImage ? undefined : images,
    },
  };
}
