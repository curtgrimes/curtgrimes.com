<template>
  <div class="row no-gutters mb-3">
    <div
      class="col-pr-2 col-md-3 col-xl-2 small pr-4 d-flex d-md-block mb-2 mb-md-0 text-sm-right"
      v-if="$slots.dates || $slots.company || $slots.location"
    >
      <span v-if="$slots.company">
        <slot name="company"></slot>
      </span>
      <span class="ml-auto d-md-block text-right" v-if="$slots.dates || $slots.location">
        <span class="resume-dates d-md-block" v-if="$slots.dates">
          <slot name="dates"></slot>
        </span>
        <span class="d-md-none text-muted" v-if="$slots.dates && $slots.location">&middot;</span>
        <span class="resume-location d-md-block" style="white-space:nowrap" v-if="$slots.location">
          <slot name="location"></slot>
        </span>
      </span>
    </div>
    <div class="col-pr-10 col-md-9 col-xl-10 ml-auto">
      <h3 v-if="$slots.title">
        <slot name="title"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>
