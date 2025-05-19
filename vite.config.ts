import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@Types": path.resolve(__dirname, "src/types"),
      "@Context": path.resolve(__dirname, "src/context"),
      "@Hooks": path.resolve(__dirname, "src/hooks"),
      "@Utils": path.resolve(__dirname, "src/utils"),
      "@Ruotes": path.resolve(__dirname, "src/routes"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Styles": path.resolve(__dirname, "src/styles"),
      "@Store": path.resolve(__dirname, "src/store"),
    },
  },
});
