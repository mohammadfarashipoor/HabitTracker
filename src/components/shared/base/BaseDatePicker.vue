<template>
  <input
    id="date-input"
    class="input-container__input"
    v-model="inputValue"
    :name="props.name"
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
    format="jDD jMMMM jYYYY"
    display-format="jYYYY-jMM-jDD"
    element="date-input"
    v-model="inputValue"
    :name="props.name"
  ></DatePicker>
</template>
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
  icon: String,
  placeholder: String,
  value: String,
});

const { value: inputValue } = useField(props.name);
</script>
<style lang="scss" scoped></style>
