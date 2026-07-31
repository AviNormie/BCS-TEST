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
      <h3 class="text-sm font-extrabold">Saving goals</h3>
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
        <v-progress-linear
          :model-value="goal.progress"
          height="16"
          rounded="pill"
          color="var(--primary)"
          bg-color="var(--primary-soft)"
          class="overflow-hidden !text-[8px] !font-extrabold text-white"
        >
          <span v-if="goal.progress >= 20">{{ goal.progress }}%</span>
        </v-progress-linear>
      </div>
    </div>
  </section>
</template>
