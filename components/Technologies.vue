<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-md-4">
        <h2 class="sticky-top" style="top:1.5rem">I've worked with...</h2>
      </div>
      <div class="col-md-8 mt-3 column-count-lg-2 column-gap-1">
        <div
          v-for="(technology, index) in technologies"
          :key="index"
          class="pb-3 pb-lg-4 break-inside-avoid"
        >
          <h3 class="border-top pt-2 mb-4 mb-lg-3">
            <fa :icon="technology.icon" size="sm" fixed-width />
            {{technology.name}}
          </h3>
          <ul class="list-unstyled font-italic column-count-2" style="line-height: 1.8rem">
            <li v-for="(example, index) in technology.examples" :key="index" class="mb-2">
              <a v-if="example.url" :href="example.url">{{example.name}}</a>
              <template v-else>{{example}}</template>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        {
          name: "Frontend",
          icon: ["far", "window-alt"],
          examples: [
            "HTML",
            "JavaScript",
            "CSS",
            "Vue.js",
            "Nuxt.js",
            "SCSS",
            "Bootstrap",
            "jQuery",
            "Hugo (static site generator)",
            "Responsive web design",
            "Web accessibility",
            "Browser extensions and userscripts"
          ]
        },
        {
          name: "Backend",
          icon: ["far", "cloud"],
          examples: [
            "Node.js",
            "Express",
            "PHP",
            "MySQL",
            "MS SQL",
            "Docker",
            "Redis",
            "WebSockets"
          ]
        },
        {
          name: "Services",
          icon: ["far", "sparkles"],
          examples: [
            "Amazon Web Services",
            "Firebase",
            "Azure Bot Service",
            "GitLab API",
            "Dropbox API",
            "Microsoft Graph API",
            "Web Speech API",
            "WordPress",
            "MediaWiki",
            "Stripe"
          ]
        },
        {
          name: "Ask me about",
          icon: ["far", "comment-smile"],
          examples: [
            {
              name: "Stream Deck",
              url: "https://www.elgato.com/en/gaming/stream-deck"
            },
            {
              name: "Home Assistant",
              url: "https://www.home-assistant.io/"
            },
            "Google Glass"
          ]
        }
      ]
    };
  }
};
</script>