import { existsSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const certPath = './outsource(ideaOnly)/localhost-cert'
const hashCert = existsSync(certPath + '/localhost.pem') && existsSync(certPath + '/localhost-key.pem')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: hashCert
    ? {
        https: {
          key: certPath + '/localhost-key.pem',
          cert: certPath + '/localhost.pem',
        },
      }
    : {},
})