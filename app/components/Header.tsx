import throttle from "lodash.throttle";
import { useEffect } from "react";
import { Anchor } from "./Elements";
import { GithubIcon, LinkedInIcon, XIcon } from "./Icons";

export function Header() {
  useScrollAnimationPolyfill();

  return (
    <div className="header relative flex w-full flex-col items-center justify-center overflow-hidden bg-zinc-950 p-2">
      <div
        className="header-bg pointer-events-none absolute left-0 top-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-20 blur-lg"
        style={{
          backgroundImage: "url(profile.webp)",
        }}
      />

      <div className="header-content relative z-10 flex w-full max-w-3xl flex-col items-center gap-2">
        <img
          src="/profile.webp"
          className="aspect-square w-32 rounded-full border-4 border-zinc-200"
        />

        <div className="header-info flex-1 text-center">
          <h1 className="text-5xl font-bold text-white">Igor Ribeiro</h1>
          <h3 className="text-lg text-zinc-400">São Paulo - Brazil (GMT-3)</h3>
        </div>

        <div className="flex justify-center gap-2 justify-self-end">
          <Anchor className="p-1" href="https://x.com/ribeirolabs">
            <XIcon />
          </Anchor>
          <Anchor className="p-1" href="https://github.com/igor-ribeiro">
            <GithubIcon />
          </Anchor>
          <Anchor
            className="p-1"
            href="https://www.linkedin.com/in/igor-ribeiro-8830b693/"
          >
            <LinkedInIcon />
          </Anchor>
        </div>
      </div>
    </div>
  );
}

function useScrollAnimationPolyfill() {
  useEffect(() => {
    if ("ScrollTimeline" in window) {
      return;
    }

    const header: HTMLDivElement | null = document.querySelector(".header");

    if (!header) {
      return;
    }

    const rect = header.getBoundingClientRect();

    function handler() {
      header!.dataset.collapsed =
        window.scrollY > rect.height ? "true" : "false";
    }

    window.addEventListener("scroll", throttle(handler, 200));
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return null;
}
