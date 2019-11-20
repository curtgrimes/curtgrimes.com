<template>
  <main>
    <hero-header />
    <bio />
    <technologies />
    <featured-links />
    <projects />
    <contact />
  </main>
</template>

<script>
import HeroHeader from "~/components/HeroHeader.vue";
import Bio from "~/components/Bio.vue";
import Technologies from "~/components/Technologies.vue";
import FeaturedLinks from "~/components/FeaturedLinks.vue";
import Projects from "~/components/Projects.vue";
import Contact from "~/components/Contact.vue";
import skills from "~/data/skills";

export default {
  components: {
    HeroHeader,
    Bio,
    Technologies,
    FeaturedLinks,
    Projects,
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
              contactType: "LinkedIn",
              identifier: "curtgrimes",
              url: "https://linkedin.com/in/curtgrimes"
            },
            {
              "@type": "ContactPoint",
              contactType: "GitHub",
              identifier: "curtgrimes",
              url: "https://github.com/curtgrimes"
            }
          ],
          email: "curt@curtgrimes.com",
          homeLocation: {
            "@type": "Place",
            name: "Sycamore, IL",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sycamore",
              addressRegion: "IL",
              postalCode: "60178"
            }
          },
          image: "https://curtgrimes.com/og-image.jpg",
          jobTitle: "Web Developer",
          knowsAbout: [].concat(
            ...skills.map(s => s.examples.map(e => e.name))
          ),
          url: "https://curtgrimes.com",
          sameAs: [
            "https://github.com/curtgrimes",
            "https://linkedin.com/in/curtgrimes"
          ],
          worksFor: [
            {
              "@type": "Organization",
              name: "Northern Illinois University",
              sameAs: [
                "https://niu.edu",
                "https://twitter.com/niulive",
                "https://www.facebook.com/NorthernIllUniv/",
                "https://www.linkedin.com/school/northern-illinois-university/"
              ]
            }
          ]
        }
      }
    ]
  }
};
</script>
