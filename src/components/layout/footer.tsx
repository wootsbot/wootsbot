import { format } from "date-fns";

export function Footer() {
  return (
    <footer>
      <p> All rights reserved © wootsbot.dev {format(new Date(), "yyyy")}</p>
    </footer>
  );
}
