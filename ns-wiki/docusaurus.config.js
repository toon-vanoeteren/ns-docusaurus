// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DocuDirk',
  tagline: 'Stepping away from the 1980s',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // Add scripts here:
  scripts: [
    {
      src: "http://172.16.0.5:3001/embed/anythingllm-chat-widget.min.js",
      async: true,
    },
  ],  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,    // index documentation pages
        indexBlog: false,   // index blog posts if you have them
        indexPages: true,   // index other pages
        language: 'en',     // language of your docs
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'DocuDirk',
        logo: {
          alt: 'Cegeka - NS',
          src: 'img/logo.svg',
        },
        items: [
            {
                type: 'dropdown',
                label: 'Azure',
                position: 'left',
                items: [
                    {
                        to: 'docs/azure/engineering',
                        label: 'Engineering',
                    },
                    {
                        to: 'docs/azure/services',
                        label: 'Services',
                    },
                    {
                        to: 'docs/azure/standards',
                        label: 'Standards',
                    },
                    {
                        to: 'docs/azure/processes',
                        label: 'Processes',
                    }
                ],
            },
            {
                type: 'dropdown',
                label: 'Cisco',
                position: 'left',
                items: [
                    {
                        to: 'docs/cisco/engineering',
                        label: 'Engineering',
                    },
                    {
                        to: 'docs/cisco/services',
                        label: 'Services',
                    },
                    {
                        to: 'docs/cisco/standards',
                        label: 'Standards',
                    },
                    {
                        to: 'docs/cisco/processes',
                        label: 'Processes',
                    }
                ],
            }, 
            {
                type: 'dropdown',
                label: 'Fortinet',
                position: 'left',
                items: [
                    {
                        to: 'docs/fortinet/engineering',
                        label: 'Engineering',
                    },
                    {
                        to: 'docs/fortinet/services',
                        label: 'Services',
                    },
                    {
                        to: 'docs/fortinet/standards',
                        label: 'Standards',
                    },
                    {
                        to: 'docs/fortinet/processes',
                        label: 'Processes',
                    }
                ],
            },
            {
                type: 'dropdown',
                label: 'F5',
                position: 'left',
                items: [
                    {
                        to: 'docs/f5/engineering',
                        label: 'Engineering',
                    },
                    {
                        to: 'docs/f5/services',
                        label: 'Services',
                    },
                    {
                        to: 'docs/f5/standards',
                        label: 'Standards',
                    },
                    {
                        to: 'docs/f5/processes',
                        label: 'Processes',
                    }
                ],
            },
            {
                type: 'dropdown',
                label: 'Palo Alto',
                position: 'left',
                items: [
                    {
                        to: 'docs/palo-alto/engineering',
                        label: 'Engineering',
                    },
                    {
                        to: 'docs/palo-alto/services',
                        label: 'Services',
                    },
                    {
                        to: 'docs/palo-alto/standards',
                        label: 'Standards',
                    },
                    {
                        to: 'docs/palo-alto/processes',
                        label: 'Processes',
                    }
                ],
            },                                               
            {
                to: '/glossary',
                label: 'Glossary',
                position: 'right',
            },
            {
                to: '/contribute',
                label: 'Contribute',
                position: 'right',
            },
            {
              type: 'search',
              position: 'right',
            },            
        ],
      },
      footer: {
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
                label: 'X',
                href: 'https://x.com/docusaurus',
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
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
