import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy  } from 'vite-plugin-static-copy'


// https://vitejs.dev/config/
export default defineConfig({
  base: "/terminal-portfolio",
  plugins: [
    react(),
    viteStaticCopy({
    targets: [
        {
          src: 'Tu Nguyen Resume.pdf',
          dest: ''
        },
      ]
    })
  ],
  build: {
    outDir: "dist",
  }
})
