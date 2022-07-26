import type { VueQueryPluginOptions } from 'vue-query'
import { VueQueryPlugin } from 'vue-query'

export default defineNuxtPlugin((nuxtApp) => {
  const config: VueQueryPluginOptions = {}

  nuxtApp.vueApp.use(VueQueryPlugin, config)
})
