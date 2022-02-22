export const data = {
  "key": "v-7afc08fc",
  "path": "/other.html",
  "title": "Hello VuePress",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Hello bye",
      "slug": "hello-bye",
      "children": []
    },
    {
      "level": 2,
      "title": "Good mornin",
      "slug": "good-mornin",
      "children": []
    },
    {
      "level": 2,
      "title": "hey",
      "slug": "hey",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "other.md"
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
