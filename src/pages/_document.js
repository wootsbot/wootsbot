import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { violet, sage } from '@radix-ui/colors';

import { getCssText } from '@/stitches';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="es-MX">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <meta name="application-name" content="wootsbot.dev" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Wootsbot dev" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/static/icons/browserconfig.xml" />
          <meta name="msapplication-TileColor" content={violet.violet11} />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content={violet.violet11} />

          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color={sage.sage11} />
          <link rel="shortcut icon" href="/static/icons/favicon.svg" />

          {/* <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://twitter.com/wootsbot" />
          <meta name="twitter:title" content="Wootsbot dev" />
          <meta name="twitter:description" content="Jorge Luis Calleja A. Creo que entre más compartas, más aprendes" />
          <meta name="twitter:image" content="https://facturacion.parrot.rest/static/icons/logo-connect.svg" />
          <meta name="twitter:creator" content="@wootsbot" /> */}

          <meta property="og:type" content="website" />
          {/* <meta property="og:title" content="Wootsbot dev" />
          <meta property="og:description" content="Jorge Luis Calleja A. Creo que entre más compartas, más aprendes" /> */}
          <meta property="og:site_name" content="Wootsbot dev" />
          <meta property="og:url" content="https://wootsbot.dev" />
          <meta property="og:image" content="/static/icons/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
