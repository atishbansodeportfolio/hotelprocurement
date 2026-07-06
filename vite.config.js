import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /node_modules[\\/](react|react-dom|react-router-dom)/
            },
            {
              name: 'vendor-framer',
              test: /node_modules[\\/]framer-motion/
            },
            {
              name: 'vendor-lucide',
              test: /node_modules[\\/]lucide-react/
            }
          ]
        }
      }
    }
  }
})