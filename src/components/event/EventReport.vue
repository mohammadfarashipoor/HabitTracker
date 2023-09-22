<script setup>
const props = defineProps({ title: String, date: String });
</script>
<template>
  <div class="font-12 reporter__item-action">
    <div class="reporter__title reporter__title_state">
      <span class="reporter__title-text font-12">{{ title }}</span>
    </div>
    <span class="reporter__description font-12">{{ date }}</span>
  </div>
</template>
<style></style>
