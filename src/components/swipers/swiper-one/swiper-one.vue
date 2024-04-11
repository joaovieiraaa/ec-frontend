<template src="./swiper-one.html"></template>
<style lang="scss" src="./swiper-one.scss"></style>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { randomString } from "@/utils/helpers";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const componentId = ref<string>(`c-${randomString()}`);

onMounted(() => {
  new Swiper(`#${componentId.value}`, {
    modules: [Autoplay],
    loop: true,
    autoplay: {
      delay: 2500,
    },
  });
});
</script>
