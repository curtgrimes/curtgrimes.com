<template>
  <section class="bg-primary">
    <div class="container">
      <div class="row justify-content-center text-center py-3 py-sm-5">
        <div v-for="(link, index) in links" :key="index" class="col-sm-4 col-md-3 px-sm-3">
          <a
            :href="link.url"
            class="btn btn-link text-secondary d-flex align-items-center justify-content-center d-sm-block"
          >
            <span class="d-sm-block mb-sm-2 mr-2 mr-sm-0">
              <fa :icon="link.icon" size="3x" fixed-width />
            </span>
            {{link.name}}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "GitHub",
          url: "https://github.com/curtgrimes",
          icon: ["fab", "github"]
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/curtgrimes",
          icon: ["fab", "linkedin-in"]
        },
        {
          name: "Contact Me",
          url: "#contact",
          icon: ["fas", "paper-plane"]
        }
      ]
    };
  }
};
</script>