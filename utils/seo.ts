import siteConfig from './site-config';

export interface OptionsConfig {
  omitOpenGraphImage?: any;
}

export function getSeo(options: OptionsConfig = {}) {
  const { omitOpenGraphImage } = options;
  const { seo } = siteConfig;
  // @ts-ignore
  const { images, ...openGraph } = seo.openGraph;

  return {
    ...seo,
    openGraph: {
      ...openGraph,
      images: omitOpenGraphImage ? undefined : images,
    },
  };
}
