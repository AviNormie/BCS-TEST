<script setup lang="ts">
const goals = [
  { name: "MacBook Pro", target: "$1,650", progress: 35 },
  { name: "New car", target: "$60,000", progress: 42 },
  { name: "New house", target: "$150,000", progress: 8 },
];
</script>

<template>
  <section class="panel min-h-[220px] p-4">
    <div class="flex items-start justify-between">
      <h3 class="text-xs font-bold">Saving goals</h3>
      <button class="icon-button !h-7 !w-7" aria-label="Open saving goals">
        <v-icon size="15">mdi-arrow-top-right</v-icon>
      </button>
    </div>
    <div class="mt-3 space-y-3.5">
      <div v-for="goal in goals" :key="goal.name">
        <div class="mb-1.5 flex items-center justify-between text-[9px]">
          <span class="font-semibold">{{ goal.name }}</span>
          <span class="font-semibold text-[var(--primary)]">{{ goal.target }}</span>
        </div>
        <div class="relative h-3 overflow-hidden rounded-full bg-[var(--primary-soft)]">
          <span class="block h-full rounded-full bg-[var(--primary)]" :style="{ width: `${goal.progress}%` }" />
          <span class="absolute inset-y-0 left-2 flex items-center text-[7px] font-bold text-white">{{ goal.progress }}%</span>
        </div>
      </div>
    </div>
  </section>
</template>
