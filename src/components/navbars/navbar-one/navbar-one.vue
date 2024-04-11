<template src="./navbar-one.html"></template>
<style lang="scss" src="./navbar-one.scss"></style>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const body = document.body;
  const searchWrapper = body.querySelector(".header-search-wrapper");
  const searchToggle = body.querySelector(".search-toggle");
  const inputField = searchWrapper.querySelector("input");

  const toggleSearch = (e: any) => {
    searchWrapper.classList.toggle("show");
    searchToggle.classList.toggle("active");
    inputField.focus();
    e.preventDefault();
    e.stopPropagation();
  };

  const hideSearch = () => {
    searchWrapper.classList.remove("show");
    searchToggle.classList.remove("active");
    body.classList.remove("is-search-active");
  };

  searchToggle.addEventListener("click", toggleSearch);

  body.addEventListener("click", () => {
    if (searchWrapper.classList.contains("show")) {
      hideSearch();
    }
  });

  searchWrapper.addEventListener("click", (e: any) => {
    e.stopPropagation();
  });
});
</script>
