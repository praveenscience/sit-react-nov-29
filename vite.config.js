import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    cors: {
      origin: "http://localhost:5174/"
    },
    proxy: {
      "/api": "http://localhost:5174"
    }
  }
});
