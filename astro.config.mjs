import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://jplazadelosreyes.github.io',
    base: '/jualen-portafolio',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()]
});