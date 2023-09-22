<script setup>
import { Field, ErrorMessage } from "vee-validate";
import BaseIcon from "@/components/shared/base/BaseIcon.vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <Field
    as="textarea"
    :name="props.name"
    class="input-container__input input-container_textarea"
    name="body"
    :placeholder="props.label"
  ></Field>
  <label :for="props.name" class="input-container__label">{{
    props.label
  }}</label>
  <small> <ErrorMessage :name="props.name" /></small>
  <BaseIcon
    class="input-container__icon input-container__icon_right"
    :icon="props.icon"
  />
</template>
