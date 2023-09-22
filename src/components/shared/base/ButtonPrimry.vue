<script setup>
const emit = defineEmits();
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
function onClick() {
  emit("onClick");
}
</script>

<template>
  <button @click="onClick">
    {{ text }}
  </button>
</template>
