// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'J Simon van der Walt',
  tagline: 'Composer, Performer, Teacher',
  /* favicon: 'img/favicon.ico', */
 

  // Set the production url of your site here
  url: 'https://jsimonvanderwalt.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          path: 'catalog',
          routeBasePath: 'catalog',
        },
        blog: {
          showReadingTime: false,
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
          },
          blogSidebarTitle: 'Posts',
          tags: null,
          onInlineTags: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  /* plugins: ['@docusaurus/react-player'], */

  /* plugins: [require.resolve('react-player')], */

  plugins: [require.resolve('docusaurus-lunr-search')],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      /* image: 'img/docusaurus-social-card.jpg', */
/*       colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      }, */
      navbar: {
        title: 'J Simon van der Walt',
/*         logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        }, */
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'worksSidebar',
            position: 'left',
            label: 'Catalog',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          { to: '/about', label: 'About', position: 'left' },
/*           {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, */
        ],
      },
/*       footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      }, */
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['supercollider'],
      },
      metadata: [
        { name: 'google-site-verification', content: '_9tW0SVXHuABejBq5ILYkbGa6NPkBHfR96aGC9LOg0Q' },
      ],
    }),
};

export default config;
