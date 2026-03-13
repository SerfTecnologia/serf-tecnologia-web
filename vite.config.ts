import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

const PROJECT_ROOT = import.meta.dirname;

export default defineConfig({
  base: "/serf-tecnologia/",

  plugins: [
    react(),
    tailwindcss()
  ],

  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client/src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },

 root: path.resolve(PROJECT_ROOT, "client"),

build: {
  outDir: "../dist",
  emptyOutDir: true,
});
