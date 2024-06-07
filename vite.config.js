import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Укажите нужный вам порт здесь
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/scss/main.scss";`
      }
    }
  }
});
