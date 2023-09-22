<script setup>
import { defineProps } from "vue";
import DatePicker from "vue3-persian-datetime-picker";
import { ErrorMessage, useField } from "vee-validate";
import BaseIcon from "@/components/shared/base/BaseIcon.vue";

const props = defineProps({
  key: String,
  name: String,
  type: String,
  label: String,
  placeholder: String,
  icon: String,
  value: String,
});

const { value: inputValue } = useField(props.name);
</script>
<template>
  <input
    id="fromHour-input"
    class="input-container__input"
    v-model="inputValue"
    type="text"
    :placeholder="props.placeholder"
  />
  <label :for="props.name" class="input-container__label">{{
    props.label
  }}</label>
  <BaseIcon
    class="input-container__icon input-container__icon_right"
    :icon="icon"
  />
  <small>
    <ErrorMessage :name="props.name" class="input-container__error-message"
  /></small>
  <DatePicker
    type="time"
    :name="props.name"
    element="fromHour-input"
    v-model="inputValue"
  ></DatePicker>
</template>

<style lang="scss" scoped></style>
