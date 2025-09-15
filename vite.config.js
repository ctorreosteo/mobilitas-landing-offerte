import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permette connessioni da qualsiasi IP
    port: 5173,      // Porta specifica
  },
  build: {
    // Assicura che il build sia ottimizzato per SPA
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Configurazione per SPA - importante per il routing
  base: '/',
})
