<template>
  <Field
    as="select"
    class="input-container__input"
    v-model="inputValue"
    :name="props.name"
    :placeholder="props.label"
    list="select"
  >
    <option
      v-for="activityType in store.activityTypes"
      :key="activityType._id"
      :value="activityType._id"
    >
      {{ activityType.data.title }}
    </option>
  </Field>
  <label :for="props.name" class="input-container__label">{{
    props.label
  }}</label>
  <small>
    <ErrorMessage :name="props.name" class="input-container__error-message"
  /></small>
  <BaseIcon
    class="input-container__icon input-container__icon_right"
    :icon="props.icon"
  />
</template>

<script setup>
import BaseIcon from "@/components/shared/base/BaseIcon.vue";
import { Field, useField, ErrorMessage } from "vee-validate";
import { activityTypeStore } from "@/stores/activityType";
const store = activityTypeStore();
store.getActivityTypes();
// const activityTypes = [
//   {
//     _id: "1",
//     title: "شنا",
//   },
//   {
//     _id: "2",
//     title: "2شنا",
//   },
//   {
//     _id: "3",
//     title: "3شنا",
//   },
// ];
const props = defineProps({
  name: String,
  type: {
    type: String,
    default: "input",
  },
  label: String,
  icon: String,
  value: String,
});

const { value: inputValue } = useField(props.name);
</script>

<style lang="scss" scoped>

</style>
