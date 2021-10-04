import { StrictMode } from 'react';
import Head from 'next/head';
import App from 'next/app';

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

import '../prism-one-light.css';

class Srr extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <StrictMode>
        <Head>
          <title>Wootsbot.dev</title>
        </Head>

        <Component {...pageProps} />
      </StrictMode>
    );
  }
}

export default Srr;
