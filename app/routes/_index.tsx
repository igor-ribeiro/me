import type { MetaFunction } from "@remix-run/node";
import { Content, Heading, Paragraph } from "~/components/Elements";
import { Header } from "~/components/Header";
import { GetToKnowMe } from "~/sections/GetToKnowMe";
import { BackgrounInformation } from "~/sections/BackgroundInformation";
import { WebsiteCompiler } from "~/sections/WebsiteCompiler";
import { DynamicTheme } from "~/sections/DynamicTheme";
import { MicroFrontendTool } from "~/sections/MicroFrontendTool";
import { InvoiceManager } from "~/sections/InvoiceManager";
import { EventManager } from "~/sections/EventManager";
import { MemoryGame } from "~/sections/MemoryGame";
import { HangmanGame } from "~/sections/HangmanGame";
import { NpmLibraries } from "~/sections/NpmLibraries";

export const meta: MetaFunction = () => {
  return [
    { title: "Igor Ribeiro - Tailwind Application" },
    {
      name: "description",
      content:
        "Hey Steve and Adam! This is my application for the Designer Engineer role.",
    },
  ];
};

export default function Index() {
  return (
    <div className="grid gap-4 px-2 pb-6">
      <Header />
      <GetToKnowMe />
      <BackgrounInformation />

      <Content>
        <Heading as="h2">Projects I'm proud of</Heading>
        <WebsiteCompiler />
        <Divider />
        <DynamicTheme />
        <Divider />
        <MicroFrontendTool />
      </Content>

      <Content>
        <Heading as="h2">Personal projects</Heading>
        <InvoiceManager />
        <Divider />
        <EventManager />
        <Divider />
        <MemoryGame />
        <Divider />
        <HangmanGame />
        <Divider />
        <NpmLibraries />
      </Content>

      <Content>
        <Paragraph>
          I would love to chat about others things with you! Besides coding I
          like to watch/play basketball, play poker and I also play the Piano. I
          hope my experience is enough to get me to the next rounds. Can't wait
          for your feedback. Let me know if there is anything else I can help
          with!
        </Paragraph>
        <Paragraph>See you soon!</Paragraph>
      </Content>
    </div>
  );
}

function Divider() {
  return <div className="my-6 h-[1px] border-t" />;
}
