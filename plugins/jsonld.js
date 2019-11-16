import Vue from 'vue';
import NuxtJsonld from 'nuxt-jsonld';

Vue.use(NuxtJsonld);

// Set the indentation
Vue.use(NuxtJsonld, {
  space: process.env.NODE_ENV === 'production' ? 0 : 2,
});
