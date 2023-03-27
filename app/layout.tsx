import './global.css';

import clsx from 'clsx';
import Link from 'next/link';
import type { Metadata } from 'next';

import { format } from 'date-fns';

import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import RssIcon from '@heroicons/react/24/outline/RssIcon';
import BriefcaseIcon from '@heroicons/react/24/outline/BriefcaseIcon';
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon';
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon';

import { Inter, JetBrains_Mono, Outfit, Paytone_One } from 'next/font/google';

import AnalyticsWrapper from '@/components/analytics';
import Tooltip from '@/components/Tooltip';

import WootsbotM from '@/design-system/icons/wootsbotM';

const inter = Inter({
  variable: '--font-inter',
  weight: '400',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetBrains-mono',
  weight: '400',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  weight: '400',
  subsets: ['latin'],
});

const paytoneOne = Paytone_One({
  variable: '--font-paytone-one',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'wootsbot.dev',
    template: '%s | wootsbot.dev',
  },
  description: 'Arquitecto Front-End + Developer Experience at Digital@FEMSA - Spin By Oxxo.',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Web', 'FrontEnd', 'serverless'],
  bookmarks: ['wootsbot.dev/blog'],
  creator: 'Jorge Luis Calleja Alvarado',
  openGraph: {
    title: 'wootsbot.dev',
    description: 'Arquitecto Front-End + Developer Experience at Digital@FEMSA - Spin By Oxxo.',
    url: 'https://wootsbot.dev',
    siteName: 'Wootsbot.dev',
    images: [
      {
        url: 'https://wootsbot.dev/static/images/yoV2.jpg',
        width: 1920,
        height: 1080,
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
    images: ['https://wootsbot.dev/static/images/yoV2.jpg'],
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
      lang="es-MX"
      className={clsx(
        // 'text-white bg-[#0f0d0e]',
        'text-white bg-[#050505]',
        inter.variable,
        jetBrainsMono.variable,
        outfit.variable,
        paytoneOne.variable,
      )}
    >
      <body className="antialiased max-w-6xl flex flex-col lg:flex-row mx-4 lg:mx-auto">
        <aside className="h-screen md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif border-r border-gray-700 py-10 sticky top-0">
          <nav aria-label="Navigation" className="h-full">
            <div className="flex flex-col justify-between items-center h-full">
              <Link
                aria-label="Logotipo de Wootsbot que redirige a la página de inicio"
                className="underline cursor-pointer"
                rel="noopener noreferrer"
                href="/"
              >
                <WootsbotM size={50} strokeWidth={6} />
              </Link>

              <ul className="flex flex-col items-center justify-center space-y-12">
                <li>
                  <div className="group flex relative">
                    <Link
                      aria-label="Logotipo de Wootsbot que redirige a la página de inicio"
                      className="underline cursor-pointer"
                      rel="noopener noreferrer"
                      href="/"
                    >
                      <HomeIcon className="w-6" />
                    </Link>
                    <span className="text-xs group-hover:opacity-100 transition-opacity bg-gray-800 px-3 py-1 text-gray-100 rounded-md absolute -translate-y-1/2 translate-x-3/4 opacity-0 m-4 mx-auto">
                      Inicio
                    </span>
                  </div>
                </li>
                <li>
                  <Tooltip label="Mi misión">
                    <Link
                      aria-label="Link to Mi misión"
                      className="underline cursor-pointer"
                      rel="noopener noreferrer"
                      href="/transparency"
                    >
                      <InformationCircleIcon className="w-6" />
                    </Link>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip label="Articulos">
                    <Link
                      aria-label="Link to Articulos"
                      className="underline cursor-pointer"
                      rel="noopener noreferrer"
                      href="/blog"
                    >
                      <PencilSquareIcon className="w-6" />
                    </Link>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip label="Uses">
                    <Link
                      aria-label="Link to Uses"
                      className="underline cursor-pointer"
                      rel="noopener noreferrer"
                      href="/uses"
                    >
                      <BriefcaseIcon className="w-6" />
                    </Link>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip label="Rss">
                    <Link
                      aria-label="Link to Rss"
                      className="underline cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/feed.xml"
                    >
                      <RssIcon className="w-6" />
                    </Link>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        <main className="max-w-[65ch] mx-auto px-8 pt-10 pb-10">
          {children}
          <AnalyticsWrapper />
          <p className="mt-3"> All rights reserved © wootsbot.dev {format(new Date(), 'yyyy')}</p>
        </main>
      </body>
    </html>
  );
}
