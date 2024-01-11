'use client';

import * as RTooltip from '@radix-ui/react-tooltip';

function Tooltip({ children, content }) {
  return (
    <RTooltip.Root>
      <RTooltip.Trigger asChild>{children}</RTooltip.Trigger>
      <RTooltip.Portal>
        <RTooltip.Content
          sideOffset={5}
          className='z-50 data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-white select-none rounded-[4px] bg-white/10 px-[15px] py-[10px] text-sm leading-none'
        >
          {content}
          <RTooltip.Arrow className='fill-white/20 z-50 mb-4' />
        </RTooltip.Content>
      </RTooltip.Portal>
    </RTooltip.Root>
  );
}

export default Tooltip;
