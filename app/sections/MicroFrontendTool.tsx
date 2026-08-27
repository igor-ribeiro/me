import { Heading, Paragraph, Anchor } from "~/components/Elements";

export function MicroFrontendTool() {
  return (
    <>
      <Heading as="h3">Micro Frontend tool</Heading>
      <Paragraph>
        My first international work experience was at{" "}
        <Anchor href="https://www.trafilea.com/">Trafilea</Anchor>. I was
        assigned to implement a Micro Frontend structure and I created an
        internal CLI tool that handled{" "}
        <Anchor href="https://www.nginx.com/">Nginx</Anchor>. One of the
        requirements was that each MFE was a separate Github repository, so that
        CLI tool also used{" "}
        <Anchor href="https://git-scm.com/book/en/v2/Git-Tools-Submodules">
          Git Submodules
        </Anchor>{" "}
        allowing developers to work on multiple projects seamlessly.
      </Paragraph>
      <Paragraph>
        <Anchor href="https://drive.google.com/file/d/1cwigAq9QACpVrmXhv1chE750UKJOGMr6/view?usp=sharing">
          LONG demo video (17m)
        </Anchor>{" "}
        showing the project (and of course I spent some time fixing a bug
        because nothing works 100% in a demo).
      </Paragraph>

      <div className="border-l-4 border-yellow-300/30 bg-yellow-300/20 p-2 pl-4 font-bold text-yellow-50">
        DISCLAIMER: My english is not great in that video, as I said it was my
        first international job, but I PROMISE it's way better now!
      </div>
    </>
  );
}
