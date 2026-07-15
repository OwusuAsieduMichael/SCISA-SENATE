import { redirect } from "next/navigation";

/** Legacy route: Sessions tab renamed to Gallery. */
export default function SessionsRedirectPage() {
  redirect("/gallery");
}
