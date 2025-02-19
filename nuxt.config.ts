// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseUrl:
        process.env.API_BASE_URL || "https://rifatback.pythonanywhere.com/",
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "Rifat's Blog",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  ssr: false,
  compatibilityDate: "2025-01-08",
  modules: ["@nuxt/image", "@primevue/nuxt-module", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
