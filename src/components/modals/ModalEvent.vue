<script setup>
import BaseInput from "@/components/shared/base/BaseInput.vue";
import TextInput from "@/components/shared/base/TextInput.vue";
import Avatars from "@/components/shared/avatars/Avatars.vue";
import BaseDatePicker from "@/components/shared/base/BaseDatePicker.vue";
import BaseFromHourPicker from "@/components/shared/base/BaseFromHourPicker.vue";
import AddAvatar from "@/components/shared/avatars/AddAvatar.vue";
import BaseModal from "@/components/shared/base/BaseModal.vue";
import ButtonPrimry from "@/components/shared/base/ButtonPrimry.vue";
import BackgroundShadow from "@/components/shared/base/BackgroundShadow.vue";
import { Form, Field } from "vee-validate";

import { validationSchema } from "@/plugins/yup";
import { toggleNavigationStore } from "@/stores/toggleNavigationStore";
const storeToggle = toggleNavigationStore();
const props = defineProps({
  setModalState: {
    type: Function,
    required: true,
  },
  modalState: {
    type: Boolean,
    required: true,
  },
});

// static event data
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

const eventSchema = validationSchema.eventModalSchema;
const submitEvent = () => {
  props.setModalState(!props.modalState);
  if (storeToggle.toggleState) {
    storeToggle.changeToggleState();
  }
};
</script>
<template>
  <Form
    class="modal-container"
    @submit="submitEvent"
    :validation-schema="eventSchema"
    ><div class="modal-container__center add-center">
      <div class="add-center__input-container input-container">
        <BaseInput type="text" icon="note-3" name="title" label="نام رویداد " />
      </div>
      <div class="add-center__input-container input-container">
        <TextInput icon="document-copy" name="description" label="توضیحات" />
      </div>
      <div class="add-center__input-container input-container">
        <base-date-picker
          key="date"
          name="date"
          type="date"
          label="تاریخ"
          placeholder="تاریخ"
          icon="calendar"
        />
      </div>
      <div class="add-center__input-container input-container">
        <BaseFromHourPicker
            key="fromHour"
            name="fromHour"
            type="time"
            label="از ساعت"
            placeholder="از ساعت"
            icon="clock1"
          />
      </div>
      <div class="add-center__avatars avatars">
        <Avatars :images="avatar" />
        <AddAvatar :images="avatar" />
      </div>
    </div>
    <div class="modal-container__bottom add-bottom">
      <div class="add-bottom__filter-container filter-container">
        <div class="filter-container__action-buttons action-buttons">
          <ButtonPrimry
            text="لغو"
            @onClick="() => setModalState(!modalState)"
            class="action-buttons__btn"
          />
          <ButtonPrimry
            text="تایید"
            type="submit"
            class="action-buttons__btn"
          />
        </div>
      </div>
    </div>
  </Form>
  <BackgroundShadow />
</template>

<style></style>
