import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
      '/api/contact' : {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,  
      }
    },
    host: '0.0.0.0',
    port: 5173, 
  },
  plugins: [react()],
})
