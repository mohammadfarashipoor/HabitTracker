<script setup>
import BaseIcon from "@/components/shared/base/BaseIcon.vue";
const props = defineProps({ title: String, icon: String, value: String });
</script>
<template>
  <div class="setting__input-component input-component">
    <div
      class="input-component__texticona texticona input-component__texticona_right"
    >
      <BaseIcon class="texticona__icon" :icon="icon" />

      <div class="texticona__text-link">
        <p class="texticona__label font-14">{{ title }}</p>
      </div>
    </div>
    <div
      class="input-component__texticona texticona input-component__texticona_left"
    >
      <p class="texticona__text font-14">{{ value }}</p>
      <img
        class="texticona__icon icon-color"
        src="@/assets/images/icons/arrow-left1.svg"
      />
    </div>
  </div>
</template>
<style></style>
