import { defineConfig } from 'vite';

export default defineConfig({
  base: '/public/', // pastikan root benar di Vercel
  build: {
    outDir: 'dist'
  }
});
