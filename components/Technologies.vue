<template>
  <section class="pb-5 bg-light">
    <div class="container">
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
              <fa v-if="technology.icon" :icon="technology.icon" size="sm" fixed-width />
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
  </section>
</template>

<script>
import skills from "~/data/skills";

export default {
  created() {
    this.technologies = skills.filter(s => s.includeInPorfolioSkills);
  }
};
</script>