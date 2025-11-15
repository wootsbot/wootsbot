import { ViewTransition } from "react";

import { cn } from "#/lib/utils";

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  slug?: string;
  heading: string;
  text?: string;
  publishedAt?: string;
  readingTime?: number;
  hasAnimation?: boolean;
}

export function DocsPageHeader({
  slug,
  heading,
  text,
  publishedAt,
  readingTime,
  className,
  hasAnimation,
  ...props
}: DocsPageHeaderProps) {
  return (
    <ViewTransition>
      <div className="flex flex-col gap-4 prose m-auto mb-8">
        <div className={cn("gap-4", className)} {...props}>
          {hasAnimation && (
            <ViewTransition name={slug ? `post-${slug}-title` : "post-title"}>
              <h1 className="inline-block font-extrabold text-3xl lg:text-4xl text-white">{heading}</h1>
            </ViewTransition>
          )}

          {!hasAnimation && <h1 className="inline-block font-extrabold text-3xl lg:text-4xl text-white">{heading}</h1>}

          {text && <p className="italic text-white/70">{text}</p>}
        </div>

        {(publishedAt || readingTime) && (
          <ViewTransition name={`post-${slug}-date`}>
            <div className="flex items-center gap-2 text-white/45 -mt-2.5">
              <time dateTime={publishedAt}>{publishedAt}</time>

              <span>·</span>

              <time>{readingTime ? `${readingTime} min` : "N/A"}</time>
            </div>
          </ViewTransition>
        )}
      </div>
    </ViewTransition>
  );
}
