import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'node:dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true,
   },
  server: {
    watch: {
     usePolling: true,
    },
    strictPort: true,
    port: 3000,
  },
})
