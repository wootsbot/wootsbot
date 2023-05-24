import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DisplayListInfoCard from '@/components/DisplayListInfoCard';
import { Files } from '@/components/Files';
import { useMDXComponent } from 'next-contentlayer/hooks';

const CustomLink = (props) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link className="text-neutral-100" href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a className="text-neutral-100" {...props} />;
  }

  return <a className="text-neutral-100" target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props) {
  return (
    <div className="flex bg-neutral-950 border border-neutral-800 rounded-lg p-4 my-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  DisplayListInfoCard,
  Files,
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
