<template>
  <div>
    <hero-header />
    <div class="bg-light">
      <div class="container">
        <div class="row rounded bg-white position-relative" style="top:-3rem;z-index:11">
          <div class="col-md-9 mx-auto lead p-5">
            <p>
              I am a full-stack web developer living in the northern Illinois area.
              I work in
              <em>JavaScript</em>,
              <em>Node.js</em> and
              <em>Vue</em>. My latest project is
              <a href="#">Web Captioner</a>, a speech-to-text
              service.
            </p>
            <p>
              I am passionate about design that is intuitive and satisfying for my users. I think a lot
              about using the right tool for the job and how to write software that is maintainable and robust.
            </p>
            <p class="mb-0">
              I am currently a web developer and do marketing communications work at
              <a
                href="https://niu.edu"
              >Northern Illinois University</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroHeader from "~/components/HeroHeader.vue";

export default {
  components: {
    HeroHeader
  }
};
</script>

<style>
</style>
