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

  mobileMenu();
});
function mobileMenu(): void {
  const mobileMenuToggler = document.querySelector(".mobile-menu-toggler");
  const mobileMenuOverlayClose = document.querySelectorAll(
    ".mobile-menu-overlay, .mobile-menu-close"
  );
  const menuToggler = document.querySelector(".menu-toggler");

  mobileMenuToggler.addEventListener("click", function (e) {
    document.body.classList.toggle("mmenu-active");
    this.classList.toggle("active");
    e.preventDefault();
  });

  mobileMenuOverlayClose.forEach(function (element) {
    element.addEventListener("click", function (e) {
      document.body.classList.remove("mmenu-active");
      if (menuToggler) {
        menuToggler.classList.remove("active");
      }
      e.preventDefault();
    });
  });

  // Add Mobile menu icon arrows to items with children
  document.querySelectorAll(".mobile-menu li").forEach(function (item) {
    if (item.querySelector("ul")) {
      const mmenuBtn = document.createElement("span");
      mmenuBtn.classList.add("mmenu-btn");
      item.querySelector("a").appendChild(mmenuBtn);
    }
  });

  // Mobile Menu toggle children menu (using event delegation)
  document
    .querySelector(".mobile-menu")
    .addEventListener("click", function (e) {
      const target = e.target as HTMLElement;
      if (target.classList.contains("mmenu-btn")) {
        const parent = target.closest("li");
        const targetUl = parent.querySelector("ul");

        if (targetUl && !parent.classList.contains("open")) {
          targetUl.style.display = "block";
          parent.classList.add("open");
        } else if (targetUl && parent.classList.contains("open")) {
          targetUl.style.display = "none";
          parent.classList.remove("open");
        }

        e.stopPropagation();
        e.preventDefault();
      }
    });
}
</script>
