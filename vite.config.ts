import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/',

  plugins: [
    svgr(),
    react(),
  ],

  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },

  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
});
