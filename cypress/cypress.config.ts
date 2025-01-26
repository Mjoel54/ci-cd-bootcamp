import { defineConfig } from "cypress";
import viteConfig from "../vite.config";

export default defineConfig({
  component: {
    specPattern: "component/**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
  },
});
