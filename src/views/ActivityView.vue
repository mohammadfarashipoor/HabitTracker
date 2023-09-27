<script setup>
import Activity from "@/components/activity/Activity.vue";
import MainContentHeader from "@/components/shared/base/MainContentHeader.vue";
import BaseLoading from "@/components/shared/base/BaseLoading.vue";
import EmptyView from "@/views/EmptyView.vue";
import { ref, computed, reactive } from "vue";
import { activityStore } from "@/stores/activity";
const loadingState = reactive({
  isLoading: false,
});
const store = activityStore();

const getActivities = async () => {
  loadingState.isLoading = true;
  await store.getActivities();
  loadingState.isLoading = false;
};

getActivities();
</script>

<template>
  <section class="full-container__content content content_web">
    <!-- Activities Box -->
    <main class="main">
      <!-- Main Content Header -->
      <MainContentHeader title="فعالیت" />
      <!-- Activities -->
      <section class="main__activities activities">
        <Activity
          v-for="(activity, index) in store.activities"
          :key="activity._id"
          :activity="activity.data"
          :indexItem="index"
          :homeCard="false"
        />
      </section>
      <EmptyView v-show="store.activities.length === 0" type="فعالیتی" />
      <BaseLoading :isLoading="loadingState.isLoading" />
    </main>
  </section>
</template>
