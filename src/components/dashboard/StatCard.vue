<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    amount: string;
    change: string;
    positive?: boolean;
  }>(),
  { positive: true },
);
</script>

<template>
  <article class="panel min-w-0 p-4">
    <div class="flex items-start justify-between">
      <h3 class="text-sm font-extrabold">{{ title }}</h3>
      <button class="icon-button !h-7 !w-7" :aria-label="`Open ${title}`">
        <v-icon size="15">mdi-arrow-top-right</v-icon>
      </button>
    </div>
    <p class="mt-4 truncate text-2xl font-extrabold tracking-tight">{{ amount }}</p>
    <div class="mt-3 flex items-center gap-2 text-[10px]">
      <v-chip
        size="x-small"
        class="!h-6 !font-extrabold px-1"
        :style="{
          backgroundColor: positive ? 'var(--profit-soft)' : 'var(--loss-soft)',
          color: positive ? 'var(--profit)' : 'var(--loss)',
        }"
      >
        <v-icon start size="12">{{ positive ? "mdi-arrow-up" : "mdi-arrow-down" }}</v-icon>
        {{ change }}
      </v-chip>
      <span class="text-[var(--muted)]">vs last month</span>
    </div>
  </article>
</template>
