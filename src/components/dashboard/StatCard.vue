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
      <h3 class="text-xs font-bold">{{ title }}</h3>
      <button class="icon-button !h-7 !w-7" :aria-label="`Open ${title}`">
        <v-icon size="15">mdi-arrow-top-right</v-icon>
      </button>
    </div>
    <p class="mt-4 truncate text-2xl font-extrabold tracking-tight">{{ amount }}</p>
    <div class="mt-3 flex items-center gap-2 text-[9px]">
      <span
        class="rounded-full px-2 py-1 font-bold"
        :class="positive ? 'bg-[var(--primary-soft)] text-[var(--primary)]' : 'bg-[var(--primary-soft)] text-[var(--ink)]'"
      >
        {{ change }}
      </span>
      <span class="text-[var(--muted)]">vs last month</span>
    </div>
  </article>
</template>
