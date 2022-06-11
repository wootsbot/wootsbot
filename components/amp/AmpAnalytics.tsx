import * as React from 'react';

import AmpIncludeCustomElement from './AmpIncludeCustomElement';

type AmpAnalyticsProps = {
  type: string;
  script: any;
};

function AmpAnalytics(props: AmpAnalyticsProps) {
  return (
    <>
      <AmpIncludeCustomElement name="amp-analytics" version="0.1" />
      <amp-analytics type={props.type}>
        {props.script && (
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(props.script),
            }}
          />
        )}
      </amp-analytics>
    </>
  );
}

export default AmpAnalytics;
