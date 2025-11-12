"use client";

import { SiBluesky, SiGithub, SiInstagram, SiRss, SiX } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="z-40">
      <nav className="flex items-center p-8">
        <div>
          <Link aria-label="Link to Github" rel="noopener noreferrer" href="/">
            <Image
              className="size-9"
              alt="My computer desk"
              src="/assets/logo.svg"
              width={500}
              height={500}
              priority
              quality={90}
            />
          </Link>
        </div>

        <div id="space" className="flex-1" />

        <div>
          <div className="flex items-center gap-5">
            <Link
              aria-label="Link to Github"
              className="hover:underline hover:text-white"
              rel="noopener noreferrer"
              href="/writing"
            >
              Writing
            </Link>

            <Link
              aria-label="Link to Github"
              className="hover:underline hover:text-white"
              rel="noopener noreferrer"
              href="/use"
            >
              Uses
            </Link>

            <Link
              aria-label="Link to Github"
              className="hover:underline hover:text-white"
              rel="noopener noreferrer"
              href="/photos"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-camera-icon lucide-camera"
              >
                <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
            </Link>

            <Link
              aria-label="Link to Github"
              className="hover:underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wootsbot"
            >
              <SiGithub size={16} />
            </Link>

            <Link
              aria-label="Link to Bluesky"
              className="hover:underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://bsky.app/profile/wootsbot.dev"
            >
              <SiBluesky size={16} />
            </Link>

            <Link
              aria-label="Link to X"
              className="hover:underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/wootsbot"
            >
              <SiX size={16} />
            </Link>

            <Link
              aria-label="Link to Instagram"
              className="hover:underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/wootsbot/"
            >
              <SiInstagram size={16} />
            </Link>

            <Link
              aria-label="Link to rss"
              className="hover:underline hover:text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="/feed.xml"
            >
              <SiRss size={16} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
