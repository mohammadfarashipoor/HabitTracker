<script setup>
import { authStore } from "@/stores/auth";
import MobileHeader from "@/components/shared/base/MobileHeader.vue";
const store = authStore();
store.getUserInformation();
</script>
<template>
  <MobileHeader>
    <template #title>
      <div class="profile-header__title-container title-container">
        <div class="title-container__profile-image">
          <img
            class="title-container__avatar"
            src="@/assets/images/icons/Avatar.svg"
            alt="avatar"
          />
        </div>
        <div class="title-container__personal-info">
          <b class="title-container__name font-16">{{ store.user.name }}</b>
          <span class="title-container__events font-14">بدون رویداد</span>
        </div>
      </div></template
    >
    <template #action>
      <img
        class="notification__image"
        src="@/assets/images/icons/notification.svg"
      />
      <div class="notification__new"></div>
    </template>
  </MobileHeader>
</template>
<style></style>
