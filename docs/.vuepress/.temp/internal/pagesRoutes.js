import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-744497ce","/api/",{"title":"Api Reference"},["/api/index.html","/api/README.md"]],
  ["v-19813140","/api/bot.html",{"title":"Bots"},["/api/bot","/api/bot.md"]],
  ["v-87dc455a","/api/ratelimits.html",{"title":"Ratelimits"},["/api/ratelimits","/api/ratelimits.md"]],
  ["v-365de61f","/api/users.html",{"title":"Users"},["/api/users","/api/users.md"]],
  ["v-fffb8e28","/guide/",{"title":"Introduction"},["/guide/index.html","/guide/README.md"]],
  ["v-fb0f0066","/guide/getting-started.html",{"title":"Getting Started"},["/guide/getting-started","/guide/getting-started.md"]],
  ["v-73866439","/support/",{"title":"Introduction"},["/support/index.html","/support/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
