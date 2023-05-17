import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://gym-app-4y5d.onrender.com/",
      },
    },
  },
  plugins: [react()],
});