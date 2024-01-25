import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/checkout/*": {
        target: "https://backend-chic-trend.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/checkout/, ""),
      },
    },
  },
});
