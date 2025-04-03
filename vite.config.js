import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: "/url-shortening-api/",
  resolve: {
    alias: {
      "@": "/src",
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@sass": "/src/sass",
      "@utils": "/src/utils",
    }
  }
})
