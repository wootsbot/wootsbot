import * as React from 'react';
import Link from 'next/link';

import { Tweet } from 'react-tweet';
import { useMDXComponent } from 'next-contentlayer/hooks';

import DisplayListInfoCard from '@/components/DisplayListInfoCard';
import { Files } from '@/components/Files';

const CustomLink = (props) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link className="text-black/90 dark:text-neutral-100 font-light decoration-neutral-600" href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a className="text-black/90 dark:text-neutral-100 font-light decoration-neutral-600" {...props} />;
  }

  return (
    <a
      className="text-black/90 dark:text-neutral-100 font-light decoration-neutral-600"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

function ImageBlog(props) {
  return <img alt={props.alt} fetchPriority={props.priority ? 'high' : 'auto'} className="rounded-lg" src={props.src} srcSet={props.src} decoding="async" loading="lazy" {...props} />;
}

function Callout(props) {
  return (
    <div className="flex dark:bg-neutral-950 border dark:border-neutral-800 rounded-lg p-4 my-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const components = {
  Image: ImageBlog,
  a: CustomLink,
  Callout,
  DisplayListInfoCard,
  Files,
  Tweet,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-invert">
      <Component components={{ ...components }} />
    </article>
  );
}
