import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Satori',
        short_name: 'Satori',
        description: 'Tu espacio personal para tareas, ideas y más.',
        theme_color: '#1D6E94',
        background_color: '#ffffff', // color de fondo para splash screen
        display: 'standalone',        // para que se abra como app sin navegador
        start_url: '/',               // URL donde inicia la app
        lang: 'en',                  // idioma
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
