import { defineConfig } from 'vite';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'resources/images/*',
                    dest: 'images'
                }
            ]
        }),
        sassGlobImports(),
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
});
