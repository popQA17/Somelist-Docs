export const data = {
  "key": "v-19813140",
  "path": "/api/bot.html",
  "title": "Bots",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Get Bot",
      "slug": "get-bot",
      "children": []
    },
    {
      "level": 2,
      "title": "Update Bot Info",
      "slug": "update-bot-info",
      "children": [
        {
          "level": 3,
          "title": "Keys",
          "slug": "keys",
          "children": []
        },
        {
          "level": 3,
          "title": "Example Payload",
          "slug": "example-payload",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "api/bot.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
