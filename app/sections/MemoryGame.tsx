import { Heading, Anchor, Paragraph } from "~/components/Elements";
import { GithubIcon, OpenIcon } from "~/components/Icons";
import { asset } from "~/utils";

export function MemoryGame() {
  return (
    <>
      <Heading as="h3">Memory game</Heading>
      <Paragraph>
        I made this game to study{" "}
        <Anchor href="https://www.rust-lang.org/">Rust</Anchor>, React and{" "}
        <Anchor href="https://webassembly.org/">WASM</Anchor>.
      </Paragraph>
      <div className="flex flex-col items-center gap-2">
        <img src={asset("/memory-game/gameplay.gif")} />
        <div className="flex gap-2">
          <Anchor
            href="https://igor-ribeiro.github.io/memory-game-rs/"
            variant="button"
          >
            <OpenIcon />
            Play here
          </Anchor>
          <Anchor
            href="https://github.com/igor-ribeiro/memory-game-rs/"
            variant="button"
          >
            <GithubIcon />
            Source code
          </Anchor>
        </div>
      </div>
    </>
  );
}
