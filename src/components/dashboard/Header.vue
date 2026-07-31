<template>
  <header>
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 class="text-2xl font-extrabold tracking-tight sm:text-[28px]">Welcome back, Adaline!</h2>
        <p class="mt-0.5 text-xs text-[var(--muted)]">It is the best time to manage your finances</p>
      </div>
      <div class="flex items-center gap-2">
        <button class="icon-button" aria-label="Search">
          <v-icon size="19">mdi-magnify</v-icon>
        </button>
        <button class="icon-button relative" aria-label="Notifications">
          <v-icon size="19">mdi-bell-outline</v-icon>
          <span class="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-[var(--surface)] bg-[var(--primary)]" />
        </button>
        <button class="flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] p-1 pr-3 transition hover:border-[var(--primary)]">
          <span class="grid h-8 w-8 place-items-center rounded-full bg-[var(--primary-soft)] text-sm font-bold text-[var(--primary)]">A</span>
          <span class="hidden text-left sm:block">
            <span class="block text-[11px] font-bold leading-tight">Adaline Lively</span>
            <span class="block text-[8px] text-[var(--muted)]">adaline@email.com</span>
          </span>
          <v-icon size="14">mdi-chevron-down</v-icon>
        </button>
      </div>
    </div>
    <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
      <button class="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-2 text-[11px] font-semibold">
        <v-icon size="16">mdi-calendar-month-outline</v-icon>
        This month
      </button>
      <div class="flex items-center gap-2">
        <button class="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-2 text-[11px] font-semibold transition hover:border-[var(--primary)]">
          <v-icon size="16">mdi-view-grid-plus-outline</v-icon>
          Manage widgets
        </button>
        <button class="flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2.5 text-[11px] font-semibold text-white shadow-[0_10px_22px_color-mix(in_srgb,var(--primary)_28%,transparent)]">
          <v-icon size="15">mdi-plus</v-icon>
          Add new widget
        </button>
      </div>
    </div>
  </header>
</template>
