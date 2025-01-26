import { defineConfig } from "cypress";
import viteConfig from "../vite.config";

export default defineConfig({
  component: {
    specPattern: "component/Quiz.cy.jsx",
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
  },
});
