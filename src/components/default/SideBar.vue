<script setup>
import PersianCalendarDom from "@/components/calendar/PersianCalendarDom.vue";
import BaseIcon from "@/components/shared/base/BaseIcon.vue";
import Profile from "@/components/default/Profile.vue";
import DashboardHeader from "@/components/default/headers/DashboardHeader.vue";
import Event from "@/components/event/Event.vue";
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useState } from "@/composables/state.js";
import { useRoute } from "vue-router";
import { authStore } from "@/stores/auth";
import {resizeListener} from "@/utilities/resizeListener.js";

const themeToggle = ref();
const VisibleInMobileCalender = ref(true);
const VisibleInMobileProfile = ref(true);
const route = useRoute();
const store = authStore();
store.getUserInformation();
function handleVisibleInMobile(showInPath,refValue) {
  if (window.innerWidth < 960) {
    // display calendar in mobile just in home
    refValue.value = route.path === showInPath;
  } else {
    // display calendar in desktop for all page
    refValue.value = true;
  }}


watch(route, () => {
  //call on change route
  handleVisibleInMobile("/",VisibleInMobileCalender);
  handleVisibleInMobile("/profile",VisibleInMobileProfile);
});
onMounted(() =>
{   resizeListener(()=>handleVisibleInMobile("/",VisibleInMobileCalender));
  resizeListener(()=>handleVisibleInMobile("/profile",VisibleInMobileProfile));
});
handleVisibleInMobile("/",VisibleInMobileCalender);
handleVisibleInMobile("/profile",VisibleInMobileProfile);
//static event data
const [events, setEvents] = useState([
  {
    id: 1,
    title: "پیاده",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    time: "8:10",
    date: "22 مهر",
  },
]);
const [show, setShow] = useState(false);
</script>

<template>
  <section class="home__panel-container panel-container">
    <div
      v-show="!show || !VisibleInMobileProfile"
      class="panel-container__activity-program activity-program"
    >
      <DashboardHeader>
        <template #title>
          <div
            @click="() => setShow(!Show)"
            class="title-container__profile-image"
          >
            <BaseIcon
              class="title-container__avatar"
              icon="Avatar"
              alt="avatar"
            />
          </div>
          <div class="title-container__personal-info">
            <b class="title-container__name font-16">{{ store.user.name }}</b>
            <span class="title-container__events font-14">بدون رویداد</span>
          </div></template
        ></DashboardHeader
      >
      <div class="activity-program__panel-context panel-context">
        <div
          class="panel-context__datepicker"
          v-if="VisibleInMobileCalender"
          style="display: block"
        >
          <PersianCalendarDom />
        </div>
        <div class="panel-context__context-article context-article">
          <b class="context-article__title font-16">رویدادهای امروز</b>
          <div class="context-article__event event">
            <Event
              v-for="event in events"
              :id="event.id"
              :event="event"
              :tiny="true"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="VisibleInMobileProfile">
      <Profile v-if="VisibleInMobileProfile && show" @setShow="setShow" />
    </div>
  </section>
</template>
<style></style>
