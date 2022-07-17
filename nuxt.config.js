const BASE_URL = "https://curtgrimes.com";
const SITE_NAME =
  "Curt Grimes - Full-Stack Software Engineer - Northern Illinois";
const SITE_NAME_SHORT = "Curt Grimes - Full-Stack Software Engineer";
const SITE_DESCRIPTION =
  "Curt Grimes is a full-stack software engineer located in the northern Illinois area.";

export default {
  env: {
    baseUrl: BASE_URL
  },
  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: SITE_NAME,
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        hid: "description",
        name: "description",
        content: SITE_DESCRIPTION
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#1eb8e5"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: SITE_NAME_SHORT
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: SITE_NAME_SHORT
      },
      {
        hid: "og:url",
        property: "og:url",
        content: BASE_URL
      },
      {
        hid: "og:description",
        property: "og:description",
        content: SITE_DESCRIPTION
      },
      {
        hid: "og:image",
        property: "og:image",
        content: BASE_URL + "/og-image.jpg"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        name: "twitter:card",
        content: "summary"
      },
      {
        name: "twitter:image",
        content: BASE_URL + "/og-image.jpg"
      },
      {
        name: "twitter:title",
        content: SITE_NAME_SHORT
      },
      {
        name: "twitter:description",
        content: SITE_DESCRIPTION
      },
      {
        name: "twitter:site",
        content: "@curtgrimes"
      }
    ],
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com/",
        crossorigin: true
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com/",
        crossorigin: true
      },
      {
        rel: "preconnect",
        href: "https://www.google-analytics.com/",
        crossorigin: true
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=DM+Serif+Text&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,900"
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#1eb8e5"
      }
    ]
  },
  loading: false,
  css: [
    "@/assets/scss/app.scss",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  plugins: ["~/plugins/fontawesome.js"],
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-47023012-1"
      }
    ]
  ],
  modules: [
    "nuxt-purgecss",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap" // always include last
  ],
  purgeCSS: {
    mode: "postcss",
    whitelistPatterns: [
      // Whitelist only Font Awesome classes that are used
      /^fa-(?!rotate|spin|pull|flip|pulse|stack|primary|secondary|layers)/,
      /svg-inline--fa/
    ]
  },
  robots: {
    sitemap: BASE_URL + "/sitemap.xml"
  },
  serverMiddleware: ["~/server-middleware/redirects.js"]
};
