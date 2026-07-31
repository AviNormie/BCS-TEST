import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const dark = ref(localStorage.getItem("theme") === "dark");

  watch(
    dark,
    (value) => {
      document.documentElement.classList.toggle("dark", value);
      localStorage.setItem("theme", value ? "dark" : "light");
    },
    { immediate: true }
  );

  function toggleTheme() {
    dark.value = !dark.value;
  }

  return {
    dark,
    toggleTheme,
  };
});