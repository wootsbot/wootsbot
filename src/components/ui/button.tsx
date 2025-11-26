import type { ButtonProps } from "@base-ui-components/react/button";
import { Button as ButtonBaseUi } from "@base-ui-components/react/button";

export function Button({ ...props }: ButtonProps) {
  return (
    <ButtonBaseUi
      className="flex items-center justify-center h-10 px-3.5 m-0 outline-0 font-inherit text-base font-medium leading-6 select-none focus-visible:outline hover:cursor-pointer focus-visible:-outline-offset-1"
      {...props}
    />
  );
}
