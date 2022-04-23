module.exports = {
    // site config
    lang: 'en-US',
    title: 'Somelist Docs',
    description: 'Explore new, and interesting bots.',
    // theme and its config
    theme: '@vuepress/theme-default',
    editLink: true,
    plugins: [
        '@vuepress/plugin-search',
        {
          locales: {
            '/': {
              placeholder: 'Search',
            },
            '/zh/': {
              placeholder: '搜索',
            },
          },
        },
        '@vuepress/plugin-prismjs'
    ],
    themeConfig: {
        repo: 'https://github.com/popQA17/Somelist-Docs',
        logo: '/images/SomelistRound.png',
        logoDark: '/images/SomelistSecondaryRound.png',
        navbar: [
          // NavbarItem
          // NavbarGroup
          {
            text: 'Guide',
            link: '/guide'
          },
          {
            text: 'Support',
            link: '/support'
          },
          {
            text: 'Somelist',
            link: 'https://somelist.tk',
          },
        ],
        sidebar: {
            '/guide': [
              {
                text: 'Guide',
                children: ['/guide', '/guide/getting-started.md'],
              }
            ],
              '/support': [
                {
                  text: 'Support',
                  children: ['/support'],
                },
            ],
          },
      },
  }
