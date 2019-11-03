<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    // Workaround a Safari rendering bug when using Google fonts with specific characters specified.
    // This causes the whole font to load again with all of the characters -- not quite performant
    // for Safari, but nice and fast for non-Safari browsers.

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      function loadFont(href) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }
      loadFont(
        "https://fonts.googleapis.com/css?family=DM+Serif+Text&display=swap"
      );
      loadFont(
        "https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,900&display=swap"
      );
      loadFont("https://fonts.googleapis.com/css?family=Cousine&display=swap");
    }
  }
};
</script>