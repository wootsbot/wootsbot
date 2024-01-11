import * as React from 'react';

export type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }) {
  return <div className='px-8 max-w-[65ch] mx-auto'>{children}</div>;
}

export default Container;
