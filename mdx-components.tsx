import type { MDXComponents } from "mdx/types";
import type { ImageProps } from "next/image";
import Image from "next/image";

import { Tweet } from "react-tweet";
import { Callout } from "#/components/markdown/callout";
import { DisplayListInfoCard } from "#/components/markdown/display-list-info-card";
import { Files } from "#/components/markdown/files";

import { cn } from "#/lib/utils";

type MDXItemComponent = {
  className?: string;
  children?: React.ReactNode;
  // biome-ignore lint/suspicious/noExplicitAny: <>
  [key: string]: any;
};

export const mdxComponents = {
  h1: ({ className, ...props }: MDXItemComponent) => (
    <h1 className={cn("mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-white", className)} {...props} />
  ),
  h2: ({ className, ...props }: MDXItemComponent) => (
    <h2
      className={cn(
        "group relative mb-4 mt-8 scroll-mt-8 font-semibold text-2xl first-of-type:mt-0 text-white/85",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: MDXItemComponent) => (
    <h3 className={cn("group relative mt-8 scroll-m-20 text-xl font-bold tracking-tight", className)} {...props} />
  ),
  h4: ({ className, ...props }: MDXItemComponent) => (
    <h4 className={cn("group relative mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className)} {...props} />
  ),
  h5: ({ className, ...props }: MDXItemComponent) => (
    <h5 className={cn("group relative mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className)} {...props} />
  ),
  h6: ({ className, ...props }: MDXItemComponent) => (
    <h6
      className={cn("group relative mt-8 scroll-m-20 text-base font-semibold tracking-tight", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }: MDXItemComponent) => (
    <a className={cn("font-normal hover:underline underline-offset-4 text-white", className)} {...props} />
  ),
  p: ({ className, ...props }: MDXItemComponent) => (
    <p className={cn("leading-7 my-5 text-pretty text-white/70", className)} {...props} />
  ),
  strong: ({ className, ...props }: MDXItemComponent) => (
    <strong className={cn("font-extrabold text-slate-50", className)} {...props} />
  ),
  ul: ({ className, ...props }: MDXItemComponent) => (
    <ul className={cn("ml-3.5 list-disc text-white/70", className)} {...props} />
  ),
  ol: ({ className, ...props }: MDXItemComponent) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: MDXItemComponent) => <li className={cn("my-4", className)} {...props} />,
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // biome-ignore lint/performance/noImgElement: <>
    <img
      className={cn("w-full h-96 object-cover rounded-lg my-8 outline outline-offset-2 outline-lime-950/50", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8 w-[50px]" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("even:bg-muted m-0 border-t p-0", className)} {...props} />
  ),
  th: ({ className, ...props }: MDXItemComponent) => (
    <th
      className={cn(
        "border border-zinc-700 px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: MDXItemComponent) => (
    <td
      className={cn(
        "border border-zinc-700 px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: MDXItemComponent) => {
    return (
      <div className="mb-4 mt-6 overflow-x-auto rounded-lg bg-zinc-600/20 py-4">
        <div className="mb-1 flex flex-row justify-end px-4">
          <span className="text-xs font-semibold text-zinc-500">{props["data-language"]}</span>
        </div>

        <pre
          className={cn(
            "p-6 scheme-dark [&_code]:bg-transparent [&_code]:border-0 [&_code]:rounded-none [&_code]:p-0 [&_code]:font-inherit [&_code]:text-inherit",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
  code: ({ className, ...props }: MDXItemComponent) => (
    <code
      className={cn(
        "relative rounded border border-zinc-700 bg-zinc-800 px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className,
      )}
      {...props}
    />
  ),
  Image: ({ className, ...props }: ImageProps) => (
    <Image className={cn("rounded-lg my-8 outline outline-offset-2 outline-lime-950/50", className)} {...props} />
  ),
  Files,
  DisplayListInfoCard,
  Tweet,
  Callout,
};

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
