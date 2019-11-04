<template>
  <div>
    <hero-header />
    <div class="bg-light">
      <bio />
      <technologies />
      <featured-links />
    </div>
  </div>
</template>

<script>
import HeroHeader from "~/components/HeroHeader.vue";
import Bio from "~/components/Bio.vue";
import Technologies from "~/components/Technologies.vue";
import FeaturedLinks from "~/components/FeaturedLinks.vue";

export default {
  components: {
    HeroHeader,
    Bio,
    Technologies,
    FeaturedLinks
  }
};
</script>
