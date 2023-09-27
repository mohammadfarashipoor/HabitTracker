<script setup>
import { useState } from "@/composables/state.js";
import EditAndRemove from "@/components/modals/EditAndRemove.vue";
import ModalActivity from "@/components/modals/ModalActivity.vue";
import ModalRemove from "@/components/modals/ModalRemove.vue";
import { getActivityTypeNameById } from "@/services/activityTypeApi";
import ActivityCarousel from "@/components/activity/ActivityCarousel.vue";

import {
  getTimeWithoutSecond,
  getDateWithPersianMonth,
} from "@/utilities/helpers";
import { ref } from "vue";
const props = defineProps({
  activity: {
    type: Object,
    required: true,
  },
  activityID:{
    type: String,
    required: true,
  },
  homeCard: {
    type: Boolean,
  },
  indexItem: {
    type: Number,
  },
});

props.activity.fromHour = getTimeWithoutSecond(
  props.activity.fromHour
);
const handleDataFormats = async () => {
  props.activity.toHour = getTimeWithoutSecond(props.activity.toHour);
  props.activity.date = getDateWithPersianMonth(props.activity.date);
  props.activity.activityType = await getActivityTypeNameById(
    props.activity.activityType
  );
};
handleDataFormats();

const [show, setShow] = useState(false);
const [modalState, setModalState] = useState(false);
const showRemoveModal = ref(false);
function removeCard() {
  showRemoveModal.value = true;
}
function cancelRemove() {
  showRemoveModal.value = false;
}
function confirmRemove() {
  showRemoveModal.value = false;
}
function editCard() {
  setModalState(!modalState.value);
}
let activityId = ref(props.activityID);
let activity = ref(props.activity);

</script>

<template>
  <div
    class="activities__activity-container activity-container"
    :class="{ 'activity-container_home': homeCard }"
  >
    <div class="activity-container__activity-header activity-header">
      <!-- <div class="activity-header__activity-link">
        <img
          v-if="activity.imgIds"
          class="activity-header__image"
          :class="{ hidden: homeCard }"
          src="@/assets/images/Image (1).png"
          alt=""
        />
        <img
          v-else
          class="activity-header__image"
          :class="{ hidden: homeCard }"
          src="@/assets/images/no-photo(1).png"
          alt=""
        />
      </div> -->

      <ActivityCarousel :indexItem="indexItem" />
      <div class="activity-header__title-container">
        <b class="activity-header__title font-18">{{ activity.title }}</b>
        <img
          class="activity-header__action-image"
          :class="{ hidden: homeCard }"
          src="@/assets/images/icons/more.svg"
          alt=""
          @click.stop="
            () => {
              setShow(!show);
            }
          "
        />
        <EditAndRemove
          :setShow="setShow"
          :show="show"
          :itemRemove="activity"
          @removeCard="removeCard"
          @editCard="editCard"
        /><Teleport to="body">
          <ModalActivity
            v-if="modalState"
            :setModalState="setModalState"
            :modalState="modalState"
        /></Teleport>
        <Teleport to="body">
          <ModalRemove
            v-show="showRemoveModal"
            @confirmRemove="confirmRemove"
            @cancelRemove="cancelRemove"
            message="اطمینان دارید"
            type="فعالیت"
            removeKey="activity"
            :id="activityId"
        /></Teleport>
      </div>
    </div>
    <p
      class="activity-container__activity-description font-12"
      :class="{ nowrap: homeCard }"
    >
      {{ activity.description }}
    </p>
    <div class="activity-container__activity-footer">
      <div class="activity-container__time-details time-details">
        <div class="time-details__date-time date-time">
          <img
            class="date-time__image"
            src="@/assets/images/icons/calendar.svg"
            alt=""
          />
          <small class="date-time__small font-12"> {{ activity.date }}</small>
        </div>
        <div class="time-details__date-time date-time">
          <img
            class="date-time__image"
            src="@/assets/images/icons/clock1.svg"
            alt=""
          />
          <small class="date-time__small font-12">
            {{ activity.fromHour }} تا {{ activity.toHour }}</small
          >
        </div>
      </div>
      <div
        class="activity-container__activity-tag activity-tag"
        :class="{ ' activity-tag_hidden': homeCard }"
      >
        <small class="activity-tag__small font-14">{{
          activity.activityType
        }}</small>
      </div>
    </div>
  </div>
</template>

<style></style>
