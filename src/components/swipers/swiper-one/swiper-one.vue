<template src="./swiper-one.html"></template>
<style lang="scss" src="./swiper-one.scss"></style>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import { randomString } from "@/utils/helpers";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const componentId = ref<string>(`c-${randomString()}`);

const swiper = ref<HTMLElement>(null);

onMounted(() => {
  swiper.value = document.querySelector(`#${componentId.value}`);

  new Swiper(swiper.value, {
    modules: [Autoplay],
    loop: true,
    autoplay: {
      delay: 2500,
    },
  });
});
</script>
