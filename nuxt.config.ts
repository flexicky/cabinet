export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "~/assets/css/base.css",
    "~/assets/css/layout.css",
    "~/assets/css/common.css",
    "~/assets/css/dashboard.css",
    "~/assets/css/charts.css",
    "~/assets/css/tracker.css",
    "~/assets/css/communities.css",
  ],
  components: [{ path: "~/components", pathPrefix: false }],
  app: {
    head: {
      htmlAttrs: { lang: "ru" },
      title: "Monst — аналитика ВКонтакте",
      meta: [
        {
          name: "description",
          content:
            "Аналитика сообществ ВКонтакте и онлайн-трекер аудитории в кабинете Monst.",
        },
        { name: "theme-color", content: "#17131f" },
      ],
    },
  },
  typescript: { strict: true, typeCheck: true },
});
