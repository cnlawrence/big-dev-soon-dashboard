<script setup lang="ts">
defineProps({
  isDrawerOpen: Boolean,
  labelName: String,
});
</script>

<template>
  <li class="">
    <a
      href="#"
      :class="isDrawerOpen ? 'flex pl-2' : ''"
      class="text-black/60 rounded-md dark:text-white/60 hover:text-black dark:hover:text-white active:text-blue active:bg-blue/[24%] group"
    >
      <slot></slot>
      <div v-if="isDrawerOpen" class="ms-4 text-xl font-semibold">
        {{ labelName }}
      </div>
    </a>
  </li>
</template>

<style scoped></style>
