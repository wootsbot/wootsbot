import * as React from 'react';

export type TooltipProps = {
  children: React.ReactNode;
  label: string;
};

function Tooltip({ children, label }: TooltipProps) {
  return (
    <div className='group flex relative'>
      {children}
      <span className='hidden sm:block text-xs group-hover:opacity-100 transition-opacity bg-gray-800 px-3 py-1 text-gray-100 rounded-md absolute -translate-y-1/2 translate-x-3/4 opacity-0 m-4 mx-auto'>
        {label}
      </span>
    </div>
  );
}

export default Tooltip;
