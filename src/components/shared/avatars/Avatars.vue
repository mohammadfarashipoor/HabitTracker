<script setup>
const props = defineProps({
  images: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="avatars__avatars-container avatars-container">
    <div
      v-for="image in images.filter((image, index) => index < 5)"
      class="avatars-container__avatar-image avatar-image"
    >
      <img class="avatar-image__image" :src="image.imageSrc" />
    </div>
    <div
      v-if="images.length > 5"
      class="avatars-container__avatar-image avatar-image centralization"
    >
      {{ images.length - 5 }}+
    </div>
  </div>
</template>

<style></style>
