'use client';

import type { ReactNode } from 'react';
import { useMemo } from 'react';

import clsx from 'clsx';

import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';

type NavLink = {
  icon: ReactNode;
  target?: string;
  rel?: string;
} & LinkProps;

function NavLink({ icon, target, rel, href, ...props }: NavLink) {
  let pathname = usePathname() || '/';

  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  const isActive = useMemo(() => {
    return pathname === href;
  }, [pathname]);

  return (
    <Link
      className={clsx(
        'underline cursor-pointer flex flex-row flex-nowrap gap-2 items-center px-3 py-1 m-auto !scale-100',
        {
          'nav-item rounded-full text-white shadow-lg border opacity-100': isActive,
        },
      )}
      rel={rel}
      href={href}
      target={target}
      {...props}
    >
      {icon}
    </Link>
  );
}

export default NavLink;
