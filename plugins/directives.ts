// plugins/directives.ts
import vIntersection from '~/directives/v-intersection'
import {defineNuxtPlugin} from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('intersection', vIntersection)
})