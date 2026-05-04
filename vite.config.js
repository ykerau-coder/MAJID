import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` is only set on build so `npm run dev` keeps serving from `/`.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/MAJID/' : '/',
  plugins: [react()],
}))
