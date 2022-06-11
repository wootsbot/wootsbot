import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { useAmp } from 'next/amp';

import { violet, sage } from '@radix-ui/colors';

import { getCssText } from '@/stitches';

import { GA_TRACKING_ID } from '@/libs/gtag';

import AmpAnalytics from '@/components/amp/AmpAnalytics';

type AmpWrapProps = {
  ampOnly?: any;
  nonAmp?: any;
};

function AmpWrap({ ampOnly, nonAmp }: AmpWrapProps) {
  const isAmp = useAmp();
  if (ampOnly) return isAmp && ampOnly;
  return !isAmp && nonAmp;
}

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

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Wootsbot dev" />
          <meta property="og:url" content="https://wootsbot.dev" />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* AMP - Google Analytics */}
          <AmpWrap
            ampOnly={
              <AmpAnalytics
                type="googleanalytics"
                script={{
                  vars: {
                    account: GA_TRACKING_ID,
                    gtag_id: GA_TRACKING_ID,
                    config: {
                      [GA_TRACKING_ID]: { groups: 'default' },
                    },
                  },
                  triggers: {
                    trackPageview: {
                      on: 'visible',
                      request: 'pageview',
                    },
                  },
                }}
              />
            }
          />

          {/* Non-AMP - Google Analytics */}
          <AmpWrap
            nonAmp={
              <>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}');
                    `,
                  }}
                />
              </>
            }
          />
        </body>
      </Html>
    );
  }
}
