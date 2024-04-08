// 在 deno.jsonc 中添加了导入映射的无需在此 import "npm:xxx"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
