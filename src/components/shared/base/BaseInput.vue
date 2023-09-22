<script setup>
import { Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import BaseIcon from "@/components/shared/base/BaseIcon.vue";
const props = defineProps({
  name: String,
  type: {
    type: String,
    default: "input",
    validator(value) {
      return ["email", "password", "text"].includes(value);
    },
  },
  label: String,
  icon: String,
  value: String,
  modelValue: String,
});
defineEmits(["update:modelValue"]);
const statePass = ref(false);

const inputValue = ref();
</script>
<template>
  <Field
    :type="statePass ? 'text' : props.type"
    :name="props.name"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="input-container__input"
    :placeholder="props.label"
    :validate-on-input="true"
    v-model="inputValue"
  />
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
  <BaseIcon
    v-if="props.icon === 'lock'"
    @click="() => (statePass = !statePass)"
    class="input-container__icon input-container__icon_left"
    :icon="statePass ? 'eye' : 'eye-slash'"
  />
</template>
