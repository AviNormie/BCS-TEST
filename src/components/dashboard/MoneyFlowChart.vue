<script setup lang="ts">
const months = [
  { label: "Jan", income: 54, expense: 47 },
  { label: "Feb", income: 66, expense: 75 },
  { label: "Mar", income: 60, expense: 58, value: "$10,000" },
  { label: "Apr", income: 84, expense: 78 },
  { label: "May", income: 79, expense: 76 },
  { label: "Jun", income: 43, expense: 35 },
  { label: "Jul", income: 49, expense: 40 },
];
</script>

<template>
  <section class="panel flex min-h-[245px] flex-col p-4">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h3 class="text-xs font-bold">Money flow</h3>
      <div class="flex flex-wrap items-center gap-3 text-[9px] text-[var(--muted)]">
        <span class="flex items-center gap-1.5"><i class="h-2 w-2 rounded-full bg-[var(--primary)]" />Income</span>
        <span class="flex items-center gap-1.5"><i class="h-2 w-2 rounded-full bg-[var(--primary-soft)]" />Expense</span>
        <button class="rounded-full border border-[var(--line)] px-2.5 py-1.5 text-[var(--ink)]">All accounts⌄</button>
        <button class="rounded-full border border-[var(--line)] px-2.5 py-1.5 text-[var(--ink)]">This year⌄</button>
      </div>
    </div>
    <div class="mt-5 flex min-h-0 flex-1 gap-3">
      <div class="flex h-[150px] flex-col justify-between pb-5 text-[8px] text-[var(--muted)]">
        <span>$15,000</span>
        <span>$10,000</span>
        <span>$5,000</span>
        <span>$0</span>
      </div>
      <div class="relative grid flex-1 grid-cols-7 gap-2 border-b border-[var(--line)]">
        <span class="absolute inset-x-0 top-0 border-t border-dashed border-[var(--line)]" />
        <span class="absolute inset-x-0 top-1/3 border-t border-dashed border-[var(--line)]" />
        <span class="absolute inset-x-0 top-2/3 border-t border-dashed border-[var(--line)]" />
        <div v-for="month in months" :key="month.label" class="relative z-10 flex h-[150px] min-w-0 items-end justify-center gap-1 pb-5">
          <span v-if="month.value" class="absolute top-0 rounded-full border border-[var(--line)] bg-[var(--surface)] px-2 py-1 text-[8px] font-bold">{{ month.value }}</span>
          <span class="w-3 rounded-t-full bg-[var(--primary)]" :style="{ height: `${month.income}%` }" />
          <span class="w-3 rounded-t-full bg-[var(--primary-soft)]" :style="{ height: `${month.expense}%` }" />
          <span class="absolute bottom-0 text-[8px] text-[var(--muted)]">{{ month.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
