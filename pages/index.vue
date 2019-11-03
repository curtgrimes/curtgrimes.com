<template>
  <main>
    <hero-header />
    <div class="bg-light">
      <bio />
      <technologies />
      <featured-links />
      <projects />
      <contact />
    </div>
  </main>
</template>

<script>
import HeroHeader from "~/components/HeroHeader.vue";
import Bio from "~/components/Bio.vue";
import Technologies from "~/components/Technologies.vue";
import FeaturedLinks from "~/components/FeaturedLinks.vue";
import Projects from "~/components/Projects.vue";
import Contact from "~/components/Contact.vue";

export default {
  components: {
    HeroHeader,
    Bio,
    Technologies,
    FeaturedLinks,
    Projects,
    Contact
  }
};
</script>
