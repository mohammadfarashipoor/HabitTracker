<script setup>
const props = defineProps({
  icon: String,
});
const iconUrl = `/src/assets/images/icons/${props.icon}.svg`;
</script>
<template>
  <img :src="iconUrl" alt="" />
</template>

<style></style>
