<template src="./app.html"></template>

<script setup lang="ts">
import { appStore } from "@/stores/app";
import { storeToRefs } from "pinia";
import { computed, defineAsyncComponent } from "vue";

const { theme } = storeToRefs(appStore());

const currentTheme = computed(() => {
  return defineAsyncComponent(
    () => import(`@/layouts/${theme.value}/${theme.value}.vue`)
  );
});
</script>
