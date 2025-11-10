import { SiBluesky, SiDevdotto, SiGithub, SiInstagram, SiStackoverflow, SiX } from "@icons-pack/react-simple-icons";

import Link from "next/link";

export function Social() {
  return (
    <div>
      <ul className="list-unstyled flex flex-wrap gap-2 items-center text-sm">
        <li>
          <Link
            aria-label="Link to Github"
            className="hover:underline flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/wootsbot"
          >
            <SiGithub size={16} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
            Github
          </Link>
        </li>

        <li>
          <Link
            aria-label="Link to Github"
            className="hover:underline flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://bsky.app/profile/wootsbot.dev"
          >
            <SiBluesky size={16} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
            Bluesky
          </Link>
        </li>

        <li>
          <Link
            aria-label="Link to Twitter"
            className="hover:underline flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/wootsbot"
          >
            <SiX size={16} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
            Wootsbot
          </Link>
        </li>
        <li>
          <Link
            aria-label="Link to Stackoverflow"
            className="hover:underline flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/4089384/wootsbot"
          >
            <SiStackoverflow size={16} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
            stackoverflow
          </Link>
        </li>
        <li>
          <Link
            aria-label="Link to Instagram"
            className="hover:underline flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/wootsbot"
          >
            <SiDevdotto size={16} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
            dev
          </Link>
        </li>
        <li>
          <Link
            aria-label="Link to Instagram"
            className="hover:underline flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/wootsbot/"
          >
            <SiInstagram size={16} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
            Instagram
          </Link>
        </li>

        {/*<li>
          <Link
            aria-label="Link to Polywork "
            className="hover:underline flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/wootsbot"
          >
            <SiLinkedin size={16} className="fill-black dark:fill-[rgba(239,247,255,.616)]" />
          </Link>
        </li>*/}
      </ul>
    </div>
  );
}
