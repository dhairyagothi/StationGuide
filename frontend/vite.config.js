import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load the environment variables from the .env files
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    plugins: [react()],
    server: {
      port: env.VITE_PORT || 5173, // Using the env variable or fallback to 5173
      host: true,                  // Makes the server accessible from outside the container
      strictPort: true,
    },
    define: {
      'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
    },
  };
});