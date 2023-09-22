<script setup>
import { useState } from "@/composables/state";
import Avatars from "@/components/shared/avatars/Avatars.vue";
import ModalEvent from "@/components/modals/ModalEvent.vue";
import ModalRemove from "@/components/modals/ModalRemove.vue";
import AddAvatar from "@/components/shared/avatars/AddAvatar.vue";
import EditAndRemove from "@/components/modals/EditAndRemove.vue";
import { ref } from "vue";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  homeCard: {
    type: Boolean,
  },
  tiny: {
    type: Boolean,
  },
});
const [show, setShow] = useState(false);
const [modalState, setModalState] = useState(false);

const avatar = [
  {
    id: 1,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar.svg",
  },
  {
    id: 2,
    name: "کیارش",
    active: true,
    imageSrc: "src/assets/images/people/Avatar(1).svg",
  },
  {
    id: 3,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(2).svg",
  },
  {
    id: 4,
    name: "کیارش",
    active: true,
    imageSrc: "src/assets/images/people/Avatar(3).svg",
  },
  {
    id: 5,
    name: "کیارش",
    active: true,
    imageSrc: "src/assets/images/people/Avatar(4).svg",
  },
  {
    id: 6,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(3).svg",
  },
  {
    id: 7,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(1).svg",
  },
  {
    id: 8,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(2).svg",
  },
];
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
</script>

<template>
  <div v-if="event" class="events__event-container event-container">
    <div class="event-container__event-header">
      <div class="event-container__title font-16">{{ event.title }}</div>
      <img
        class="event-container__image"
        :class="{ hidden: homeCard, 'hide-important': tiny }"
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
        :itemRemove="event"
        @removeCard="removeCard"
        @editCard="editCard"
        :setModalState="setModalState"
      /><Teleport to="body">
        <ModalEvent
          v-if="modalState"
          :setModalState="setModalState"
          :modalState="modalState"
      /></Teleport>
      <Teleport to="body">
        <ModalRemove
          v-show="showRemoveModal"
          :id="props.event.title"
          removeKey="event"
          @confirmRemove="confirmRemove"
          @cancelRemove="cancelRemove"
          message="اطمینان دارید"
          type="رویداد"
      /></Teleport>
    </div>
    <p
      class="event-container__event-description"
      :class="{ 'event-container__tiny-description': tiny, nowrap: homeCard }"
    >
      {{ event.des }}
    </p>
    <div
      :class="[
        tiny ? 'event-footer_article' : '',
        'event-container__event-footer ',
      ]"
    >
      <div class="event-container__time-details time-details font-14">
        <div class="time-details__date-time date-time">
          <img
            class="date-time__image"
            src="@/assets/images/icons/calendar.svg"
            alt=""
          />
          <small class="date-time__small font-14"> {{ event.date }}</small>
        </div>
        <div class="time-details__date-time date-time">
          <img
            class="date-time__image"
            src="@/assets/images/icons/clock1.svg"
            alt=""
          />
          <small class="date-time__small font-14">{{ event.time }}</small>
        </div>
        <div
          v-if="!tiny"
          :class="[
            homeCard ? 'date-time_hidden' : '',
            'time-details__date-time date-time',
          ]"
        >
          <img
            class="date-time__image"
            src="@/assets/images/icons/frame1.svg"
            alt=""
          />
          <small class="date-time__small font-14">آزاده محمدی</small>
        </div>
      </div>
      <div class="event-container__avatars avatars">
        <Avatars :images="avatar" />

        <AddAvatar
          :add-avatar_hidden="homeCard ? 'add-avatar_hidden' : ''"
          v-if="!tiny"
          :images="avatar"
        />
      </div>
    </div>
  </div>
  <img
    v-else="event"
    class="body-component__empty-card"
    src="@/assets/images/icons/Plus.svg"
    alt=""
  />
</template>

<style></style>
