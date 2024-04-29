import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      sections: `${path.resolve(__dirname, "./src/components/sections/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      assets: `${path.resolve(__dirname, "./src/assets")}`,
      shared: `${path.resolve(__dirname, "./src/shared")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks")}`,
      contexts: `${path.resolve(__dirname, "./src/contexts")}`,
      routes: `${path.resolve(__dirname, "./src/routes")}`,
      themes: `${path.resolve(__dirname, "./src/themes")}`,
    },
  },
});
