module.exports = {
  title: 'PRDXN Handbook',
  tagline: 'The tagline of my site',
  url: 'https://happy-fermat-21842f.netlify.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'PRDXN', // Usually your GitHub org/user name.
  projectName: 'PRDXN Handbook', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PRDXN Handbook',
      logo: {
        alt: 'PRDXN Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/prdxn-org/handbook',
          label: 'GitHub',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Team',
          items: [
            {
              label: 'Slack',
              href: 'https://prdxn.slack.com/',
            },
            {
              label: 'Zoho',
              href: 'https://projects.zoho.com/portal/prdxn',
            },
            {
              label: 'Github',
              href: 'https://github.com/prdxn-org',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Website',
              to: 'https://prdxn.com',
            },
            {
              label: 'Email',
              href: 'mailto:workwithus@prdxn.com',
            },
            {
              label: 'Phone',
              href: 'tel:+19172757105',
            },
          ],
        },
      ],
      copyright: `Open Source. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/prdxn-org/handbook/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/prdxn-org/handbook/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
