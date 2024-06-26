<script setup lang="ts">
import colors from "tailwindcss/colors";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
import { Radar } from "vue-chartjs";

const data = {
  labels: ["Asia", "Europe", "America", "Africa", "Middle East", "Pacific"],
  datasets: [
    {
      label: "Sales by Region",
      backgroundColor: "rgba(54, 162, 235, 0.3)",
      borderColor: colors.blue["800"],
      pointBackgroundColor: colors.blue["800"],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: [2201, 2865, 1762, 1591, 1749, 2475],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
<template>
  <div class="border border-b-[.04em] border-black/[16%] rounded-lg py-5 pl-5">
    <div class="flex flex-col">
      <div class="h-10 text-xl font-semibold">Sales by Region</div>
      <div class="min-h-80">
        <Radar :data="data" :options="options" />
      </div>
    </div>
  </div>
</template>
<style lang="" scoped></style>
