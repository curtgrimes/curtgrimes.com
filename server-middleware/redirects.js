// 301 redirects
// Based off of https://medium.com/vue-mastery/best-practices-for-nuxt-js-seo-32399c49b2e5

const redirects = [{
    from: '/works/web-captioner/',
    to: '/#web-captioner'
  },
  {
    from: '/works/faq-app/',
    to: '/'
  },
  {
    from: '/works/tuition-estimator/',
    to: '/'
  },
  {
    from: '/works/toss-fish/',
    to: '/'
  },
  {
    from: '/works/housing-handbook/',
    to: '/'
  },
  {
    from: '/works/where-to-eat/',
    to: '/'
  },
];

module.exports = function (req, res, next) {
  const redirect = redirects.find(r => r.from === req.url);
  if (redirect) {
    res.writeHead(301, {
      Location: redirect.to
    });
    res.end();
  } else {
    next();
  }
}
