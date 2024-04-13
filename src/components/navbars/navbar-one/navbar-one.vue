<template src="./navbar-one.html"></template>
<style lang="scss" src="./navbar-one.scss"></style>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { init, mobileMenu } from "./navbar-one";
import { getAll } from "@/services/categories/categories.services";
import { localizeObj } from "@/utils/helpers";
import { storeToRefs } from "pinia";
import { appStore } from "@/stores/app";

const { locale } = storeToRefs(appStore());

const objRendered = ref<any[]>([]);

onBeforeMount(async () => {
  await get();
});

onMounted(() => {
  init();
  mobileMenu();
});

async function get() {
  const response = await getAll();
  if (!response.hasErrors) {
    objRendered.value = localizeObj(response.data, locale.value);
  }
}
</script>
