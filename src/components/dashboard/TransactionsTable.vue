<script setup lang="ts">
const transactions = [
  { date: "25 Jul 12:30", amount: "-$10", name: "YouTube", method: "VISA **3254", category: "Subscription", icon: "mdi-youtube" },
  { date: "26 Jul 15:00", amount: "-$150", name: "Reserved", method: "Mastercard **2154", category: "Shopping", icon: "mdi-minus" },
  { date: "27 Jul 9:00", amount: "-$80", name: "Yogashka", method: "Mastercard **2154", category: "Cafe & Restaurants", icon: "mdi-food-apple-outline" },
];
</script>

<template>
  <section class="panel min-h-[220px] overflow-hidden p-4">
    <div class="flex items-center justify-between">
      <h3 class="text-xs font-bold">Recent transactions</h3>
      <div class="flex items-center gap-2">
        <button class="rounded-full border border-[var(--line)] px-2.5 py-1.5 text-[9px]">All accounts⌄</button>
        <button class="rounded-full border border-[var(--line)] px-2.5 py-1.5 text-[9px]">See all <v-icon size="12">mdi-chevron-right</v-icon></button>
      </div>
    </div>
    <div class="mt-3 overflow-x-auto">
      <table class="w-full min-w-[560px] border-separate border-spacing-0 text-left text-[9px]">
        <thead>
          <tr class="bg-[var(--primary-soft)] text-[var(--primary)]">
            <th class="rounded-l-full px-3 py-2 font-semibold">DATE</th>
            <th class="px-3 py-2 font-semibold">AMOUNT</th>
            <th class="px-3 py-2 font-semibold">PAYMENT NAME</th>
            <th class="px-3 py-2 font-semibold">METHOD</th>
            <th class="rounded-r-full px-3 py-2 font-semibold">CATEGORY</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.date" class="border-b border-[var(--line)]">
            <td class="px-3 py-2.5">{{ transaction.date }}</td>
            <td class="px-3 py-2.5 font-bold">{{ transaction.amount }}</td>
            <td class="px-3 py-2.5">
              <span class="flex items-center gap-2 font-semibold">
                <v-icon size="15" color="var(--primary)">{{ transaction.icon }}</v-icon>
                {{ transaction.name }}
              </span>
            </td>
            <td class="px-3 py-2.5">{{ transaction.method }}</td>
            <td class="px-3 py-2.5">{{ transaction.category }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
