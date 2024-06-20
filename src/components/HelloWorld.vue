<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1 class="text-3xl font-bold underline">{{ msg }} Bold</h1>
  <h1 class="text-3xl underline">{{ msg }}</h1>
  <div>
    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    <br />
    a b d e f g h i j k l m n o p q r s t u v w x y z
    <br />
    1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) _ +
  </div>
  <div class="text-[#FFD74B]">Yellow</div>
  <div class="text-yellow">Yellow</div>
  <div class="text-yellow-500">Yellow 500</div>
  <div class="text-orange">Orange</div>
  <div class="text-light-red">Light Red</div>
  <div class="text-dark-red">Dark Red</div>
  <div class="text-light-green">Light Green</div>
  <div class="text-dark-green">Dark Green</div>
  <div class="text-black">Black</div>
  <div class="text-black/60">Black 60%</div>
  <div class="text-black/[16%]">Black 16%</div>
  <div class="text-black/[4%]">Black 4%</div>
  <div class="text-blue">Blue</div>
  <div class="text-blue/60">Blue 60%</div>
  <div class="text-blue/[32%]">Blue 32%</div>
  <div class="text-blue/20">Blue 20%</div>
  <div class="text-blue/[12%]">Blue 12%</div>
  <div class="text-blue/[8%]">Blue 8%</div>
</template>

<style scoped></style>
