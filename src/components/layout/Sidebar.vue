<script setup lang="ts">
import { ref } from "vue";
import Logo from "./Logo.vue";
import { useThemeStore } from "../../stores/theme";

const theme = useThemeStore();
const active = ref("Dashboard");
const menu = [
  { title: "Dashboard", icon: "mdi-view-dashboard-outline" },
  { title: "Transactions", icon: "mdi-swap-horizontal" },
  { title: "Wallet", icon: "mdi-wallet-outline" },
  { title: "Goals", icon: "mdi-target" },
  { title: "Budget", icon: "mdi-cash-multiple" },
  { title: "Analytics", icon: "mdi-chart-line" },
  { title: "Settings", icon: "mdi-cog-outline" },
];
const bottomMenu = [
  { title: "Help", icon: "mdi-help-circle-outline" },
  { title: "Log out", icon: "mdi-logout" },
];
</script>

<template>
  <aside class="relative hidden w-[clamp(155px,17vw,230px)] shrink-0 flex-col border-r border-[var(--line)] bg-[var(--page)] transition-colors duration-300 sm:flex">
      <div class="relative px-5 pb-8 pt-7 lg:px-6">
        <Logo />
        <button class="icon-button absolute -right-[15px] top-10 !h-[30px] !w-[30px]" aria-label="Collapse sidebar">
          <v-icon size="16">mdi-chevron-left</v-icon>
        </button>
      </div>

      <nav class="space-y-1 px-3 lg:px-4">
        <button
          v-for="item in menu"
          :key="item.title"
          @click="active = item.title"
          :class="[
            'flex w-full items-center gap-3 rounded-full px-3 py-2.5 text-left text-[13px] font-medium transition-all duration-200 lg:px-4',
            active === item.title
              ? 'bg-[var(--primary)] text-white shadow-[0_9px_22px_color-mix(in_srgb,var(--primary)_28%,transparent)]'
              : 'text-[var(--ink)] hover:bg-[var(--primary-soft)]'
          ]"
        >
          <v-icon size="18" :color="active === item.title ? 'white' : 'var(--ink)'">{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
        </button>
      </nav>

      <div class="flex-1" />
      <div class="space-y-1 px-3 lg:px-4">
        <button
          v-for="item in bottomMenu"
          :key="item.title"
          class="flex w-full items-center gap-3 rounded-full px-3 py-2.5 text-[13px] font-medium text-[var(--ink)] transition hover:bg-[var(--primary-soft)] lg:px-4"
        >
          <v-icon size="18" color="var(--ink)">{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
        </button>
      </div>

      <div class="p-5 lg:p-6">
        <button
          @click="theme.toggleTheme()"
          class="flex rounded-full border border-[var(--line)] bg-[var(--surface)] p-1 transition"
          aria-label="Toggle color theme"
        >
          <div
            :class="[
              'flex h-8 w-8 items-center justify-center rounded-full transition-all',
              !theme.dark
                ? 'bg-[var(--primary)] text-white shadow'
                : 'text-[var(--muted)]'
            ]"
          >
            <v-icon size="17">mdi-white-balance-sunny</v-icon>
          </div>
          <div
            :class="[
              'flex h-8 w-8 items-center justify-center rounded-full transition-all',
              theme.dark
                ? 'bg-[var(--primary)] text-white shadow'
                : 'text-[var(--muted)]'
            ]"
          >
            <v-icon size="17">mdi-weather-night</v-icon>
          </div>
        </button>
      </div>
  </aside>
</template>