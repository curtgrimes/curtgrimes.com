<template>
  <main>
    <hero-header />
    <bio />
    <technologies />
    <contact />
  </main>
</template>

<script>
import HeroHeader from "~/components/HeroHeader.vue";
import Bio from "~/components/Bio.vue";
import Technologies from "~/components/Technologies.vue";
import Contact from "~/components/Contact.vue";

export default {
  components: {
    HeroHeader,
    Bio,
    Technologies,
    Contact
  },
  head: {
    script: [
      {
        type: "application/ld+json",
        json: {
          "@context": "http://schema.org",
          "@type": "Person",
          name: "Curt Grimes",
          givenName: "Curt",
          familyName: "Grimes",
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "GitHub",
              identifier: "curtgrimes",
              url: "https://github.com/curtgrimes"
            }
          ],
          image: "https://curtgrimes.com/og-image.jpg",
          jobTitle: "Web Developer",
          url: "https://curtgrimes.com",
          sameAs: ["https://github.com/curtgrimes"]
        }
      }
    ]
  }
};
</script>
