<template>
  <div class="container mb-6 music">
    <div class="row">
      <div
        class="col-sm-8 col-md-4 mx-auto mb-5"
        v-for="album in albums"
        :key="album.url"
      >
        <nuxt-link :to="album.url" class="text-dark stretched-link">
          <img
            :src="album.art"
            class="w-100 shadow rounded-lg mb-3"
            :alt="album.name"
          />
          <div class="d-flex align-items-center align-items-sm-start mb-n1">
            <h3 class="mb-0">
              {{ album.name }}
            </h3>
            <span
              v-if="album.single"
              class="badge badge-secondary ml-2 ml-sm-auto p-1"
            >
              Single
            </span>
          </div>
          <span
            class="small text-decoration-none d-inline-block"
            style="opacity:.5"
            >{{ album.year }}</span
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    albums: [
      {
        name: "Christmas Songs on Piano",
        url: "/music/christmas-songs-on-piano",
        art: "/music/christmas-songs-on-piano/christmas-songs-on-piano.jpg",
        year: 2020
      },
      {
        name: "Sands of July",
        url: "/music/sands-of-july",
        art: "/music/sands-of-july/sands-of-july.jpg",
        single: true,
        year: 2021
      },
      {
        name: "August Improvisation",
        url: "/music/august-improvisation",
        art: "/music/august-improvisation/august-improvisation.jpg",
        single: true,
        year: 2021
      },
      {
        name: "In Space",
        url: "/music/in-space",
        art: "/music/in-space/in-space.jpg",
        single: true,
        year: 2022
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.badge {
  font-size: 0.75rem;
  opacity: 0.5;
}
</style>
