<script setup>
import Event from "@/components/event/Event.vue";
import MainContentHeader from "@/components/shared/base/MainContentHeader.vue";
import EmptyView from "@/views/EmptyView.vue";
import { ref } from "vue";
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
]);


</script>

<template>
  <section class="full-container__content content content_web">
    <!-- Activities Box -->
    <main class="main">
      <!-- Main Content Header -->
      <MainContentHeader title="رویداد" />

      <!-- Activities -->
      <section class="main__events events">
        <Event
          v-for="(event, index) in events"
          :event="event"
        />
      </section>
      <EmptyView v-show="events.length === 0" type="رویدادی" />
    </main>
  </section>
</template>
