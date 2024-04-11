<template src="./swiper-products-one.html"></template>
<style lang="scss" src="./swiper-products-one.scss"></style>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { randomString } from "@/utils/helpers";

const componentId = ref<string>(`c-${randomString()}`);

onMounted(() => {
  console.log("moutend");
  new Swiper(`#${componentId.value}`, {
    modules: [Pagination],
    loop: true,
    slidesPerView: 4,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
});
</script>
