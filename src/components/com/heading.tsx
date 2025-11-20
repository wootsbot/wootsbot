"use client";

import * as React from "react";

export type HeadingProps = React.HTMLAttributes<"div">;

export const Heading = (props: HeadingProps) => {
  return React.createElement("heading-article", props);
};
