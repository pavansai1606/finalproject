import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true
  }
});
