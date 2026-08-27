export function cn(
  ...classes: (string | number | null | undefined | false)[]
): string {
  return classes.filter(Boolean).join(" ");
}
