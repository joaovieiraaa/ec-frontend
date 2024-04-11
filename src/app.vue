<template src="./app.html"></template>

<script setup lang="ts">
import { appStore } from "@/stores/app";
import { storeToRefs } from "pinia";
import { computed, defineAsyncComponent } from "vue";

const { storeName, routeView } = storeToRefs(appStore());

const currentView = computed(() => {
  return defineAsyncComponent(
    () =>
      import(
        `@/templates/${storeName.value}/${routeView.value}/${routeView.value}.vue`
      )
  );
});
</script>
