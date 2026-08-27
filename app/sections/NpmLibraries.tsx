import { Anchor, Heading, Paragraph } from "~/components/Elements";
import { GithubIcon, NpmIcon } from "~/components/Icons";

export function NpmLibraries() {
  return (
    <>
      <Heading as="h3">NPM Libraries</Heading>
      <Heading as="h4">@ribeirolabs/local-storage</Heading>
      <Paragraph>Set of typesafe helpers to handle localStorage</Paragraph>
      <div className="flex gap-2">
        <Anchor
          href="https://www.npmjs.com/package/@ribeirolabs/local-storage"
          variant="button"
        >
          <NpmIcon />
          NPM
        </Anchor>
        <Anchor
          href="https://github.com/ribeirolabs/local-storage"
          variant="button"
        >
          <GithubIcon />
          Source Code
        </Anchor>
      </div>
      <div className="h-8" />
      <Heading as="h4">@ribeirolabs/events</Heading>
      <Paragraph>Set of typesafe helpers to handle custom events</Paragraph>
      <div className="flex gap-2">
        <Anchor
          href="https://www.npmjs.com/package/@ribeirolabs/events"
          variant="button"
        >
          <NpmIcon />
          NPM
        </Anchor>
        <Anchor href="https://github.com/ribeirolabs/events" variant="button">
          <GithubIcon />
          Source Code
        </Anchor>
      </div>
    </>
  );
}
