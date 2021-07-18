<template>
  <section class="pb-5 bg-light">
    <div class="container">
      <h2 class="text-center text-sm-left text-md-center mb-4">
        I enjoy using...
      </h2>

      <div
        class="mb-3 d-flex justify-content-center justify-content-sm-start justify-content-md-center flex-wrap"
      >
        <TechnologyHero name="React" :icon="['fab', 'react']" />
        <TechnologyHero name="Vue" :icon="['fab', 'vuejs']" />
        <TechnologyHero name="Node.js" :icon="['fab', 'node']" />
        <TechnologyHero name="Sass" :icon="['fab', 'sass']" />
        <TechnologyHero
          name="Tailwindcss"
          :img="require('~/assets/img/icons/tailwindcss.svg')"
        />
        <TechnologyHero
          name="Jest"
          :img="require('~/assets/img/icons/jest.svg')"
        />
        <TechnologyHero name="Docker" :icon="['fab', 'docker']" />
      </div>

      <h2
        class="text-center text-sm-left text-md-center mb-4"
        style="font-size:1.5rem"
      >
        And I've also worked with
      </h2>

      <ul
        class="list-unstyled font-italic text-center text-sm-left text-md-center d-grid"
      >
        <li v-for="technology in alsoWorkedWith" :key="technology" class="mb-2">
          {{ technology }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import TechnologyHero from "~/components/TechnologyHero.vue";

export default {
  components: { TechnologyHero },
  data: () => ({
    alsoWorkedWith: [
      "Bootstrap",
      "Next.js",
      "Nuxt.js",
      "Express.js",
      "PHP",
      "MySQL",
      "Redis",
      "WebSockets",
      "Amazon Web Services",
      "Web Speech API",
      "Firebase",
      "Mapbox",
      "D3",
      "Ionic Framework",
      "Hugo",
      "HTML5",
      "CSS3",
      "jQuery",
      "WordPress"
    ]
  })
};
</script>
