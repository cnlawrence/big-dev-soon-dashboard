<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
import TopNav from "./components/TopNav.vue";
import Dashboard from "./components/Dashboard.vue";
import { ref } from "vue";

const isDrawerOpen = ref(true);
</script>

<template>
  <div class="flex h-screen max-w-full">
    <div :class="isDrawerOpen ? 'basis-60' : 'basis-20'" class="flex-none">
      <Sidebar
        :class="isDrawerOpen ? 'w-60' : 'w-20'"
        :isDrawerOpen="isDrawerOpen"
        @toggle-drawer="isDrawerOpen = !isDrawerOpen"
      />
    </div>
    <!-- main -->
    <div class="flex-auto">
      <TopNav />
      <Dashboard />
    </div>
  </div>
</template>

<style scoped></style>
