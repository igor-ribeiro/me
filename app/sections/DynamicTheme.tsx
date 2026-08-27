import { Code } from "~/components/Code";
import { Heading, Paragraph, Anchor } from "~/components/Elements";
import { ImageSelector } from "~/components/ImageSelector";

export function DynamicTheme() {
  return (
    <>
      <Heading as="h3">Dynamic theming</Heading>
      <Paragraph>
        After that project we only kept one brand so web moved to a singular{" "}
        <Anchor href="https://nextjs.org/">Next.js</Anchor> website and my new
        challenge was to create dynamic themes based on products/categories.
      </Paragraph>
      <Paragraph>
        Looking back now, it's somewaht similar to Tailwind, we had a
        configuration object that was converted to CSS Variables.
      </Paragraph>

      <div className="grid grid-cols-2 items-start gap-2">
        <Code
          name="configuration.js"
          code={`{
  $id: "light-theme",
  colors: {
    primary: "red",
    secondary: "blue",
  }
}
`}
        />
        <div>
          <Paragraph>
            And then you specify where you want to apply the themes
          </Paragraph>
          <Code
            name="configuration.js"
            code={`{
  $path: "[data-theme='light']",
  $use: ["light-theme"],
  // You can also add or
  // override variables
  colors: {
    secondary: "green",
    button: "--colors-primary",
  }
}
`}
          />
        </div>
      </div>

      <Paragraph>This would generate whe following CSS variables</Paragraph>
      <Code
        name="theme.css"
        code={`[data-theme='light'] {
  --colors-primary: red;
  --colors-secondary: green;
  --colors-text: white;
  --colors-button: var(--colors-primary);
}
`}
      />

      <div className="h-6" />

      <ImageSelector images={THEMES} />

      <Paragraph>
        By navigating to a product page we would change the theme to match that
        product. This was done by storing theme variables as product attributes
        and injecting them into the page as CSS Variables. We could change the
        theme for the whole site or to specific sections based on a selector.
      </Paragraph>
    </>
  );
}

const THEMES = [
  "/dynamic-themes/product-a.png",
  "/dynamic-themes/product-b.png",
];
