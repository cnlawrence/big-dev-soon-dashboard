<script setup lang="ts">
import NumberCard from "./NumberCard.vue";
import SalesOverviewCard from "./SalesOverviewCard.vue";

let getData = async () => {
  const res = await fetch("https://dummyjson.com/http/200");
  const data = await res.json();
  return console.log(data);
};

getData();
</script>
<template>
  <!-- card row -->
  <div class="flex w-full px-8 pt-16 space-x-8">
    <NumberCard
      :title="'Total Income'"
      :number="'$ 33,328.12'"
      :compared-to-number="'12.24%'"
      :is-positive="true"
    />
    <NumberCard
      :title="'Profit'"
      :number="'$ 8,583.09'"
      :compared-to-number="'2.63'"
      :is-positive="false"
    />
    <NumberCard
      :title="'Total Views'"
      :number="'52.234.32'"
      :compared-to-number="'1.46%'"
      :is-positive="true"
    />
    <NumberCard
      :title="'Conversion rate'"
      :number="'6,12%'"
      :compared-to-number="'8,75'"
      :is-positive="true"
    />
  </div>
  <!-- card row -->
  <div class="flex w-full px-8 pt-8">
    <!-- sales overview card -->
    <SalesOverviewCard />
  </div>
</template>
<style scoped></style>
