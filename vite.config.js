import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Set up any path aliases if needed
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Add any global SCSS variables or imports if needed
      },
    },
  },
  // Serve static assets from the public directory
  publicDir: 'public',
  // Configure the base path if deploying to a subdirectory
  base: './',
  server: {
    port: 3000, // Match the original port used in the README
    open: true, // Automatically open browser
  },
  build: {
    outDir: 'build', // Match the original output directory name
    assetsDir: 'static', // Place assets in a static directory
    sourcemap: true,
  },
});
