<script setup>
import Labels from "@/components/filters/labels.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <section class="main__content-header">
    <div class="main__desktop-title desktop-title">
      <div class="desktop-title__back-link" @click="() => router.go(-1)">
        <img
          class="desktop-title__image"
          src="@/assets/images/icons/arrow-right.svg"
          alt=""
        />
      </div>
      <h3 class="desktop-title__title">{{ props.title }}</h3>
    </div>
    <!-- Labels -->
    <Labels />
  </section>
</template>
