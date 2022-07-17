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
          src="https://www.youtube.com/embed/AqiD2uqlGwE?autoplay=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
        ></iframe>
        <div class="text-center mt-3 mb-5">
          <h2 class="h3">Angel Island Zone (Sonic 3 & Knuckles)</h2>
          <p class="mb-0 font-italic">Cover by Curt Grimes</p>
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
    title: "Angel Island Zone"
  },
  head() {
    return {
      title: "Angel Island Zone - Curt Grimes",
      bodyAttrs: {
        class: "bg-white"
      },
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Angel Island Zone"
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
            "https://curtgrimes.com/music/angel-island-zone/angel-island-zone.jpg"
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Curt Grimes"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://curtgrimes.com/music/angel-island-zone"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Angel Island Zone, a cover by Curt Grimes."
        },
        {
          hid: "description",
          name: "description",
          content: "Angel Island Zone, a cover by Curt Grimes."
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
