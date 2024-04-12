<template src="./swiper-products-one.html"></template>
<style lang="scss" src="./swiper-products-one.scss"></style>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import { Scrollbar } from "swiper/modules";
import { randomString } from "@/utils/helpers";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/scrollbar";

const componentId = ref<string>(`c-${randomString()}`);
const swiper = ref<HTMLElement>(null);

onMounted(() => {
  swiper.value = document.querySelector(`#${componentId.value}`);

  new Swiper(swiper.value, {
    modules: [Scrollbar],
    loop: true,
    direction: "horizontal",
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
});
</script>
