import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'node:dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8081,
    strictPort: true,
   },
  server: {
    watch: {
     usePolling: true,
    },
    strictPort: true,
    port: 8081,
  },
})
