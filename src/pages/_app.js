import { StrictMode } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { IdProvider } from '@radix-ui/react-id';
import { ThemeProvider } from 'next-themes';

import { DefaultSeo } from 'next-seo';

/**
 * dayjs config
 */
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

// when Sunday is the first day of the week
dayjs.locale('es'); // use Spanish locale globally

// import 'normalize.css';

import '@fontsource/inter';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import '@fontsource/jetbrains-mono';
import '@fontsource/jetbrains-mono/100.css';
import '@fontsource/jetbrains-mono/200.css';
import '@fontsource/jetbrains-mono/300.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/600.css';
import '@fontsource/jetbrains-mono/700.css';
import '@fontsource/jetbrains-mono/800.css';

import { globalStyles, darkTheme } from '@/stitches';
import { getSeo } from '@/utils/seo';
import * as gtag from '@/libs/gtag';

const Frame = ({ children }) => <>{children}</>;

function WootsbotDevApp(props) {
  const { Component, pageProps } = props;

  const seo = getSeo();
  const Layout = Component.Layout || Frame;

  globalStyles();

  const start = (url) => {
    gtag.pageview(url);
  };

  const done = () => {};

  useEffect(() => {
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', done);
    Router.events.on('routeChangeError', done);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', done);
      Router.events.off('routeChangeError', done);
    };
  }, []);

  return (
    <StrictMode>
      <IdProvider>
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          value={{
            dark: darkTheme.className,
            light: 'light',
          }}
        >
          <DefaultSeo {...seo} />
          <Head>
            <title>Wootsbot.dev</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          </Head>

          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </IdProvider>
    </StrictMode>
  );
}

export default WootsbotDevApp;
