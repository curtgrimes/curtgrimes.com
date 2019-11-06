<template>
  <div id="web-captioner" class="container py-5">
    <div class="row position-relative align-items-center">
      <div class="col-lg-10">
        <div class="bg-webcaptioner p-4 py-5 px-sm-5">
          <div class="col-lg-7 col-xl-8">
            <h2>Web Captioner</h2>
            <p class="small">
              <span class="d-block mb-n1">
                <span
                  v-for="(technology, index) in ['Node.js', 'Nuxt.js', 'Vue.js', 'Web Speech API', 'Bootstrap', 'Docker', 'AWS Fargate']"
                  class="badge badge-light border mr-1 mb-1"
                  :key="index"
                >{{technology}}</span>
              </span>
            </p>
            <div class="col-md-9 p-0 mb-1 d-lg-none">
              <video
                loading="lazy"
                autoplay
                playsinline
                muted
                loop
                :poster="require('~/assets/img/web-captioner-poster.png')"
                class="w-100 border rounded bg-secondary"
              >
                <source data-src="/video/web-captioner-loop.mp4" type="video/mp4" />
              </video>
            </div>
            <p>
              One of my current projects,
              <a href="https://webcaptioner.com">Web Captioner</a>, is a
              web-based speech-to-text service. With Web Captioner, my goal has been to make
              it so easy to add captions to an event or live stream that there is simply no reason not to.
            </p>
            <p>
              Web Captioner is used in
              <a
                href="https://webcaptioner.com/testimonials/"
              >live streams and events</a> across the world.
            </p>
            <p class="mb-n3 lead d-flex flex-wrap" style="line-height:2rem">
              <a
                href="https://webcaptioner.com"
                class="btn btn-outline-secondary btn-sm mr-3 mb-3"
              >webcaptioner.com</a>
              <span class="d-flex align-items-center mb-3">
                <a
                  href="https://facebook.com/webcaptioner"
                  class="text-secondary px-1 mx-1"
                  aria-label="Web Captioner on Facebook"
                  title="Web Captioner on Facebook"
                >
                  <fa :icon="['fab','facebook-square']" fixed-width />
                </a>
                <a
                  href="https://www.messenger.com/t/webcaptioner"
                  class="text-secondary px-1 mx-1"
                  aria-label="Web Captioner on Facebook Messenger"
                  title="Web Captioner on Facebook Messenger"
                >
                  <fa :icon="['fab','facebook-messenger']" fixed-width />
                </a>
                <a
                  href="https://twitter.com/webcaptioner"
                  class="text-secondary px-1 mx-1"
                  aria-label="Web Captioner on Twitter"
                  title="Web Captioner on Twitter"
                >
                  <fa :icon="['fab','twitter-square']" fixed-width />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-5 position-absolute pb-3 d-none d-lg-block" style="right:0">
        <a href="https://webcaptioner.com">
          <video
            loading="lazy"
            autoplay
            playsinline
            muted
            loop
            :poster="require('~/assets/img/web-captioner-poster.png')"
            class="w-100 shadow border rounded bg-secondary"
          >
            <source data-src="/video/web-captioner-loop.mp4" type="video/mp4" />
          </video>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.lazyLoadVideos();
  },
  methods: {
    lazyLoadVideos() {
      // Based off of
      // https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video#for_video_acting_as_an_animated_gif_replacement
      document.addEventListener("DOMContentLoaded", function() {
        var lazyVideos = [].slice.call(
          document.querySelectorAll("video[loading='lazy']")
        );

        if ("IntersectionObserver" in window) {
          var lazyVideoObserver = new IntersectionObserver(function(
            entries,
            observer
          ) {
            entries.forEach(function(video) {
              if (video.isIntersecting) {
                for (var source in video.target.children) {
                  var videoSource = video.target.children[source];
                  if (
                    typeof videoSource.tagName === "string" &&
                    videoSource.tagName === "SOURCE"
                  ) {
                    videoSource.src = videoSource.dataset.src;
                  }
                }

                video.target.load();
                lazyVideoObserver.unobserve(video.target);
              }
            });
          });

          lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
          });
        }
      });
    }
  }
};
</script>