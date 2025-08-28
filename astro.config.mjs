import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

export default defineConfig({
  trailingSlash: 'never',
  integrations: [
    starlight({
      title: 'Vispyr',
      logo: {
        src: './src/assets/vispyr-flame.png',
        replacesTitle: true,
      },
      favicon: '/favicon.ico',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Vispyr',
        },
      ],
      components: {
        Header: './src/components/Header.astro',
        Hero: './src/components/Hero.astro',
        SocialIcons: "./src/components/SocialIcons.astro",
        MobileMenuToggle: "./src/components/MobileMenuToggle.astro",
      },
      sidebar: [
        { slug: 'docs/introduction' },
        { slug: 'docs/observability-overview' },
        { slug: 'docs/observability-landscape' },
        { slug: 'docs/building-vispyr' },
        { slug: 'docs/design-decisions' },
        { slug: 'docs/future-work' },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap',
            rel: 'stylesheet',
          },
        },
      ],
      plugins: [starlightImageZoom()],
    }),
    mdx(),
    react(),
  ],

  adapter: vercel(),

  vite: {
    server: {
      allowedHosts: ['localhost', 'f33cf3f0e04b.ngrok-free.app'] // Add your allowed host(s) here
    },
  }
});
