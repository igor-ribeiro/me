import { SVGAttributes } from "react";
import { cn } from "~/utils";

export function XIcon({
  className,
  ...props
}: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={cn("aspect-square w-6", className)}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m18.667 4-5.527 6.316M4.667 20l5.895-6.737m2.578-2.947L9.304 4.9c-.233-.33-.35-.494-.5-.613a1.333 1.333 0 0 0-.45-.233C8.169 4 7.967 4 7.564 4H6.063c-.667 0-1 0-1.18.138a.667.667 0 0 0-.26.502c-.009.227.184.499.57 1.043l5.369 7.58m2.578-2.947 5.668 8c.385.545.578.817.569 1.044a.667.667 0 0 1-.26.502c-.18.138-.513.138-1.18.138h-1.5c-.404 0-.606 0-.79-.054a1.335 1.335 0 0 1-.45-.233c-.151-.119-.268-.284-.501-.613l-4.134-5.837"
      />
    </svg>
  );
}

export function GithubIcon({
  className,
  ...props
}: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={cn("aspect-square w-6", className)}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 15a3.72 3.72 0 0 0-1 2.58V21m5-6a3.72 3.72 0 0 1 1 2.58V21m-6-1.95a5.7 5.7 0 0 1-2.82.36c-1.52-.52-1.12-1.9-1.9-2.47A2.37 2.37 0 0 0 3 16.5m16-6.75c0 3-1.95 5.25-7 5.25s-7-2.25-7-5.25a6.3 6.3 0 0 1 .68-3c-.34-1.47-.21-3.28.52-3.64.73-.36 2.27.3 3.54 1.15a12.86 12.86 0 0 1 2.26-.2 12.86 12.86 0 0 1 2.26.18c1.27-.85 2.88-1.48 3.54-1.15.66.33.86 2.17.52 3.64A6.3 6.3 0 0 1 19 9.75Z"
      />
    </svg>
  );
}

export function OpenIcon({
  className,
  ...props
}: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={cn("aspect-square w-6", className)}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      ></path>
    </svg>
  );
}

export function LinkedInIcon({
  className,
  ...props
}: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={cn("aspect-square w-6", className)}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.956 2c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.583 2.359C2 8.509 2 9.593 2 10.956v2.088c0 1.363 0 2.447.071 3.321.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583.874.071 1.958.071 3.321.071h2.088c1.363 0 2.447 0 3.321-.071.896-.074 1.66-.227 2.359-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359.071-.874.071-1.958.071-3.321v-2.088c0-1.363 0-2.447-.071-3.321-.074-.896-.227-1.66-.583-2.359a6 6 0 0 0-2.622-2.622c-.7-.356-1.463-.51-2.359-.583C15.491 2 14.407 2 13.044 2h-2.088Zm2.032 8.343A1 1 0 0 0 11 10.5V17a1 1 0 1 0 2 0v-3.5a1.5 1.5 0 0 1 3 0V17a1 1 0 1 0 2 0v-3.5a3.5 3.5 0 0 0-5.012-3.157ZM9 7a1 1 0 1 0-2 0v.01a1 1 0 0 0 2 0V7Zm0 3.5a1 1 0 0 0-2 0V17a1 1 0 1 0 2 0v-6.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function NpmIcon({
  className,
  ...props
}: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={cn("aspect-square w-6", className)}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 8H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2m3-7h7M7 8v7m7-7h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2m-6-7v7m6 0h-3m3 0v-3m-3 3h-3m3 0v-3m-3 3h-3v2H7v-2m0 0H4m0 0v-3m7-1v1"
      />
    </svg>
  );
}
