
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "87aae739-17df-44ec-9bb1-769a3dad8b36"
  },
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ],
    "strategy": "merge"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/workspace/EKS-Workshop/my-docs/app.config.ts"
import cfg1 from "/workspace/EKS-Workshop/my-docs/node_modules/@nuxt/ui-pro/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, cfg1, inlineConfig)