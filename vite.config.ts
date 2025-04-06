import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        marketplace: resolve(__dirname, 'marketplace/index.html'),
        process: resolve(__dirname, 'process/index.html'),
        contact: resolve(__dirname, 'contact/index.html')
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-helmet-async']
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});