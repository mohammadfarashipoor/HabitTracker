<script setup>
import FilterSelector from "@/components/filters/FilterSelector.vue";
import { useState } from "@/composables/state.js";

const [filterSelectorState, setFilterSelectorState] = useState(false);
</script>
<template>
  <div class="main__labels labels">
    <div
      class="labels__label-item label-item"
      @click="() => setFilterSelectorState(!filterSelectorState)"
    >
      <img
        class="label-item__image"
        src="@/assets/images/icons/filter.svg"
        alt=""
      />
      <span class="label-item__span">فیلتر ها</span>
    </div>
    <div class="labels__label-item label-item">
      <img
        class="label-item__image"
        src="@/assets/images/icons/calendar1.svg"
        alt=""
      />
      <span class="label-item__span">تاریخ</span>
    </div>
    <div class="labels__label-item label-item">
      <img
        class="label-item__image"
        src="@/assets/images/icons/frame.svg"
        alt=""
      />
      <span class="label-item__span">افراد</span>
    </div>
  </div>
  <Teleport to="body">
    <FilterSelector
      v-if="filterSelectorState"
      :setFilterSelectorState="setFilterSelectorState"
      :filterSelectorState="filterSelectorState"
  /></Teleport>
</template>
