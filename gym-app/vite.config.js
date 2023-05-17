import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://gym-app-frontend.onrender.com/",
        changeOrigin: true,
      },
    },
  },

  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: '/src/main.jsx',
    },
  },
  plugins: [react()],
});