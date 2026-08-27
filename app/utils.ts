export function cn(
  ...classes: (string | number | null | undefined | false)[]
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Resolve a path in /public against the app's base URL so static assets work
 * when the site is hosted under a sub-path (e.g. GitHub Pages project sites).
 */
export function asset(path: string): string {
  console.log(import.meta.env.BASE_URL.replace(/\/$/, ""));
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
