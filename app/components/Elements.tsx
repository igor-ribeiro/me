import { HTMLAttributes, AnchorHTMLAttributes, createElement } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "~/utils";

export function Content({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "mx-auto w-full max-w-3xl rounded-lg bg-zinc-800 p-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type Heading = "h1" | "h2" | "h3" | "h4";

const HEADING_CLASSNAME: Record<Heading, string> = {
  h1: "text-5xl",
  h2: "text-3xl",
  h3: "text-xl text-zinc-300 my-2",
  h4: "text-lg",
};

export function Heading({
  className,
  as,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & {
  as: Heading;
}) {
  return createElement(as, {
    className: cn(HEADING_CLASSNAME[as], "font-bold", className),
    ...props,
  });
}

export function Paragraph({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("my-4", className)} {...props} />;
}

export function Anchor({
  className,
  variant = "link",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "link" | "button";
}) {
  return (
    <a
      className={cn(
        "inline-flex gap-1 rounded border-b border-white/30 bg-blue-500/30 text-white hover:bg-blue-500 focus:bg-blue-500",
        variant === "link" ? "px-1 " : "px-2 py-1",
        className,
      )}
      target="_blank"
      {...props}
    />
  );
}
