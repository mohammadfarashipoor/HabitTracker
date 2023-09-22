<script setup>
import { ref } from "vue";

const themeToggle = ref();

const changeTheme = () => {
  const navToggle = document.getElementsByClassName("nav-toggle")[0];
  navToggle.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23${
    themeToggle.value ? "ffff" : "222222"
  }'%3E%3Cpath d='M99,0A36.33,36.33,0,0,0,70,15,25,25,0,0,1,30,15,36.33,36.33,0,0,0,1,0H0V50H100V0Z'/%3E%3C/svg%3E")`;
  if (!themeToggle.value) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
</script>
<template>
  <div class="mobile-header">
    <div class="mobile-header__title-container title-container">
      <slot name="title"></slot>
    </div>
    <footer class="mobile-header__title-container title-container">
      <input
        class="toggle action-container__input"
        type="checkbox"
        id="theme-toggle"
        v-model="themeToggle"
        @click="changeTheme"
      />
      <div class="action-container__modify-action modify-action">
        <slot name="action"></slot>
      </div>
    </footer>
  </div>
</template>
