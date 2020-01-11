<template>
  <div class="container px-2 px-sm-auto">
    <div class="row no-gutters hero-header-row justify-content-center">
      <div class="col-hero-text col-md-6 d-flex flex-column justify-content-center align-items-md-end text-center text-md-left my-4 mb-3 my-md-0">
        <div class="d-md-inline-block">
          <h1 class="text-white d-inline-block mr-auto">
            Curt Grimes
            <span class="sr-only">-</span>
            <span class="lead ml-md-1 mb-4 d-block mt-3 font-italic font-sans-serif text-secondary">
              Web developer
            </span>
          </h1>
          <!-- <div class="w-100"></div> -->

          <nav class="ml-md-1 mb-0">
            <nuxt-link to="/resume" class="btn btn-outline-secondary">Résumé</nuxt-link>
            <a href="#contact" class="btn btn-link text-secondary px-3">
              <span class="d-flex align-items-center">
                <span class="flex-shrink-0">Contact Me</span>
                <fa icon="chevron-right" fixed-width />
              </span>
            </a>
          </nav>
        </div>
      </div>
      <div class="col-9 col-md-5 col-headshot ml-md-n3" style="z-index:9">
        <!-- Use placeholder wrapper for image to preserve aspect ratio
        before image loads to prevent content shifting around as image loads. 
        Padding top is height / width * 100% of image.-->
        <picture class="d-block position-relative h-0" style="padding-top: calc(956 / 900 * 100%)">
          <source :srcset="require('~/assets/img/headshot.webp')" type="image/webp" />
          <source :srcset="require('~/assets/img/headshot.png')" type="image/png" />

          <img :src="require('~/assets/img/headshot.png')" class="position-absolute w-100 h-100" alt="Profile picture of Curt Grimes" style="pointer-events:none;top:0;left:0" />
        </picture>
      </div>
    </div>
  </div>
</template>
