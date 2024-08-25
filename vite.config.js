import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/app.js',
        'resources/js/menu.js', // Adicione aqui se necessário
        'resources/css/app.css',
      ],
      refresh: true,
    }),
  ],
  build: {
    manifest: true,
    outDir: 'public/build',
  },
});
