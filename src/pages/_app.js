import { StrictMode } from 'react';
import Head from 'next/head';
import App from 'next/app';

import '@fontsource/inter';

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
