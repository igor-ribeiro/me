import type { MetaFunction } from "@remix-run/node";
import { Content, Heading } from "~/components/Elements";
import { Header } from "~/components/Header";
import { GetToKnowMe } from "~/sections/GetToKnowMe";
import { BackgrounInformation } from "~/sections/BackgroundInformation";
import { Experience } from "~/sections/Experience";
import { Skills } from "~/sections/Skills";
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
    { title: "Igor Ribeiro - Full Stack Developer" },
    {
      name: "description",
      content:
        "Full Stack Developer specializing in React/TypeScript, with 10+ years building frontend architecture, design systems, and internal developer tools, from custom compilers and CLI generators to design systems and platform rebuilds, across e-commerce, SaaS, and agency environments. Recently working with AI-driven, agentic workflows to extend product capabilities.",
    },
  ];
};

export default function Index() {
  return (
    <div className="grid gap-4 px-2 pb-6">
      <Header />
      <GetToKnowMe />
      {/*<BackgrounInformation />*/}
      <Skills />
      <Experience />

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
    </div>
  );
}

function Divider() {
  return <div className="my-6 h-[1px] border-t" />;
}
