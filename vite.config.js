import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.7, 0.85],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
        ],
      },
      webp: {
        quality: 75,
      },
      // Output WebP versions instead of originals
      disableVar: true,
    }),
  ],
  build: {
    assetsInlineLimit: 4096,
  },
});
