import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,   // Ensure Vite is running on this port
    host: true,   // Makes the server accessible from outside the container
    strictPort: true,
  },
})
