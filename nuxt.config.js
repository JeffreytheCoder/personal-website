
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  router: {
    base: '/personal-website/'
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'aos/dist/aos.css',
    'vue-typed-js/dist/vue-typed-js.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: '@/plugins/ElementUI', ssr: true },
    {src: '@/plugins/ParticlesBG', mode: 'client'},
    {src: '@/plugins/VueParticles', mode: 'client'},
    {src: '@/plugins/aos.js', mode: 'client'},
    {src: '@/plugins/VueTypedJS.js', mode: 'client'},
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components1
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['vue-scrollto/nuxt', {duration: 1000}],
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    vendor: ['axios']
  }
}
