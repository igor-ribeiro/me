import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

const basename = "/";

export default defineConfig({
  base: basename,
  plugins: [
    remix({
      ssr: false,
      basename,
    }),
    tsconfigPaths(),
  ],
});
