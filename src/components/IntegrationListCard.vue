<script setup lang="ts">
import { ref } from "vue";
let integrations = ref([
  {
    imgUrl: "../assets/icons/stripe-icon.svg",
    application: "Stripe",
    type: "Finance",
    rate: "33%",
    profit: "$ 10,998.28",
  },
  {
    imgUrl: "../assets/icons/zapier-icon.svg",
    application: "Zapier",
    type: "CRM",
    rate: "27%",
    profit: "$ 8,998.59",
  },
  {
    imgUrl: "../assets/icons/shopify-icon.svg",
    application: "Shopify",
    type: "Marketplace",
    rate: "40%",
    profit: "$ 13,334.24",
  },
]);

const getImageUrl = (url: string) => {
  return new URL(url, import.meta.url).href;
};
</script>
<template>
  <div class="border border-b-[.04em] border-black/[16%] rounded-lg py-5 px-5">
    <div class="flex flex-col">
      <div class="h-10 text-xl font-semibold">List of Integrations</div>
      <div class="flex">
        <table
          class="min-w-full text-left font-light text-surface text-black/60"
        >
          <thead
            class="border-b border-neutral-200 bg-blue/[20%] rounded-lg font-medium dark:border-white/10"
          >
            <tr class="rounded-lg">
              <th scope="col" class="px-6 py-4">
                <input type="checkbox" name="allSelected" id="" />
              </th>
              <th scope="col" class="px-6 py-4">Application</th>
              <th scope="col" class="px-6 py-4">Type</th>
              <th scope="col" class="px-6 py-4">Rate</th>
              <th scope="col" class="px-6 py-4">Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(i, index) in integrations"
              :class="index === integrations.length - 1 ? '' : 'border-b-2'"
            >
              <td class="whitespace-nowrap px-6 py-4">
                <input type="checkbox" name="isSelected" id="" />
              </td>
              <td class="flex whitespace-nowrap px-6 py-4">
                <div><img :src="getImageUrl(i.imgUrl)" alt="" /></div>
                <div>{{ i.application }}</div>
              </td>
              <td class="whitespace-nowrap px-6 py-4">{{ i.type }}</td>
              <td class="whitespace-nowrap px-6 py-4">
                {{ i.rate }}
                <div
                  class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                >
                  <div
                    class="bg-blue h-2.5 rounded-full"
                    :class="`w-[${i.rate}]`"
                  ></div>
                </div>
              </td>
              <td class="whitespace-nowrap px-6 py-4">{{ i.profit }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style lang="" scoped></style>
