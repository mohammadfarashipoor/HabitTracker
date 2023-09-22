<script setup>
import BaseInput from "@/components/shared/base/BaseInput.vue";
import BaseModal from "@/components/shared/base/BaseModal.vue";
import ButtonPrimry from "@/components/shared/base/ButtonPrimry.vue";
import BackgroundShadow from "@/components/shared/base/BackgroundShadow.vue";
import { activityTypeStore } from "@/stores/activityType";
import { validationSchema } from "@/plugins/yup";
import { Form } from "vee-validate";
import { ref } from "vue";
import { toggleNavigationStore } from "@/stores/toggleNavigationStore";
const storeToggle = toggleNavigationStore();
const store = activityTypeStore();

const activityTypeSchema = validationSchema.activityTypeModalSchema;

const props = defineProps({
  setModalState: {
    type: Function,
    required: true,
  },
  modalState: {
    type: Boolean,
    required: true,
  },
  setActivtiyType: {
    type: Function,
    required: true,
  },
  activtiyType: {
    type: Boolean,
    required: true,
  },
});
const inputValue = ref("");
const randomRgbColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return [r, g, b];
};
function generatorActivityType() {
  const { activtiyType, setActivtiyType, setModalState, modalState } = props;
  const [r, g, b] = randomRgbColor();
  setActivtiyType([
    ...activtiyType,
    {
      id: activtiyType.length + 1,
      name: inputValue,
      bgColor: `rgb(${r},${g},${b},0.5)`,
      color: `rgb(${r},${g},${b})`,
    },
  ]);
  setModalState(!modalState);
}
const submitActivityType = async (values) => {
  await store.addActivityType(values);
  await store.getActivityTypes();
  props.setModalState(!props.modalState);
  if (storeToggle.toggleState) {
    storeToggle.changeToggleState();
  }
};
</script>
<template>
  <Form
    class="main__edit-container edit-container modal-container"
    @submit="submitActivityType"
    :validation-schema="activityTypeSchema"
  >
    <div class="edit-container__gray-line"></div>
    <div class="edit-container__input-container input-container">
      <BaseInput
        v-model="inputValue"
        type="text"
        name="title"
        icon="weight"
        label="نوع فعالیت"
      />
    </div>
    <div class="edit-container__action-buttons action-buttons">
      <ButtonPrimry
        text="لغو"
        @onClick="() => setModalState(!modalState)"
        class="action-buttons__btn"
      />
      <ButtonPrimry
        text="تایید"
        type="submit"
        @onClick="
          () => {
            generatorActivityType;
          }
        "
        class="action-buttons__btn"
      />
    </div>
  </Form>
  <BackgroundShadow />
</template>
<style></style>
