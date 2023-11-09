<template>
  <div
    class="card mb-4 flex border-4 rounded-md"
    :class="{ 'card-wrapper': isDetails }"
  >
    <div class="p-4">
      <img class="card-poster p-4" :src="film.Poster" alt="" />
    </div>
    <div class="card-description p-4">
      <div class="p-2 font-bold">{{ film.Title }}</div>
      <div class="p-2">{{ film.Year }}</div>
      <div class="p-2">{{ film.Director }}</div>
      <div v-if="isDetails">
        <div class="p-2">{{ film.Plot }}</div>
        <div class="p-2">{{ film.Released }}</div>
        <div class="p-2">{{ film.Runtime }}</div>
        <div class="p-2">{{ film.Genre }}</div>
        <div class="p-2">{{ film.Writer }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  isDetails: {
    type: Boolean,
    required: false,
  },
  film: {
    type: Array,
    default: () => [],
  },
});
const { isDetails } = props;
const { film } = props;
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 60%;
}
.card {
  min-height: 600px;
}
</style>
