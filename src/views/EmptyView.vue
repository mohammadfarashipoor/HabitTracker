<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <main class="main">
    <!-- Event Empty -->
    <div class="main__empty-property empty-property">
      <img
        class="empty-property__image"
        src="@/assets/images/EmptyIllustration.png"
        alt=""
      />
      <h3 class="empty-property__no-property">{{ type }} ندارید.</h3>
      <span class="empty-property__plus-property"
        >برای ایجاد رویداد جدید، آیکون + را بزن</span
      >
    </div>
  </main>
</template>
<style></style>
