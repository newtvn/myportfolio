import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/myportfolio/" : "/", // ✅ Set correct base for GitHub Pages
  server: {
    host: "0.0.0.0",  // ✅ Allows local network access
    port: 8080,
  },
  build: {
    outDir: "dist",   // ✅ Ensure build output goes to `dist`
    sourcemap: true,  // ✅ Enable source maps for debugging
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env": {}, // ✅ Fix issues with some libraries using process.env
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // ✅ Auto-import React for JSX
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // ✅ Ensures dependencies are optimized
  },
}));
