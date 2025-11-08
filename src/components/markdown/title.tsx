import { cn } from "#/lib/utils";

export function Title({ className, ...props }: { className?: string }) {
  return <h1 className={cn("inline-block font-extrabold text-3xl lg:text-4xl text-white", className)} {...props} />;
}
