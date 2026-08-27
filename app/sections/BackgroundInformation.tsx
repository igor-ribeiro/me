import { Content, Heading, Paragraph, Anchor } from "~/components/Elements";
import { ImageSelector } from "~/components/ImageSelector";

export function BackgrounInformation() {
  return (
    <>
      <Content>
        <Heading as="h2">Wait, but aren't you a developer?</Heading>
        <Paragraph>
          Yes, yes! Long story short, from watching the making of Shrek and
          researchng how to make 3D animations I went on a rabbit hole until
          finding <Anchor href="https://blender.org">Blender</Anchor> and
          getting to <Anchor href="https://www.python.org/">Python</Anchor>.
          That's when everything clicked, I can build anything! So I literally
          printed the Python documentation and read it to learn programming.
        </Paragraph>
        <Paragraph>
          My first job I was an intern packaging products, sending to a carrier,
          sending the tracking information to the customer by email by coping
          the last email and changing the information. Guess what? I messed up A
          LOT. By that time I has learned{" "}
          <Anchor href="https://www.php.net/">PHP</Anchor> and{" "}
          <Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            HTML
          </Anchor>{" "}
          already, so I built and app that would store the package information,
          customers and automatically send the tracking to them. That opened the
          door for me on that company, I moved from internet to full time and
          started developing internal tools and the website.
        </Paragraph>
      </Content>

      <Content>
        <Heading as="h2">That's nice, Igor, but why you?</Heading>
        <Paragraph>
          My artistic background already allowed me to assume a
          Designer/Developer role at some companies, let's talk about these
          experiences.
        </Paragraph>
        <Paragraph>
          At my second job as a developer I got into a team full of Backend
          developers and an app made with PHP + jQuery + Bootstrap. I quickly
          became a refence of anything Frontend related. I asked and got the
          green light to introduce{" "}
          <Anchor href="https://angularjs.org/">Angular.js</Anchor> on new
          features and improving the UI/UX.
        </Paragraph>
        <Paragraph>
          My third job was with the same team on a different company, we were
          building small internal apps and I was responsible for the Frontend
          stack in <Anchor href="https://vuejs.org/">Vue.js</Anchor>, helping
          other develpers, designing and implementing our component set and the
          visual identity. Here are some of those components made without a
          library.
        </Paragraph>

        <ImageSelector images={COMPONENTS} />

        <div className="h-4" />

        <div className="border-l-4 border-blue-300/30 bg-blue-300/20 p-2 pl-4 text-blue-50">
          <Paragraph>
            That's when I created my first Open Source library, a framework and
            style agnostic{" "}
            <Anchor
              href="https://www.npmjs.com/package/calendar-js"
              className="whitespace-nowrap"
            >
              calendar generator.
            </Anchor>
          </Paragraph>
          <Paragraph>
            Around that time I also made contributions to the{" "}
            <Anchor href="https://github.com/vuematerial/vue-material/pulls?q=is%3Apr+author%3Aigor-ribeiro+is%3Aclosed">
              vue-material
            </Anchor>{" "}
            library.
          </Paragraph>
        </div>
      </Content>
    </>
  );
}

const COMPONENTS = [
  "/dafiti-components/date-picker.gif",
  "/dafiti-components/date-picker-range.gif",
  "/dafiti-components/time-picker.gif",
  "/dafiti-components/multiselect.gif",
  "/dafiti-components/multiselect-paste.gif",
  "/dafiti-components/multiselect-dynamic-options.gif",
  "/dafiti-components/modal.gif",
  "/dafiti-components/horizontal-table.gif",
  "/dafiti-components/resize-column.gif",
];
