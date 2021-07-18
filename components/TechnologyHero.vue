<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center mr-4 ml-md-4 mb-4"
    style="min-width:4rem"
  >
    <div style="min-height:4.5rem">
      <fa v-if="icon" :icon="icon" size="3x" /><img
        v-else-if="img"
        :src="img"
        alt=""
        style="height:3.5rem"
      />
    </div>
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    icon: Array,
    img: String
  }
};
</script>
