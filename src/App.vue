<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

let getData = () => {
  return fetch("https://dummyjson.com/http/200")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getData();
</script>

<template>
  <HelloWorld msg="Vite + Vue + Tailwindcss ROBOTO" />
  <button class="bg-black text-white" @click="getData()">Get Data</button>
</template>

<style scoped></style>
