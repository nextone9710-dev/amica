import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/wp-admin': {
        target: 'https://amice.co.uk',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
