import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  base: './',
  build: {
    outDir: 'dist',
  },
  html: {
    title: 'UNSIQ2', // Ubah di sini
  },
})
