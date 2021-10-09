import { StrictMode } from 'react';
import Head from 'next/head';
import App from 'next/app';

import { IdProvider } from '@radix-ui/react-id';
import { ThemeProvider } from 'next-themes';

/**
 * dayjs config
 */
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

import 'dayjs/locale/es';

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

class Srr extends App {
  render() {
    const { Component, pageProps } = this.props;
    globalStyles();
    return (
      <StrictMode>
        <IdProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            value={{
              dark: darkTheme.className,
              light: 'light',
            }}
          >
            <Head>
              <title>Wootsbot.dev</title>
            </Head>
            <Component {...pageProps} />
          </ThemeProvider>
        </IdProvider>
      </StrictMode>
    );
  }
}

export default Srr;
