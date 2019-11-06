<template>
  <div class="container">
    <div class="row no-gutters hero-header-row justify-content-center">
      <div
        class="col-md-6 d-flex flex-column justify-content-center align-items-md-end ml-md-3 text-center text-md-left mt-5 mb-3 my-md-0"
        style="z-index:10;top:-1.5rem;min-height: 20rem;"
      >
        <div class="d-inline-block">
          <h1 class="text-white d-inline-block mr-auto">Curt Grimes</h1>
          <div class="w-100"></div>
          <p class="lead ml-md-1 mb-4 d-inline-block font-italic">Web developer in northern Illinois</p>
          <p class="ml-md-1 mb-0">
            <nuxt-link to="/resume" class="btn btn-outline-secondary">Résumé</nuxt-link>
            <a href="#contact" class="btn btn-link text-secondary">
              <span class="d-flex align-items-center">
                Contact Me
                <fa icon="chevron-right" fixed-width />
              </span>
            </a>
          </p>
        </div>
      </div>
      <div
        class="col-9 col-md-5 col-headshot d-flex align-items-end justify-content-start ml-md-n3"
        style="z-index:9"
      >
        <picture>
          <source :srcset="require('~/assets/img/headshot.webp')" type="image/webp" />
          <source :srcset="require('~/assets/img/headshot.png')" type="image/png" />
          <img :src="require('~/assets/img/headshot.png')" class="img-fluid w-100" alt />
        </picture>
      </div>
    </div>
  </div>
</template>

