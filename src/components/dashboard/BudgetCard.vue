<script setup lang="ts">
const categories = [
  "Cafe & Restaurants",
  "Entertainment",
  "Investments",
  "Food & Groceries",
  "Health & Beauty",
  "Traveling",
];
</script>

<template>
  <section class="panel min-h-[245px] p-4">
    <div class="flex items-start justify-between">
      <h3 class="text-xs font-bold">Budget</h3>
      <button class="icon-button !h-7 !w-7" aria-label="Open budget">
        <v-icon size="15">mdi-arrow-top-right</v-icon>
      </button>
    </div>
    <div class="mt-3 flex items-center justify-between gap-3">
      <ul class="space-y-2 text-[9px]">
        <li v-for="(category, index) in categories" :key="category" class="flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-[var(--primary)]" :style="{ opacity: 1 - index * 0.12 }" />
          <span>{{ category }}</span>
        </li>
      </ul>
      <div class="relative h-32 w-32 shrink-0">
        <svg viewBox="0 0 120 120" class="-rotate-90">
          <circle cx="60" cy="60" r="46" fill="none" stroke="var(--primary-soft)" stroke-width="10" />
          <circle cx="60" cy="60" r="46" fill="none" stroke="var(--primary)" stroke-linecap="round" stroke-width="10" stroke-dasharray="210 290" />
        </svg>
        <div class="absolute inset-0 grid place-content-center text-center">
          <span class="text-[8px] text-[var(--muted)]">Spend this month</span>
          <strong class="text-sm">$5,950.00</strong>
        </div>
        <span class="absolute -top-1 left-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-2 py-1 text-[8px]">7%<br><b>$400</b></span>
      </div>
    </div>
  </section>
</template>
