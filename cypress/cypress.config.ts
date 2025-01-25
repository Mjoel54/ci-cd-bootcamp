import { defineConfig } from "cypress";
import viteConfig from "../vite.config.js";

export default defineConfig({
  component: {
    port: 5173,
    specPattern: "components/**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
  },

  e2e: {
    baseUrl: "http://localhost:3001",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
