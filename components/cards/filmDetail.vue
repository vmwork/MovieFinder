<template>
  <div class="card-wrapper mb-4 flex border-4 rounded-md">
    <div class="card-poster p-4">
      <img :src="film.Poster" alt="" />
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
