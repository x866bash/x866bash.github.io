import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // pastikan root benar di Vercel
  build: {
    outDir: 'dist'
  }
});
