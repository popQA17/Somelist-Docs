export const themeData = {
  "repo": "https://github.com/popQA17/Somelist-Docs",
  "logo": "/images/SomelistRound.png",
  "logoDark": "/images/SomelistSecondaryRound.png",
  "navbar": [
    {
      "text": "Guide",
      "link": "/guide/"
    },
    {
      "text": "API",
      "link": "/api/"
    },
    {
      "text": "Support",
      "link": "/support/"
    },
    {
      "text": "Somelist",
      "link": "https://somelist.tk"
    }
  ],
  "sidebar": {
    "/guide": [
      {
        "text": "Guide",
        "children": [
          "/guide/",
          "/guide/getting-started.md"
        ]
      }
    ],
    "/api": [
      {
        "text": "API Reference",
        "children": [
          "/api/",
          "/api/ratelimits",
          "/api/users",
          "/api/bot"
        ]
      }
    ],
    "/support": [
      {
        "text": "Support",
        "children": [
          "/support/"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
