import { Heading, Paragraph } from "~/components/Elements";
import { ImageSelector } from "~/components/ImageSelector";
import { asset } from "~/utils";

const IMAGES = [
  "/hangman-game/components.png",
  "/hangman-game/cards.png",
  "/hangman-game/ui-concept.png",
].map(asset);

export function HangmanGame() {
  return (
    <>
      <Heading as="h3">Hangman game</Heading>
      <Paragraph>
        This is an ongoing project where I'm trying to put a different spin into
        this classic game. I'm trying to transform it into a card-like
        multiplayer game. Here are some of the concept designs.
      </Paragraph>
      <ImageSelector images={IMAGES} />
    </>
  );
}
