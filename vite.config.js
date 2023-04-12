import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  vendor: ["xlsx", "file-saver"],

  node: { fs: "empty" },
  externals: [{ "./cptable": "var cptable" }, { "./jszip": "jszip" }],
});
