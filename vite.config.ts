import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
      '@types': path.resolve(__dirname, './src/types'),
    }
  },
  plugins: [vue()],
})
