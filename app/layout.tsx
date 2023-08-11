import './global.css';

import clsx from 'clsx';
import type { Metadata } from 'next';

import { format } from 'date-fns';
import languageCodes from '@openkit/language-codes';

import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import RssIcon from '@heroicons/react/24/outline/RssIcon';
import BriefcaseIcon from '@heroicons/react/24/outline/BriefcaseIcon';
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon';
import BookOpenIcon from '@heroicons/react/24/outline/BookOpenIcon';

import Tooltip from './tooltip';

import { Inter, JetBrains_Mono, Outfit } from 'next/font/google';

import NavLink from '@/design-system/NavLink';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';

import RootProvider from '~/providers/rootProvider';

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
        <ThemeProvider defaultTheme="system" enableSystem>
          <main className="max-w-xl flex flex-col sm:mx-auto mx-8 mt-12 mb-32">
            {children}
            <p className="mt-32"> All rights reserved © wootsbot.dev {format(new Date(), 'yyyy')}</p>
          </main>

          <RootProvider>
            <div className="pointer-events-none fixed bottom-4 z-30 grid w-full grid-cols-[1fr,min(36rem,100%),1fr] px-4">
              <nav className="pointer-events-auto col-start-2 -mx-px rounded-xl px-4 py-3 backdrop-blur-md bg-white supports-[backdrop-filter:blur(0px)]:bg-white/[8%] will-change-transform scale-100">
                <ul className="flex flex-row items-center justify-between">
                  <Tooltip content="Inicio">
                    <li>
                      <NavLink
                        aria-label="Logotipo de Wootsbot que redirige a la página de inicio"
                        icon={<HomeIcon className="w-6" />}
                        href="/"
                      />
                    </li>
                  </Tooltip>

                  <Tooltip content="Blog">
                    <li>
                      <NavLink
                        aria-label="Link to Articulos"
                        icon={<PencilSquareIcon className="w-6" />}
                        href="/blog"
                      />
                    </li>
                  </Tooltip>
                  <Tooltip content="Uses">
                    <li>
                      <NavLink aria-label="Link to Uses" icon={<BriefcaseIcon className="w-6" />} href="/uses" />
                    </li>
                  </Tooltip>
                  <Tooltip content="Guestbook">
                    <li>
                      <NavLink
                        aria-label="Link to guestbook"
                        icon={<BookOpenIcon className="w-6" />}
                        href="/guestbook"
                      />
                    </li>
                  </Tooltip>
                  <Tooltip content="Feed">
                    <li>
                      <NavLink
                        aria-label="Link to Rss"
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={<RssIcon className="w-6" />}
                        href="/feed.xml"
                      />
                    </li>
                  </Tooltip>
                </ul>
              </nav>
            </div>
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
