<script setup>
import activityType from "@/components/activityType/activityType.vue";
import MainContentHeader from "@/components/shared/base/MainContentHeader.vue";
import BaseLoading from "@/components/shared/base/BaseLoading.vue";
import EmptyView from "@/views/EmptyView.vue";
import { ref, reactive } from "vue";
import { activityTypeStore } from "@/stores/activityType";
const store = activityTypeStore();
const loadingState = reactive({
  isLoading: false,
});
const getActivityTypes = async () => {
  loadingState.isLoading = true;
  await store.getActivityTypes();
  loadingState.isLoading = false;
};
getActivityTypes();
</script>

<template>
  <section class="full-container__content content content_web">
    <!-- Activities Box -->
    <main class="main">
      <!-- Main Content Header -->
      <MainContentHeader title="نوع فعالیت" />

      <!-- Activities -->
      <section class="main__activities activities">
        <activityType
          v-for="activityType in store.activityTypes"
          :key="activityType.id"
          :activityType="activityType"
        />
      </section>
      <EmptyView v-show="store.activityTypes.length === 0" type="فعالیتی" />
      <BaseLoading :isLoading="loadingState.isLoading" />
    </main>
  </section>
</template>
