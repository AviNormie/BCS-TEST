<script setup lang="ts">
import Dashboard from "./components/dashboard/Dashboard.vue";
import Sidebar from "./components/layout/Sidebar.vue";
</script>

<template>
  <v-app class="app-shell">
    <div class="">
      <div class="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-[1600px] overflow-hidden bg-[var(--surface)] shadow-[0_28px_80px_color-mix(in_srgb,var(--primary)_24%,transparent)]">
        <Sidebar />
        <main class="min-w-0 flex-1 bg-[var(--surface)]">
          <Dashboard />
        </main>
      </div>
    </div>
  </v-app>
</template>