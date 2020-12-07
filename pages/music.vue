<template>
  <div>
    <div class="container music">
      <div class="d-flex align-items-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 ml-n2 d-flex align-items-center">
            <li class="breadcrumb-item">
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li
              class="breadcrumb-item"
              :class="{ active: currentRoutePath.endsWith('/music') }"
              :aria-current="currentRoutePath.endsWith('/music') ? 'page' : ''"
            >
              <span v-if="currentRoutePath.endsWith('/music')">Music</span>
              <nuxt-link to="/music" v-else>Music</nuxt-link>
            </li>
            <li
              class="breadcrumb-item"
              v-if="
                currentRoutePath.endsWith('/music/christmas-songs-on-piano')
              "
              :class="{
                active: currentRoutePath.endsWith(
                  '/music/christmas-songs-on-piano'
                )
              }"
              :aria-current="
                currentRoutePath.endsWith('/music/christmas-songs-on-piano')
                  ? 'page'
                  : ''
              "
            >
              <span
                v-if="
                  currentRoutePath.endsWith('/music/christmas-songs-on-piano')
                "
                >Christmas Songs on Piano</span
              >
            </li>
          </ol>
        </nav>
      </div>
      <div
        class="bg-light rounded-lg"
        style="box-shadow:0 0 5rem rgba(0,0,0,.2) inset"
      >
        <picture>
          <source
            :srcset="require('~/assets/img/headshot.webp')"
            type="image/webp"
          />
          <source
            :srcset="require('~/assets/img/headshot.png')"
            type="image/png"
          />

          <img
            :src="require('~/assets/img/headshot.png')"
            alt=""
            class="pt-3 mx-auto d-block pl-4"
            style="pointer-events:none;height:15rem"
          />
        </picture>
      </div>
      <h1 class="text-center mt-5 mb-6">
        Music by<br class="d-block d-md-none" />
        Curt Grimes
      </h1>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Music - Curt Grimes",
      bodyAttrs: {
        class: "bg-white"
      },
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Music by Curt Grimes"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://curtgrimes.com/music"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Listen to music by Curt Grimes."
        },
        {
          hid: "description",
          name: "description",
          content: "Music by Curt Grimes"
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#ffffff"
        }
      ]
    };
  },
  computed: {
    currentRoutePath() {
      return this.$route.path.replace(/\/+$/, ""); // without trailing slashes
    }
  }
};
</script>
