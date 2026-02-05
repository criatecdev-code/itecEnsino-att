import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/app/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom', 'react-helmet-async'],
          'vendor-slick': ['react-slick', 'slick-carousel'],
        },
      },
    },
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
  },
}))
