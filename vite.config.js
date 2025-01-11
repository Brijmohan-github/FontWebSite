import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Ensure this is set to 'dist'
    rollupOptions: {
      input: '/home/ratankhichifullappcode/FontWebSite/index.html', // Path to your source index.html before the build
    },
  },
  server: {
    port: 3001 // Change this to the desired port number
  },
  plugins: [react()],
})
