<script setup>
import { useState } from "@/composables/state";
import EditAndRemove from "@/components/modals/EditAndRemove.vue";
import ModalRemove from "@/components/modals/ModalRemove.vue";
import AddActivityType from "@/components/modals/AddActivityType.vue";
import TeleportComponent from "@/components/shared/base/TeleportComponent.vue"
import { ref } from "vue";
const props = defineProps({
  activityType: {
    type: Object,
    required: true,
  },
  homeCard: {
    type: Boolean,
  },
});
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
const activityTypeId = ref(props.activityType.id);
const activityType = ref(props.activityType.data);
</script>
<template>
  <div
    class="activities__activity-container activity-container activity-container_home"
  >
    <div class="activity-header__title-container">
      <b class="activity-header__title font-18">{{ activityType.title }}</b>
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
        :show="show"
        :setShow="setShow"
        :setModalState="setModalState"
        @editCard="editCard"
        @removeCard="removeCard"
      />
      <TeleportComponent>
        <div v-if="modalState">
      <AddActivityType

        :setModalState="setModalState"
        :modalState="modalState"
      /></div></TeleportComponent><TeleportComponent>
        <ModalRemove
          v-show="showRemoveModal"
          @confirmRemove="confirmRemove"
          @cancelRemove="cancelRemove"
          message="اطمینان دارید"
          type="نوع فعالیت"
          removeKey="activityType"
          :id="activityTypeId"
      /></TeleportComponent>
    </div>
    <div class="activity-container__activity-footer activity-footer">
      <div class="activity-container__time-details time-details">
        <div class="time-details__date-time date-time">
          <img
            class="date-time__image"
            src="@/assets/images/icons/note-1.svg"
            alt=""
          /><small class="date-time__small">
            {{ activityType.activityCounter }} فعالیت</small
          >
        </div>
      </div>
    </div>
  </div>
</template>
