import Link from 'next/link';
import { format } from 'date-fns';
import { SiGithub, SiTwitter, SiStackoverflow, SiInstagram, SiPolywork } from '@icons-pack/react-simple-icons';

import Wootsbot from '@/design-system/icons/Wootsbot';

function Footer() {
  return (
    <footer className="antialiased px-8 max-w-[65ch] mx-auto text-center mb-24">
      <Link
        aria-label="Logotipo de Wootsbot que redirige a la página de inicio"
        href="/"
        className="flex flex-col items-center justify-center mb-10 mt-24"
      >
        <Wootsbot size={45} />
      </Link>

      <ul className="list-unstyled flex justify-center flex-wrap gap-4 text-sm">
        <li>
          <Link aria-label="Link to Mi misión" className="underline" href="/transparency">
            Mi misión
          </Link>
        </li>
        <li>
          <Link aria-label="Link to Sobre mi" className="underline font-normal" href="/">
            Sobre mi
          </Link>
        </li>
        <li>
          <Link aria-label="Link to Uses" className="underline" rel="noopener noreferrer" href="/uses">
            Uses
          </Link>
        </li>
        <li>
          <Link aria-label="Link to Articulos" className="underline" rel="noopener noreferrer" href="/blog">
            Articulos
          </Link>
        </li>

        <li>
          <Link
            aria-label="Link to Rss"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="/feed.xml"
          >
            Rss
          </Link>
        </li>
      </ul>

      <ul className="list-unstyled flex justify-center flex-wrap gap-4 text-sm mt-5">
        <li>
          <Link
            aria-label="Link to Github"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/wootsbot"
          >
            <SiGithub size={20} />
          </Link>
        </li>
        <li>
          <Link
            aria-label="Link to Twitter"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/wootsbot"
          >
            <SiTwitter size={20} />
          </Link>
        </li>
        <li>
          <Link
            aria-label="Link to Stackoverflow"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/4089384/wootsbot"
          >
            <SiStackoverflow size={20} />
          </Link>
        </li>
        <li>
          <Link
            aria-label="Link to Instagram"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/wootsbot/"
          >
            <SiInstagram size={20} />
          </Link>
        </li>
        <li>
          <Link
            aria-label="Link to Polywork "
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.polywork.com/wootsbot"
          >
            <SiPolywork size={20} />
          </Link>
        </li>
      </ul>

      <p className="mt-3"> All rights reserved © wootsbot.dev {format(new Date(), 'yyyy')}</p>
    </footer>
  );
}

export default Footer;
