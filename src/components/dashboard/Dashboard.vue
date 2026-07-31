<script setup lang="ts">
import Header from "./Header.vue";
import StatCard from "./StatCard.vue";
import MoneyFlowChart from "./MoneyFlowChart.vue";
import BudgetCard from "./BudgetCard.vue";
import TransactionsTable from "./TransactionsTable.vue";
import SavingsGoals from "./SavingsGoals.vue";
</script>

<template>
  <div class="min-h-full bg-[var(--surface)] p-4 text-[var(--ink)] transition-colors duration-300 sm:p-5 lg:p-7">
    <Header />
    <div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard title="Total Balance" amount="$15,700.00" change="+12.1%" positive />
      <StatCard title="Income" amount="$8,500.00" change="+6.3%" positive />
      <StatCard title="Expense" amount="$6,222.00" change="-2.4%" :positive="false" />
      <StatCard title="Total Savings" amount="$32,913.00" change="+12.1%" positive />
    </div>
    <div class="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-12">
      <MoneyFlowChart class="xl:col-span-8" />
      <BudgetCard class="xl:col-span-4" />
    </div>
    <div class="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-12">
      <TransactionsTable class="xl:col-span-8" />
      <SavingsGoals class="xl:col-span-4" />
    </div>
  </div>
</template>
