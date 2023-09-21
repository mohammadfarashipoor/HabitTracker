<script setup>
import Loading from "vue-loading-overlay";
const props = defineProps({
  isLoading: { type: Boolean, required: true },
});
</script>
<template>
  <loading
    :width="100"
    :height="100"
    v-model:active="props.isLoading"
    :can-cancel="false"
    color="#5F9DFE"
  />
</template>
