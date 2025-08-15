<template src="./navbar-one.html"></template>
<style lang="scss" src="./navbar-one.scss"></style>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { init, mobileMenu } from "./navbar-one";
import { getAll } from "@/services/categories/categories.services";
import { storeToRefs } from "pinia";
import { appStore } from "@/stores/app";
import { cloneObject } from "@/utils/helpers";

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
  const response = await getAll({ images: false });

  if (!response.hasErrors) {
    objRendered.value = cloneObject(response.data);
  }
}
</script>
