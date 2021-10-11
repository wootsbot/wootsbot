import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '@/stitches';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="es-MX">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
