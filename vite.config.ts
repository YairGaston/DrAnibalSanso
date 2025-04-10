import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// Obtener __dirname en un entorno ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  
  base: '/DrAnibalSanso/', // Cambia esto por el nombre de tu repositorio
  plugins: [react()],
  resolve: {
    alias: {
    '@': path.resolve(__dirname, './src'),
  },
  },
})