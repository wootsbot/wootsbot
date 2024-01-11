import './global.css';

import clsx from 'clsx';
import type { Metadata } from 'next';

import languageCodes from '@openkit/language-codes';
import { format } from 'date-fns';

import { Inter, JetBrains_Mono, Outfit } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';

import Header from '@/components/Header';

const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetBrains-mono',
  weight: ['400', '300', '200', '100'],
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wootsbot.dev'),
  title: {
    default: 'wootsbot.dev',
    template: '%s | wootsbot.dev',
  },
  description:
    'Desarrollador frontend, constructor de cosas y un fotógrafo apasionado. Actualmente trabajo como Líder técnico Frontend en openbank.',
  keywords: [
    'desarrollador',
    'frontend',
    'openbank',
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'Web',
    'FrontEnd',
    'serverless',
  ],
  bookmarks: ['wootsbot.dev'],
  creator: 'Jorge Luis Calleja Alvarado',
  openGraph: {
    title: 'wootsbot.dev',
    description:
      'Desarrollador frontend, constructor de cosas y un fotógrafo apasionado. Actualmente trabajo como Líder técnico Frontend en openbank.',
    url: 'https://wootsbot.dev',
    siteName: 'Wootsbot',
    images: [
      {
        url: 'https://wootsbot.dev/avatar.jpg',
        width: 2048,
        height: 1365,
      },
    ],
    locale: 'es-MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'wootsbot.dev',
    card: 'summary_large_image',
    creator: 'Jorge Luis Calleja Alvarado',
    images: ['https://wootsbot.dev/avatar.jpg'],
  },
  icons: {
    shortcut: '/favicon.svg',
  },
  verification: {
    google: 'eIiP4yfee_fVZJiwJmZ-I-9EcGRS0AzX1Bm0mBdgBFk',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={languageCodes.ES_MX.langCode}
      className={clsx(
        'bg-[#fff] dark:bg-[#000] text-black/70 dark:text-gray-400',
        inter.variable,
        jetBrainsMono.variable,
        outfit.variable,
      )}
    >
      <body>
        <ThemeProvider defaultTheme='system' enableSystem>
          <Header />

          <main className='max-w-xl flex flex-col sm:mx-auto mx-4 mt-12 mb-32'>
            {children}
            <p className='mt-32'> All rights reserved © wootsbot.dev {format(new Date(), 'yyyy')}</p>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
