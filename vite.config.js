import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: './outsource(ideaOnly)/localhost-cert/localhost-key.pem',
      cert: './outsource(ideaOnly)/localhost-cert/localhost.pem',
    },
  },
})
