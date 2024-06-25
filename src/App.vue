<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
import TopNav from "./components/TopNav.vue";
import { ref } from "vue";

const isDrawerOpen = ref(true);
</script>

<template>
  <!-- class="grid grid-flow-row grid-cols-12" -->
  <div class="flex">
    <div :class="isDrawerOpen ? 'w-60' : 'w-20'" class="flex">
      <Sidebar
        :isDrawerOpen="isDrawerOpen"
        @toggle-drawer="isDrawerOpen = !isDrawerOpen"
      />
    </div>
    <!-- nav header -->
    <div class="flex-auto">
      <TopNav />
    </div>
  </div>
</template>

<style scoped></style>
