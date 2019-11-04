export default {
  head: {
    title: "Curt Grimes: Web Developer",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Curt Grimes is a full-stack web developer from the northern Illinois area."
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  loading: false,
  css: [
    "@/assets/scss/app.scss",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  plugins: ["~/plugins/fontawesome.js"],
  buildModules: [],
  modules: ["nuxt-purgecss"],
  purgeCSS: {
    mode: "postcss",
    whitelistPatterns: [/^fa/, /svg-inline--fa/] // ignore Font Awesome classes
  },
  build: {
    extend(config, ctx) {}
  }
};
