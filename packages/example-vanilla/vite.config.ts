import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
  },
  optimizeDeps: {
    include: ['@angular/core', '@angular/common', '@angular/platform-browser'],
  },
  build: {
    target: 'es2022',
  },
});
