import { backend_url } from "./constants/backend";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "جابنیت",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/global.css", "~/assets/css/custom.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@alireza-ab/vue-persian-datepicker/nuxt",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    "/api/": {
      target: backend_url,
      pathRewrite: {
        "^/api": "",
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Nuxt auth config: https://auth.nuxtjs.org/
  auth: {
    plugins: ["~/plugins/network.js"],
    redirect: {
      login: "/auth/login",
      logout: "/",
      callback: "/auth/login",
      home: "/dashboard",
    },
    strategies: {
      defaultStrategy: {
        scheme: "~/schemes/defaultScheme",
        endpoints: {
          login: {
            url: "/api/users/login/",
            method: "post",
          },
          logout: {
            url: "/api/users/logout/",
            method: "post",
          },
          user: {
            url: "/api/users/user-info/",
            method: "get",
          },
        },
        token: {
          property: "token",
          global: true,
          required: true,
          type: "token",
          maxAge: 86400,
        },
        user: {
          autoFetch: true,
        },
      },
    },
  },

  router: {
    middleware: ["auth"],
  },
};
