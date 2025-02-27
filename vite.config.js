import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
