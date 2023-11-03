<template>
  <div class="flex justify-center mt-20">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :width="400"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide>
        <CardsFilmDetail
          v-for="(film, index) in films"
          :key="index"
          :film="film"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "is-has-films",
});
const { films } = useGetFilms();
</script>

<style lang="scss" scoped>
.swiper-slide {
  width: 80%;
}
</style>
