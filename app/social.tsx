import * as React from 'react';

import Link from 'next/link';

import {
  SiGithub,
  SiTwitter,
  SiStackoverflow,
  SiInstagram,
  SiPolywork,
  SiLinkedin,
  SiDevdotto,
} from '@icons-pack/react-simple-icons';

function Social() {
  return (
    <ul className="list-unstyled flex flex-wrap gap-8 items-center text-sm mt-10">
      <li>
        <Link
          aria-label="Link to Github"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/wootsbot"
        >
          <SiGithub size={20} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
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
          <SiTwitter size={20} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
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
          <SiStackoverflow size={20} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
        </Link>
      </li>
      <li>
        <Link
          aria-label="Link to Instagram"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/wootsbot"
        >
          <SiDevdotto size={20} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
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
          <SiInstagram size={20} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
        </Link>
      </li>
      <li>
        <Link
          aria-label="Link to Polywork "
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/wootsbot"
        >
          <SiLinkedin size={20} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
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
          <SiPolywork size={20} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
        </Link>
      </li>
    </ul>
  );
}

export default Social;
