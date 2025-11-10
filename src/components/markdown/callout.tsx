import { cn } from "#/lib/utils";

export function Callout({
  children,
  className,
  emoji,
  ...props
}: {
  className?: string;
  emoji?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn("flex dark:bg-neutral-950 border dark:border-neutral-800 rounded-lg p-4 my-8", className)}
      {...props}
    >
      <div className="flex items-center w-4 mr-4">{emoji}</div>
      <div className="w-full callout">{children}</div>
    </div>
  );
}
