<template>
  <div class="border border-b-[.04em] border-black/[16%] rounded-lg py-5 pl-5">
    <!-- top row -->
    <div class="flex flex-col">
      <div class="flex h-16">
        <!-- title -->
        <div class="flex-auto">
          <div class="text-xl font-semibold">Sales Overview</div>
        </div>
        <!-- totals -->
        <div class="flex pr-6 space-x-4">
          <!-- total a -->
          <div>
            <div class="flex text-black/60 items-center space-x-1">
              <svg
                class="w-[6px] h-[7px]"
                viewBox="0 0 6 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3.5" r="3" fill="#696FFB" />
              </svg>
              <div>Total Revenue</div>
            </div>
            <div class="font-semibold">$ 50,345.67</div>
          </div>
          <!-- total b -->
          <div>
            <div class="flex text-black/60 items-center space-x-1">
              <svg
                class="w-[6px] h-[7px]"
                viewBox="0 0 6 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3.5" r="3" fill="#FF9E2B" />
              </svg>
              <div>Total Target</div>
            </div>
            <div class="font-semibold">$ 70,321.45</div>
          </div>
        </div>
      </div>
      <!-- graph -->
      <div class="h-72">
        <Line :data="data" :options="options" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

defineProps({
  dataSet: Array<Number>,
  labels: Array<String>,
});
const labels = [
  "Apr 2023",
  "May 2023",
  "Jun 2023",
  "Jul 2023",
  "Aug 2023",
  "Sep 2023",
  "Oct 2023",
  "Dec 2023",
  "Jan 2024",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Total Revenue",
      data: [21000, 21000, 20000, 19000, 22000, 20250, 10000, 15000, 19000],
      fill: false,
      borderColor: "#696FFB",
      tension: 0.1,
    },
    {
      label: "Total Target",
      data: [15000, 19000, 19000, 21000, 19500, 22000, 20500, 10000, 10000],
      fill: false,
      borderColor: "#FF9E2B",
      tension: 0.1,
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
<style lang=""></style>
