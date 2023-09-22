<script setup>
import { homeStore } from "@/stores/home";
import { ref } from "vue";
const homestore = homeStore();
const rankClasses = ref([
  "rank-report__bar_first",
  "rank-report__bar_second",
  "rank-report__bar_third",
]);
</script>

<template>
  <div class="top-ranking__rank-report centerazition rank-report">
    <b class="rank-report_title font-14">بیشترین‌ها</b>
    <div
      v-if="homestore.displayActivityTypes.length === 0"
      class="rank-report__rating rating"
    >
      اولین فعالیت خودت رو بساز.
    </div>
    <div class="rank-report__rating rating">
      <div
        class="font-12 rank-report__chartbar chartbar"
        v-for="(activityType, index) in homestore.displayActivityTypes"
        v-show="activityType[1] !== 0"
      >
        <span class="rank-report__title font-12">{{ activityType[0] }}</span>
        <div class="rank-report__progressbar">
          <div
            class="rank-report__bar rank-report__bar_first"
            :class="rankClasses[index]"
          ></div>
          <span class="rank-report__count">{{ activityType[1] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
