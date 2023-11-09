<template>
  <div class="flex flex-wrap justify-center mt-20">
    <CardsFilmDetail
      v-for="(film, index) in films"
      :key="index"
      :film="film"
      is-details
    />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "is-has-films",
});
const { films } = useGetFilms();
</script>
