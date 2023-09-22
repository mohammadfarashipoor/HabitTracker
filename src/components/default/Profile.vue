<script setup>
import { authStore } from "@/stores/auth";
import InputProfie from "@/components/shared/base/InputProfie.vue";
import DashboardHeader from "@/components/default/headers/DashboardHeader.vue";
import { useRouter } from "vue-router";

import Cookies from "js-cookie";

const store = authStore();
store.getUserInformation();
const emit = defineEmits();
function setShow() {
  emit("setShow");
}
const router = useRouter();
const logout = () => {
  router.go(0);
  Cookies.remove("token");
};
</script>
<template>
  <div class="panel-container__activity-program activity-program">
    <div class="activity-program__profile">
      <DashboardHeader>
        <template #title>
          <div class="profile-header__title-container title-container">
            <img
              class="title-container__image icon-color"
              src="@/assets/images/icons/arrow-right.svg"
              alt=""
              @click="setShow"
            />

            <h3 class="title-container__title">پروفایل</h3>
          </div></template
        ></DashboardHeader
      >
    </div>
    <div class="activity-program__profile-container profile-container">
      <img
        class="profile-container__image"
        src="@/assets/images/people/Avatar(1).svg"
      />
      <h3 class="profile-container__name font-16">{{ store.user.name }}</h3>
      <div class="profile-container__setting setting">
        <InputProfie title="ایمیل" icon="frame1" :value="store.user.email" />
        <InputProfie title="رمز عبور" icon="lock2" value="**********" />
        <InputProfie title="سن" icon="calendar2" :value="store.user.age" />
        <InputProfie title="خروج از حساب کاربری" icon="logout" value="" @click="logout" class="logout"/>
      </div>
    </div>
  </div>
</template>
<style>
.activity-program__profile {
  /* display: none !important; */
}
.logout {
  cursor: pointer;
}
.logout:hover {
  background-color: rgba(0, 0, 0, 0.055);
}
</style>
