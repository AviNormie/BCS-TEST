<template>
  <header>
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 class="text-2xl font-extrabold tracking-tight sm:text-[28px]">Welcome back, Aasha!</h2>
        <p class="mt-0.5 text-xs text-[var(--muted)]">It is the best time to manage your finances</p>
      </div>
      <div class="flex items-center gap-2">
        <v-btn icon variant="outlined" size="small" class="!border-[var(--line)] !text-[var(--ink)]" aria-label="Search">
          <v-icon size="19">mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon variant="outlined" size="small" class="relative !border-[var(--line)] !text-[var(--ink)]" aria-label="Notifications">
          <v-icon size="19">mdi-bell-outline</v-icon>
          <span class="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-[var(--surface)] bg-[var(--primary)]" />
        </v-btn>
        <v-btn rounded="pill" variant="outlined" class="!h-10 !border-[var(--line)] !bg-[var(--surface)] !p-1 !pr-3 !text-[var(--ink)]">
          <span class="grid h-8 w-8 place-items-center rounded-full bg-[var(--primary-soft)] text-sm font-bold text-[var(--primary)]">A</span>
          <span class="hidden text-left sm:block">
            <span class="block text-[11px] font-bold leading-tight">Aasha</span>
            <span class="block text-[8px] text-[var(--muted)]">aasha@email.com</span>
          </span>
          <v-icon size="14">mdi-chevron-down</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <v-btn icon variant="outlined" size="small" class="!border-[var(--line)] !text-[var(--ink)]" aria-label="Calendar">
          <v-icon size="17">mdi-calendar-month-outline</v-icon>
        </v-btn>
        <v-btn rounded="pill" variant="outlined" size="small" class="!border-[var(--line)] !px-4 !text-[11px] !font-bold !normal-case !text-[var(--ink)]">This month</v-btn>
      </div>
      <div class="flex items-center gap-2">
        <v-btn icon variant="outlined" size="small" class="!border-[var(--line)] !text-[var(--ink)]" aria-label="Manage widgets">
          <v-icon size="16">mdi-view-grid-plus-outline</v-icon>
        </v-btn>
        <v-btn rounded="pill" variant="outlined" size="small" class="!border-[var(--line)] !px-4 !text-[11px] !font-bold !normal-case !text-[var(--ink)]">Manage widgets</v-btn>
        <v-btn rounded="pill" elevation="0" size="small" class="!h-10 !bg-[var(--primary)] !px-4 !text-[11px] !font-bold !normal-case !text-white">
          <v-icon size="15">mdi-plus</v-icon>
          Add new widget
        </v-btn>
      </div>
    </div>
  </header>
</template>
