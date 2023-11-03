<template>
  <el-header class="bg-cyan-400">
    <el-row class="justify-between">
      <div class="grid-content ep-bg-purple mt-4">
        <LazyElButton type="warning" @click="goHome">Go home</LazyElButton>
      </div>
      <div class="grid-content ep-bg-purple mt-4">
        <LazyElButton type="warning" @click="goToCatalog">Catalog</LazyElButton>
        <LazyElButton type="warning" @click="goDetails">Detais</LazyElButton>
      </div>
    </el-row>
  </el-header>
</template>

<script lang="ts" setup>
const router = useRouter();

const goHome = () => {
  router.push({ path: "/" });
};
const goToCatalog = () => {
  router.push({ path: "/catalog" });
};
const goDetails = () => {
  router.push({ path: "/details" });
};
</script>
