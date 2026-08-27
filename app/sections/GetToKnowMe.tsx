import { Content, Heading, Paragraph, Anchor } from "~/components/Elements";
import { ImageSelector } from "~/components/ImageSelector";

export function GetToKnowMe() {
  return (
    <>
      <Content>
        <Heading as="h2">Get to know me</Heading>
        <Paragraph>
          Hey Adm and Steve! I hope everything is going well. I'm a developer
          from a small city (Jundiaí) in São Paulo, Brazil. I'm about to turn 29
          (April 16th), married and father of a beatiful 2 years old daughter.
        </Paragraph>

        <Paragraph>
          For the past 1 year and 8 months I've working remote full time for an
          american company{" "}
          <Anchor href="https://galleysolutions.com">Galley Solutions</Anchor>{" "}
          as part of the Frontend team. We'll talk more about that later.
          {/*
          Most of my work have been improving UX
          either by tweaking the UI design or by implemeting features focusing
          on usability.
          */}
        </Paragraph>

        <Paragraph>
          I always had an artist side and started drawing early, it was my
          favorite hobby and I actually thought my profession would be something
          along those lines. Here are some of my drawings from when I was 14
          years old (2009) until 23 years old (2018).
        </Paragraph>

        <ImageSelector images={DRAWINGS} />
      </Content>
    </>
  );
}

const DRAWINGS = [
  "drawings/mona-lisa-2009.jpg",
  "drawings/wolverine-2009.jpg",
  "drawings/girl-2011.jpg",
  "drawings/joker-2011.jpg",
  "drawings/leonardo-da-vinci-2012.jpg",
  "drawings/thelonious-monk-2017.jpg",
  "drawings/faceless-girl-2018.jpg",
];
