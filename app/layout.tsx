import './global.css';

import clsx from 'clsx';
import type { Metadata } from 'next';

import { Inter, JetBrains_Mono, Outfit, Paytone_One } from 'next/font/google';

import Footer from '@/components/Footer';
import AnalyticsWrapper from '@/components/analytics';

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
        'text-white bg-[#0f0d0e]',
        inter.variable,
        jetBrainsMono.variable,
        outfit.variable,
        paytoneOne.variable,
      )}
    >
      <body>
        <main>
          {children}
          <AnalyticsWrapper />
        </main>
        <Footer />
      </body>
    </html>
  );
}
