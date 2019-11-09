const BASE_URL = 'https://curtgrimes.com'

export default {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: "Curt Grimes - Web Developer - Northern Illinois area",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        hid: "description",
        name: "description",
        content: "Curt Grimes is a full-stack web developer located in the northern Illinois area."
      },
      {
        name: "theme-color",
        content: "#2ada7d"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Curt Grimes - Web Developer"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: BASE_URL
      },
      {
        property: "og:description",
        content: "Curt Grimes is a full-stack web developer from the northern Illinois area."
      },
      {
        property: "og:image",
        content: BASE_URL + "/og-image.jpg"
      },
      {
        property: "og:type",
        content: "website"
      }
    ],
    link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=DM+Serif+Text&text=.ABCFGIMSabcdehikmnorstuvw'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,900&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzé-,.'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Cousine&text=WEBCAPTIONER'
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
      },
    ]
  },
  loading: false,
  css: [
    "@/assets/scss/app.scss",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  plugins: [
    "~/plugins/fontawesome.js",
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-47023012-1'
    }],
  ],
  modules: [
    "nuxt-purgecss",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap", // always include last
  ],
  purgeCSS: {
    mode: "postcss",
    whitelistPatterns: [/^fa-(?!rotate|spin|pull|flip)/, /svg-inline--fa/] // ignore Font Awesome classes
  },
  robots: {
    sitemap: BASE_URL + '/sitemap.xml'
  },
  build: {
    extend(config, ctx) {}
  }
};
