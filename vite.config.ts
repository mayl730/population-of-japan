import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import HighchartsVue from 'highcharts-vue'

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
      '@customTypes': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@components': path.resolve(__dirname, './src/components'),
    }
  },
  plugins: [vue()],
})
