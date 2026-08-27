import { Heading, Paragraph } from "~/components/Elements";
import { Code } from "~/components/Code";

export function WebsiteCompiler() {
  return (
    <>
      <Heading as="h3">Website compiler</Heading>
      <Paragraph>
        Working at an ecommerce that heavely relied on A/B testing and had
        multiple brands with a website each I was tasked to create a parser that
        would transform React pages into JSON and then generate new pages based
        on that JSON.
      </Paragraph>
      <Paragraph>OK, let me show you an example.</Paragraph>
      <Code {...PAGE_REACT_BEFORE} />
      <Paragraph>
        From that code I used Babel.js to generate the following JSON
      </Paragraph>
      <div className="grid items-start gap-2 md:grid-cols-2">
        <Code {...PAGE_JSON_BEFORE} />
        <div>
          <Paragraph>
            From the JSON structure we assigned a unique name for every
            component on that page, for exemple, the{" "}
            <code className="inline-code">Button</code> unique name is{" "}
            <code className="inline-code">HomePage.Button</code>.
          </Paragraph>
          <Paragraph>
            So let's say that for mobile devices we want our button to be{" "}
            <code className="inline-code">variant="secondary"</code>, we would
            generate a build with the following modifications to the structure.
          </Paragraph>
          <Code {...PAGE_JSON_MODIFICATIONS} />
        </div>
      </div>
      <div className="my-2 h-[1px]" />
      <div className="grid items-start gap-2 md:grid-cols-2">
        <Paragraph className="flex-1">
          To build we would make a request to the service holding the strucuture
          saying we want to build the mobile version, it would return that
          modified structure and based on it another set of Babel.js plugins
          would modify the React page to ouput this:
        </Paragraph>
        <Code {...PAGE_REACT_MODIFIED} />
      </div>
    </>
  );
}

const PAGE_REACT_BEFORE = {
  language: "jsx",
  name: "page.jsx",
  code: `function HomePage() {
  return (
    <div>
      <Header title="Home page" />
      <Button
        variant="primary"
        label="Click me"
      />
    </div>
  )
}`,
};

const PAGE_JSON_BEFORE = {
  language: "json",
  name: "page.json",
  code: `{
    "component": "HomePage",
    "children": [
      {
        "component": "Header",
        "props": {
          "title": "Home Page"
        },
        "children": []
      },
      {
        "component": "Button",
        "props": {
          "variant": "primary"
          "label": "Click me",
        },
        "children": []
      }
    ]
  }`,
};

const PAGE_JSON_MODIFICATIONS = {
  language: "json",
  name: "modifications.json",
  code: `{
  "HomePage.Button": {
    "props": {
      "variant": "secondary",
      "label": "Mobile button"
    }
  }
}`,
};

const PAGE_REACT_MODIFIED = {
  language: "jsx",
  name: "page-modified.jsx",
  code: `function HomePage() {
  return (
    <div>
      <HomePage_Header
        title="Home page"
      />
      <HomePage_Button
        variant="seconday"
        label="Mobile button"
      />
    </div>
  )
}`,
};
