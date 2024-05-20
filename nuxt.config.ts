// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.BASE_API_URL,
      wsUrl: process.env.WS_URL,
      nextAuthUrl: process.env.NEXTAUTH_URL,
    },
  },
  css: ['vue-final-modal/style.css'],
  build: {
    //   extractCSS: false,
    transpile: ['vuetify'],
  },
  modules: ['@pinia/nuxt', '@nuxt/devtools', '@nuxtjs/tailwindcss', '@sidebase/nuxt-auth', '@vee-validate/nuxt'],
  plugins: [
    '@/plugins/axios',
    '@/plugins/api',
    '@/plugins/vue-query',
    '@/plugins/vue-money',
    '@/plugins/vue-final-modal',
    '@/plugins/sockjs-client',
    '@/plugins/directive.client',
    '@/plugins/vue3-emoji-picker.client',
    '@/plugins/event-bus',
    '@/plugins/firebase.client',
  ],
  auth: {
    // The module is enabled. Change this to disable the module
    isEnabled: true,
    // The origin is set to the development origin. Change this when deploying to production by setting `origin` in this config before build-time or by exporting `AUTH_ORIGIN` by running `export AUTH_ORIGIN=...`
    baseURL: process.env.AUTH_ORIGIN,
    // The base path to the authentication endpoints. Change this if you want to add your auth-endpoints at a non-default location
    origin: "https://zolaweb.netlify.app",
    basePath: "/api/auth",
    // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5000 milliseconds (aka: 5 seconds)
    enableSessionRefreshPeriodically: false,
    // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
    enableSessionRefreshOnWindowFocus: true,
    // Whether to add a global authentication middleware that will protect all pages without exclusion
    enableGlobalAppMiddleware: false,
    // Select the default-provider to use when `signIn` is called. Setting this here will also effect the global middleware behavior: E.g., when you set it to `github` and the user is unauthorized, they will be directly forwarded to the Github OAuth page instead of seeing the app-login page
    defaultProvider: undefined,
    // Configuration of the global auth-middleware (only applies if you set `enableGlobalAppMiddleware: true` above!)
    globalMiddlewareOptions: {
      // Whether to allow access to 404 pages without authentication. Set this to `false` to force users to sign-in before seeing `404` pages. Setting this to false may lead to vue-router problems (as the target page does not exist)
      allow404WithoutAuth: true,
    },
  },

  app: {
    head: {
      title: 'Zola',
      link: [
        {
          rel: 'manifest',
          href: '/manifest.webmanifest',
        },
      ],
    },
  },
  nitro: {
    serveStatic: true,
  },
  devServerHandlers: [],
  // @ts-ignore
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      styles: {
        configFile: '~/assets/scss/_variables.scss',
      },
    },
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
})
