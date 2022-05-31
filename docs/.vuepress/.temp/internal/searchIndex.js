export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Api Reference",
    "headers": [
      {
        "level": 2,
        "title": "Quick Starter",
        "slug": "quick-starter",
        "children": []
      },
      {
        "level": 2,
        "title": "Want to Contribute?",
        "slug": "want-to-contribute",
        "children": []
      }
    ],
    "path": "/api/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Bots",
    "headers": [
      {
        "level": 2,
        "title": "Get Bot",
        "slug": "get-bot",
        "children": []
      }
    ],
    "path": "/api/bot.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Users",
    "headers": [
      {
        "level": 2,
        "title": "Fetch User",
        "slug": "fetch-user",
        "children": []
      }
    ],
    "path": "/api/users.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Introduction",
    "headers": [
      {
        "level": 2,
        "title": "Welcome!",
        "slug": "welcome",
        "children": []
      },
      {
        "level": 2,
        "title": "Ready?",
        "slug": "ready",
        "children": []
      },
      {
        "level": 2,
        "title": "Feeling brave?",
        "slug": "feeling-brave",
        "children": []
      }
    ],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Getting Started",
    "headers": [
      {
        "level": 2,
        "title": "Python Module",
        "slug": "python-module",
        "children": []
      },
      {
        "level": 2,
        "title": "Javascript Module",
        "slug": "javascript-module",
        "children": []
      }
    ],
    "path": "/guide/getting-started.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Introduction",
    "headers": [
      {
        "level": 2,
        "title": "Welcome!",
        "slug": "welcome",
        "children": []
      },
      {
        "level": 2,
        "title": "Ready?",
        "slug": "ready",
        "children": []
      },
      {
        "level": 2,
        "title": "Feeling brave?",
        "slug": "feeling-brave",
        "children": []
      }
    ],
    "path": "/support/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
