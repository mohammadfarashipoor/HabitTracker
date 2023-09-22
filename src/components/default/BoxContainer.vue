<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="home-content__component-card component-card">
    <div class="component-card__header-component header-component">
      <b class="header-component__title font-16">{{ title }}</b>
      <router-link
        :to="path"
        class="header-component__archive header-component__archive_hidden archive font-12"
      >
        <span class="archive__text">همه</span>
        <img
          class="archive__icon"
          src="@/assets/images/icons/arrow-archive.svg"
        />
      </router-link>
    </div>
    <div class="component-card__body-component body-component">
      <slot name="content"> </slot>
    </div>
  </div>
</template>

<style></style>
