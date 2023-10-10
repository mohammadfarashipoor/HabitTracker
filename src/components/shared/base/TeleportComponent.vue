<script setup>
const props = defineProps({
  teleportTo: {
    type: String,
    default: "body",

  },
});
</script>
<template>
  <Teleport :to="teleportTo">
    <transition >
    <slot >

    </slot>
    </transition>
  </Teleport>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.75s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>