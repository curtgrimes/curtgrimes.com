<template>
  <section class="mb-5 bg-light">
    <div class="container">
      <div
        class="rounded rounded-xs-only-none rounded bg-white position-relative"
        style="top:-3rem;margin-bottom:-3rem;z-index:11"
      >
        <div class="row">
          <div
            class="col-md-9 mx-auto lead px-5 pt-4 px-sm-5 pb-0 bio-border-top"
          >
            <p>
              I am a full-stack software engineer. I work a lot with
              <em>React</em>, <em>Vue</em>, and <em>Node.js</em>.
            </p>
            <p class="mb-0">
              I am passionate about design that is intuitive and satisfying for
              users. It's important to use the right tool for the job and
              engineer solutions that are maintainable and robust.
            </p>
          </div>
        </div>
        <nav class="d-sm-flex justify-content-center p-4">
          <a
            href="https://github.com/curtgrimes"
            class="px-4 pb-3 pb-sm-0 d-block text-center"
          >
            <fa
              :icon="['fab', 'github']"
              fixed-width
              size="lg"
              alt="GitHub"
              class="mr-1"
            />GitHub
          </a>
          <nuxt-link to="/resume" class="px-4 pb-3 pb-sm-0 d-block text-center">
            Résumé
          </nuxt-link>
          <nuxt-link to="/music" class="px-4 pb-3 pb-sm-0 d-block text-center">
            Music
          </nuxt-link>
        </nav>
      </div>
    </div>
  </section>
</template>
