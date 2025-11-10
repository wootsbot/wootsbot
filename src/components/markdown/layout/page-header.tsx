import { cn } from "#/lib/utils";

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  text?: string;
  publishedAt?: string;
  readingTime?: number;
}

export function DocsPageHeader({ heading, text, publishedAt, readingTime, className, ...props }: DocsPageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 prose m-auto mb-8">
      <div className={cn("gap-4", className)} {...props}>
        <h1 className="inline-block font-extrabold text-3xl lg:text-4xl text-white">{heading}</h1>
        {text && <p className="italic text-white/70">{text}</p>}
      </div>

      {(publishedAt || readingTime) && (
        <div className="flex items-center gap-2 text-white/45 -mt-2.5">
          <time dateTime={publishedAt}>{publishedAt}</time>

          <span>·</span>

          <time>{readingTime ? `${readingTime} min` : "N/A"}</time>
        </div>
      )}
    </div>
  );
}
