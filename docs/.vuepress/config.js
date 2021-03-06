module.exports = {
    // site config
    lang: 'en-US',
    title: 'Somelist Docs',
    description: 'Improve your online presence.',
    // theme and its config
    theme: '@vuepress/theme-default',
    editLink: true,
    head: [['link', { rel: 'icon', href: '/images/SomelistSecondaryRound.png' }]],
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
            link: '/guide/'
          },

          {
            text: 'API',
            link: '/api/'
          },
          {
            text: 'Support',
            link: '/support/'
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
                children: ['/guide/', '/guide/getting-started.md'],
              }
            ],

            '/api': [
              {
                text: 'API Reference',
                children: ['/api/', '/api/ratelimits', '/api/users', '/api/bot'],
              },
          ],
            '/support': [
              {
                text: 'Support',
                children: ['/support/'],
              },
          ],
          },
      },
  }
