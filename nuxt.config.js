export default {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: "Curt Grimes - Web Developer",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Curt Grimes is a full-stack web developer from the northern Illinois area."
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
        content: "https://curtgrimes.com"
      },
      {
        property: "og:description",
        content: "Curt Grimes is a full-stack web developer from the northern Illinois area."
      },
      {
        property: "og:image",
        content: "/og-image.jpg"
      },
      {
        property: "og:type",
        content: "website"
      }
    ],
    link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=DM+Serif+Text&display=swap&text=.ABCFGIMSabcdehikmnorstuvw'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,900&display=swap&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzé-,.'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Cousine&display=swap&text=WEBCAPTIONER'
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
  ],
  purgeCSS: {
    mode: "postcss",
    whitelistPatterns: [/^fa-(?!rotate|spin|pull|flip)/, /svg-inline--fa/] // ignore Font Awesome classes
  },
  build: {
    extend(config, ctx) {}
  }
};
