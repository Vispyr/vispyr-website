import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Vispyr',
      logo: {
        src: './src/assets/vispyr-banner.png',
        replacesTitle: true,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Vispyr',
        },
      ],
      components: {
        Header: './src/components/Header.astro',
        Footer: './src/components/Footer.astro',
      },
      sidebar: [
        { slug: 'docs/introduction' },
        { slug: 'docs/observability' },
        { slug: 'docs/existing-solutions' },
        { slug: 'docs/building-vispyr' },
        { slug: 'docs/future-work' },
        { slug: 'docs/references' },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
    react(),
  ],
});
