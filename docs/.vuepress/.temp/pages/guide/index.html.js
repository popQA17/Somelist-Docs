export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "Introduction",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
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
  "git": {},
  "filePathRelative": "guide/README.md"
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
