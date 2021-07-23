<template>
  <div class="row no-gutters mb-3">
    <div
      class="col-pr-2 d-none d-md-block col-md-2 col-xl-2 small text-right pr-4"
      v-if="$slots.dates || $slots.company || $slots.location"
    >
      <span v-if="$slots.company" class="font-italic">
        <slot name="company"></slot>
      </span>
      <span
        class="ml-auto d-md-block text-right text-muted"
        v-if="$slots.dates || $slots.location"
      >
        <span
          class="resume-location d-md-block pl-2 pl-sm-0"
          style="white-space:nowrap"
          v-if="$slots.location"
        >
          <slot name="location"></slot>
        </span>
        <span class="d-md-none align-top" v-if="$slots.dates && $slots.location"
          >&middot;</span
        >
        <span class="resume-dates d-md-block" v-if="$slots.dates">
          <slot name="dates"></slot>
        </span>
      </span>
    </div>
    <div class="col-pr-10 col-md-10 col-xl-10 ml-auto">
      <h3 v-if="$slots.title" class="mb-1 mb-md-2">
        <slot name="title"></slot>
      </h3>
      <div class="d-flex d-md-none small mb-1 flex-wrap flex-sm-nowrap">
        <span v-if="$slots.company" class="font-italic">
          <slot name="company"></slot>
        </span>
        <span class="d-block d-sm-none w-100"></span>
        <span
          class="ml-sm-auto d-md-block text-sm-right text-muted"
          v-if="$slots.dates || $slots.location"
        >
          <span
            class="resume-location d-md-block"
            style="white-space:nowrap"
            v-if="$slots.location"
          >
            <slot name="location"></slot>
          </span>
          <span class="d-md-none" v-if="$slots.dates && $slots.location"
            >&middot;</span
          >
          <span class="resume-dates d-md-block" v-if="$slots.dates">
            <slot name="dates"></slot>
          </span>
        </span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
