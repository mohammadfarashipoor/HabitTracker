<script setup>
import { ref, onMounted, reactive } from "vue";
import BaseLoading from "@/components/shared/base/BaseLoading.vue";
import { homeStore } from "@/stores/home";
const store = homeStore();
const dateFilterActive = ref(4);
const loadingState = reactive({
  isLoading: false,
});
onMounted(async () => {
  loadingState.isLoading = true;
  await store.yearFilter();
  loadingState.isLoading = false;
});
</script>
<template>
  <div class="plan__filters-time filters-time">
    <p
      :key="1"
      class="font-12 filters-time__item"
      :class="{
        'filters-time__item_active': dateFilterActive === 1,
      }"
      @click="
        () => {
          store.dayFilter();
          dateFilterActive = 1;
        }
      "
    >
      روزانه
    </p>
    <p
      :key="2"
      class="font-12 filters-time__item"
      :class="{
        'filters-time__item_active': dateFilterActive === 2,
      }"
      @click="
        () => {
          store.monthFilter();
          dateFilterActive = 2;
        }
      "
    >
      هفتگی
    </p>
    <p
      :key="3"
      class="font-12 filters-time__item"
      :class="{
        'filters-time__item_active': dateFilterActive === 3,
      }"
      @click="
        () => {
          store.weekFilter();
          dateFilterActive = 3;
        }
      "
    >
      ماهانه
    </p>
    <p
      :key="4"
      class="font-12 filters-time__item"
      :class="{
        'filters-time__item_active': dateFilterActive === 4,
      }"
      @click="
        () => {
          store.yearFilter();
          dateFilterActive = 4;
        }
      "
    >
      سالانه
    </p>
    <BaseLoading :isLoading="loadingState.isLoading" />
  </div>
</template>
<style></style>
