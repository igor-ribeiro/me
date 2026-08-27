import { Content, Heading, Paragraph, Anchor } from "~/components/Elements";
import { ImageSelector } from "~/components/ImageSelector";
import { asset } from "~/utils";

export function GetToKnowMe() {
  return (
    <>
      <Content>
        <Heading as="h2">Get to know me</Heading>
        <Paragraph>
          Full Stack Developer specializing in React/TypeScript, with 10+ years
          building frontend architecture, design systems, and internal developer
          tools, from custom compilers and CLI generators to design systems and
          platform rebuilds, across e-commerce, SaaS, and agency environments.
          Recently working with AI-driven, agentic workflows to extend product
          capabilities.
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
  "/drawings/mona-lisa-2009.jpg",
  "/drawings/wolverine-2009.jpg",
  "/drawings/girl-2011.jpg",
  "/drawings/joker-2011.jpg",
  "/drawings/leonardo-da-vinci-2012.jpg",
  "/drawings/thelonious-monk-2017.jpg",
  "/drawings/faceless-girl-2018.jpg",
].map(asset);
