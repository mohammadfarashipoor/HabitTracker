<script setup>
import Event from "@/components/event/Event.vue";
import Activity from "@/components/activity/Activity.vue";
import DateFilter from "@/components/default/DateFilter.vue";
import FirstActivityType from "@/components/activityType/FirstActivityType.vue";
import MostActivityTypes from "@/components/activityType/MostActivityTypes.vue";
import ActivityType from "@/components/activityType/ActivityType.vue";
import EventReport from "@/components/event/EventReport.vue";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { homeStore } from "@/stores/home";
import { activityTypeStore } from "@/stores/activityType";
import BoxContainer from "@/components/default/BoxContainer.vue";
const homestore = homeStore();

const activitytypestore = activityTypeStore();
activitytypestore.getActivityTypes();
let mostActivityTypes = computed(() => {
  return homestore.mostActivityTypes;
});
let firstActivityType = computed(() => {
  const result = mostActivityTypes.value[0];
  return result ? [result[0], result[1]] : "";
});

// static event data
const events = ref([
  {
    id: 1,
    title: "پیاده",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    time: "8:10",
    date: "22 مهر",
  },
  {
    id: 1,
    title: "پیاده",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    time: "8:10",
    date: "22 مهر",
  },
  {
    id: 1,
    title: "پیاده",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    time: "8:10",
    date: "22 مهر",
  },
  {
    id: 1,
    title: "پیاده",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    time: "8:10",
    date: "22 مهر",
  },
  {
    id: 1,
    title: "پیاده",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    time: "8:10",
    date: "22 مهر",
  },
]);

const countEmptyCard = ref({
  emptyEvent: 0,
  emptyActivities: 0,
  emptyActivityTypes: 0,
});
const countEmpty = ref();

onMounted(() => {
  window.addEventListener("resize", () => hanldeCountEmpty(window.innerWidth));
  countEmpty.value = window.innerWidth;
  hanldeCountEmpty(countEmpty.value);
});
onBeforeUnmount(() => {
  window.addEventListener("resize", () => hanldeCountEmpty(window.innerWidth));
});

function hanldeCountEmpty(screenWidth) {
  if (screenWidth < 960) {
    //for display one empty card in mobile
    countEmptyCard.value.emptyEvent = events.value.length < 1 ? 1 : 0;
    countEmptyCard.value.emptyActivities =
      homestore.activities.length < 1 ? 1 : 0;
    countEmptyCard.value.emptyActivityTypes =
      activitytypestore.activityTypes.length < 1 ? 1 : 0;
  } else {
    countEmptyCard.value.emptyEvent =
      events.value.length < 3 ? 3 - events.value.length : 0;
    countEmptyCard.value.emptyActivities =
      homestore.activities.length < 3 ? 3 - homestore.activities.length : 0;
    countEmptyCard.value.emptyActivityTypes =
      activitytypestore.activityTypes.length < 3
        ? 3 - activitytypestore.activityTypes.length
        : 0;
  }
}
</script>
<template>
  <section class="home__content content">
    <!-- Activity Report  -->
    <!-- activity report tag time -->
    <div class="home-content__plan plan">
      <!-- activity report tag time -->
      <div class="plan__header header">
        <DateFilter />
        <!-- activity rank report -->
        <b class="plan__title">گزارش ها</b>
      </div>
      <div class="plan__activities-info activities-info">
        <div class="activities-info__top-ranking top-ranking">
          <FirstActivityType :firstActivityType="firstActivityType" />
          <MostActivityTypes  />
        </div>
        <!-- activity box report -->
        <div class="activities-info__reporter reporter">
          <b class="font-14 reporter__title"
            >دوچرخه سواری<img
              class="reporter__arrow"
              src="@/assets/images/icons/arrow-bottom.svg"
              alt=""
            />
          </b>
          <div v-if="false" class="reporter__report-items report-items">
            اولین فعالیت خودت رو بساز.
          </div>
          <div class="reporter__report-items">
            <EventReport title="جمعه با بچه ها" date="۲۱ مهر ۱۴۰۱" />
            <EventReport title="جمعه با بچه ها" date="۲۱ مهر ۱۴۰۱" />
            <EventReport title="جمعه با بچه ها" date="۲۱ مهر ۱۴۰۱" />
          </div>
        </div>
      </div>
    </div>
    <!-- event box -->
    <BoxContainer title="رویداد ها" path="/events">
      <template #content>
        <Event
          v-for="(event, index) in events"
          :event="event"
          :key="index"
          :homeCard="true"
        />

        <div
          v-for="empty in countEmptyCard.emptyEvent"
          v-if="3 - events.length > 0"
          class="body-component__empty-card body-component__empty-card_event"
        >
          <img src="@/assets/images/icons/Plus.svg" alt="" />
        </div>
      </template>
    </BoxContainer>

    <!-- activity box -->
    <BoxContainer title="فعالیت ها" path="/activities">
      <template #content>
        <Activity
          v-for="(activity, index) in homestore.activities"
          :key="activity._id"
          :homeCard="true"
          :indexItem="index"
          :activity="activity"
        />
        <div
          v-for="empty in countEmptyCard.emptyActivities"
          v-if="3 - homestore.activities.length > 0"
          class="body-component__empty-card body-component__empty-card_activty"
        >
          <img src="@/assets/images/icons/Plus.svg" alt="" />
        </div>
      </template>
    </BoxContainer>

    <!-- activity type box -->
    <BoxContainer title="نوع فعالیت" path="/activityTypes">
      <template #content>
        <ActivityType
          v-for="activityType in activitytypestore.activityTypes"
          :key="activityType._id"
          :homeCard="true"
          :activityType="activityType"
        />
        <div
          v-for="empty in countEmptyCard.emptyActivityTypes"
          v-if="3 - activitytypestore.activityTypes.length > 0"
          class="body-component__empty-card body-component__empty-card_activtytype"
        >
          <img src="@/assets/images/icons/Plus.svg" alt="" />
        </div>
      </template>
    </BoxContainer>
  </section>
</template>
