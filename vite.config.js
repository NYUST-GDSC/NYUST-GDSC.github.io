import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  plugins: [
      vue(),
      
      VitePWA({
        base: '/',
        includeAssets: ['favicon.png'],
        workbox: {
          cleanupOutdatedCaches: true,
          skipWaiting: true,
          clientsClaim: true
        },
        manifest: {
          name: '國立雲林科技大學 GDSC',
          short_name: 'NYUST GDSC',
          background_color: '#ffffff',
          theme_color: '#ffffff',
          icons: [
            {
              src: '48x48.png',
              sizes: '48x48',
              type: 'image/png'
            },
            {
              src: '72x72.png',
              sizes: '72x72',
              type: 'image/png'
            },
            {
              src: '96x96.png',
              sizes: '96x96',
              type: 'image/png'
            },
            {
              src: '144x144.png',
              sizes: '144x144',
              type: 'image/png'
            },
            {
              src: '192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: '512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        }
      }),
  ],
})
