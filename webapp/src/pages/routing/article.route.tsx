import { lazy } from 'react'

const Articles = lazy(() =>
  import('../articles').then((module) => ({ default: module.Articles }))
)

export const articleRouteMap = {
  path: 'articles',
  element: <Articles />
}
