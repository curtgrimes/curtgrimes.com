<template>
  <section class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <iframe
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          width="100%"
          height="500"
          type="text/html"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/0lnZmlNfO9k?autoplay=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
        ></iframe>
        <div class="text-center mt-3 mb-5">
          <h2 class="h3">August Improvisation</h2>
          <p class="mb-0 font-italic">Curt Grimes &middot; 2021</p>
          <p class="mb-0 font-italic">For Aunt Carol</p>
          <p class="mt-4">
            <nuxt-link to="/music">Other music by Curt Grimes</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  meta: {
    title: "August Improvisation"
  },
  head() {
    return {
      title: "August Improvisation - Curt Grimes",
      bodyAttrs: {
        class: "bg-white"
      },
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "August Improvisation"
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "music.album"
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://curtgrimes.com/music/august-improvisation/august-improvisation.jpg"
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Curt Grimes"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://curtgrimes.com/music/august-improvisation"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "August Improvisation, a single by Curt Grimes."
        },
        {
          hid: "description",
          name: "description",
          content: "August Improvisation, a single by Curt Grimes."
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#ffffff"
        }
      ]
    };
  }
};
</script>
