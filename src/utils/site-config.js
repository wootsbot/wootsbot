import dayjs from 'dayjs';

const siteConfig = {
  copyright: `All rights reserved © wootsbot.dev ${dayjs().year()}.`,
  author: {
    name: 'Jorge Luis Calleja Alvarado',
    github: 'https://github.com/wootsbot',
    twitter: 'https://twitter.com/wootsbot',
    email: 'jorgelca1205@gmail.com',
  },
  seo: {
    title: 'Wootsbot dev',
    titleTemplate: '%s - Wootsbot dev',
    description: 'Jorge Luis Calleja A. Creo que "entre más compartas, más aprendes".',
    siteUrl: 'https://wootsbot.dev/',
    twitter: {
      handle: '@wootsbot',
      site: '@wootsbot',
      cardType: 'summary_large_image',
    },
    openGraph: {
      type: 'website',
      locale: 'es-MX',
      url: 'https://wootsbot.dev/',
      title: 'Wootsbot dev',
      description: 'Creo que "entre más compartas, más aprendes".',
      site_name: 'wootsbot.dev',
      images: [
        {
          url: 'https://wootsbot.dev/og-image.png',
          width: 1240,
          height: 480,
          alt: 'wootsbot',
        },
        {
          url: 'https://wootsbot.dev/twitter-og-image.png',
          width: 1012,
          height: 506,
          alt: 'Creo que "entre más compartas, más aprendes".',
        },
      ],
    },
  },
};

export default siteConfig;
