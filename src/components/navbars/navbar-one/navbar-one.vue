<template src="./navbar-one.html"></template>
<style lang="scss" src="./navbar-one.scss"></style>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { init, mobileMenu } from "./navbar-one";
import { getAll } from "@/services/categories/categories.services";
import { localizeObject } from "@/utils/helpers";

const objRendered = ref<any[]>([]);

onBeforeMount(async () => {
  const response = await getAll();
  if (!response.hasErrors)
    objRendered.value = localizeObject(response.data, "en");

  console.log(objRendered.value);
});

onMounted(() => {
  init();
  mobileMenu();
});
</script>
