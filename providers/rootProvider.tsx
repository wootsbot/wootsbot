'use client';

import * as Tooltip from '@radix-ui/react-tooltip';

function RootProvider({ children }) {
  return <Tooltip.Provider>{children}</Tooltip.Provider>;
}

export default RootProvider;
