<template src="./navbar-one.html"></template>
<style lang="scss" src="./navbar-one.scss"></style>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { init, mobileMenu } from "./navbar-one";
import { getAll } from "@/services/categories/categories.services";
import { storeToRefs } from "pinia";
import { appStore } from "@/stores/app";
import { cloneObject } from "@/utils/helpers";
import { userStore } from "@/stores/user";

const { locale } = storeToRefs(appStore());
const { user } = storeToRefs(userStore());

const objRendered = ref<any[]>([]);
const objCart = ref<any>(user.value.client.cart);

onBeforeMount(async () => {
  console.log();
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
