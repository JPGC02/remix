import { createController } from 'remix/fetch-router'

import { assetServer } from '../assets.ts'
import { routes } from '../routes.ts'
import { ComponentsPage } from '../ui/components-page.tsx'
import { HomePage } from '../ui/scaffold-home-page.tsx'

export default createController(routes, {
  actions: {
    async assets(context) {
      return (
        (await assetServer.fetch(context.request)) ?? new Response('Not Found', { status: 404 })
      )
    },
    home(context) {
      return context.render(<HomePage />)
    },
    components(context) {
      return context.render(<ComponentsPage />)
    },
  },
})
