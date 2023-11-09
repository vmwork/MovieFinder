<template>
  <div>
    <div class="flex justify-center">
      <el-input
        v-model="input"
        class="p-20 max-w-5xl"
        placeholder="Search"
        @keyup.enter="getFilms(input)"
      />
    </div>
    <span class="flex justify-center">{{ errorInput }}</span>
    <span v-if="films.Response === 'False'" class="flex justify-center">{{
      films.Error
    }}</span>

    <div class="flex justify-center">
      <LazyElButton class="m-10" type="warning" @click="getFilms(input)">
        Search
      </LazyElButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const input = ref("");

const { films, errorInput, getFilms } = useGetFilms();
</script>
