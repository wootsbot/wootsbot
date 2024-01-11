'use client';

import Link from 'next/link';

function Header() {
  return (
    <header className='max-w-xl flex flex-col sm:mx-auto mx-4'>
      <nav className='flex flex-row items-center gap-3 pt-10 pb-2 mb-5'>
        <Link
          className='transition-all dark:text-neutral-100 text-neutral-900 hover:text-neutral-800 dark:hover:text-neutral-300 flex align-middle relative py-1'
          aria-label='Link to home'
          href='/'
        >
          Inicio
        </Link>

        <Link
          className='transition-all dark:text-neutral-100 text-neutral-900 hover:text-neutral-800 dark:hover:text-neutral-300 flex align-middle relative py-1'
          aria-label='link to Articulos'
          href='/blog'
        >
          Blog
        </Link>

        <Link
          className='transition-all dark:text-neutral-100 text-neutral-900 hover:text-neutral-800 dark:hover:text-neutral-300 flex align-middle relative py-1'
          aria-label='link to uses'
          href='/uses'
        >
          Uses
        </Link>

        <Link
          className='transition-all dark:text-neutral-100 text-neutral-900 hover:text-neutral-800 dark:hover:text-neutral-300 flex align-middle relative py-1'
          aria-label='link to guestbook'
          href='/guestbook'
        >
          Guestbook
        </Link>
      </nav>
    </header>
  );
}

export default Header;
