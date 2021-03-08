
export default {
  mode: 'universal',
  target: 'server',
  router: {
    middleware: [],
  },
  head: {
    title: '카카오페이 개발 과제', //process.env.npm_package_name
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {},
  build: {
  },
  styleResources: {
    sass: [
    ]
  },
}
