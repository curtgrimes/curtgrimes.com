export default {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: "Curt Grimes: Web Developer",
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
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
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
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-12301-2'
    // }],
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
