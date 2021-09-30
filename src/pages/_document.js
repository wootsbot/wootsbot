import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText, globalCss } from '@/stitches';

const globalStyles = globalCss({
  html: { margin: 0, padding: 0 },
  body: { margin: 0, padding: 0, fontFamily: '$inter' },
});

export default class Document extends NextDocument {
  render() {
    globalStyles();

    return (
      <Html lang="en">
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
