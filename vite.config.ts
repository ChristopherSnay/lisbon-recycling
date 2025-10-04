import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(() => ({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '.nojekyll',
          dest: '.'
        },
        {
          src: '404.html',
          dest: '.'
        }
      ]
    })
  ],
  base: '/lisbon-recycling'
}));
