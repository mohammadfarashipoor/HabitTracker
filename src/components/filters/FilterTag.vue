<script setup>
const props = defineProps({
  element: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits();
function removeItem() {
  emit("removeItem", props.element);
}
</script>
<template>
  <div class="filter-item__filter-tag filter-tag">
    <small class="filter-tag__small">{{ element.name }}</small>
    <img
      class="filter-tag__image"
      src="@/assets/images/icons/close-circle1.svg"
      alt=""
      @click="removeItem"
    />
  </div>
</template>
<style></style>
