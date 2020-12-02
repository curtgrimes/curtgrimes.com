<template>
  <section class="mb-5 bg-light">
    <div class="container">
      <div
        class="rounded rounded-xs-only-none rounded bg-white position-relative"
        style="top:-3rem;margin-bottom:-3rem;z-index:11"
      >
        <nav class="d-sm-flex justify-content-center p-4">
          <nuxt-link to="/resume" class="px-4 pb-3 pb-sm-0 d-block text-center">
            Résumé
          </nuxt-link>
          <nuxt-link to="/music" class="px-4 pb-3 pb-sm-0 d-block text-center">
            Music
          </nuxt-link>
          <a href="#contact" class="px-4 d-block text-center">
            Contact Me
          </a>
        </nav>
        <div class="row">
          <div
            class="col-md-9 mx-auto lead px-5 pb-4 px-sm-5 pb-md-5 pt-4 bio-border-top"
          >
            <p>
              I am a full-stack web developer. Currently, I have been working a
              lot with
              <em>JavaScript</em>, <em>Node.js</em>, and <em>Vue</em>.
            </p>
            <p class="mb-0">
              I am passionate about design that is intuitive and satisfying for
              my users. I think a lot about using the right tool for the job and
              writing software that is maintainable and robust.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
