import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,           // only used in local dev
    open: true
  },
  build: {
    outDir: "dist",       // Render serves the 'dist' folder
    emptyOutDir: true,    // Clean 'dist' before building
    sourcemap: false      // optional, smaller build
  },
  base: "./"              // ensures relative paths in production
});
