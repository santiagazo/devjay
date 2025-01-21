import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory for production builds
    assetsDir: "assets", // Directory for static assets
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias '@' points to 'src'
    },
  },
});
