<script setup>
import MobileHeader from "@/components/shared/base/MobileHeader.vue";
import BaseIcon from "@/components/shared/base/BaseIcon.vue";

import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  action: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <MobileHeader>
    <template #title>
      <div class="mobile-header__title-container title-container">
        <div class="title-container__back-link" @click="() => router.go(-1)">
          <img
            class="title-container__image"
            src="@/assets/images/icons/arrow-right.svg"
            alt="arrow-right"
          />
        </div>
        <h3 class="title-container__title">{{ action }}</h3>
      </div></template
    >
    <template #action>
      <BaseIcon class="modify-action__image" v-if="icon" :icon="props.icon" />
    </template>
  </MobileHeader>
</template>

<style></style>
