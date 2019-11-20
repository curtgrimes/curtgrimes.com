<template>
  <div
    class="container h-100 position-absolute d-flex align-items-center justify-content-center"
    style="top:0;right:0;bottom:0;left:0"
  >
    <div class="px-4 py-3 col-md-6 bg-white rounded shadow-sm mb-5">
      <div class="display-1 text-muted">{{ error.statusCode }}</div>
      <h1
        class="font-sans-serif h3 font-italic"
        v-if="error.statusCode === 404"
      >
        Page not found
      </h1>
      <h1 v-else>An error occurred</h1>
      <hr />
      <nuxt-link to="/">
        <fa :icon="['far', 'arrow-left']" class="mr-2" />Home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>
