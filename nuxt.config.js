const BASE_URL = "https://curtgrimes.com";
const SITE_NAME = "Curt Grimes - Web Developer - Northern Illinois";
const SITE_NAME_SHORT = "Curt Grimes - Web Developer";
const SITE_DESCRIPTION =
  "Curt Grimes is a full-stack web developer located in the northern Illinois area.";

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
        content: "#2ada7d"
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
          "https://fonts.googleapis.com/css?family=DM+Serif+Text&display=swap&text=.ABCFGIMPSabcdeghikmnorstuvwy"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,900"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#2ada7d"
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
  serverMiddleware: ["~/server-middleware/redirects.js"],
  build: {
    babel: {
      plugins: ["@babel/plugin-proposal-optional-chaining"]
    },
    extend(config, ctx) {},
    parallel: true, // https://nuxtjs.org/api/configuration-build#parallel
    cache: true, // https://nuxtjs.org/api/configuration-build#cache
    hardSource: true // https://nuxtjs.org/api/configuration-build#hardsource
  }
};
