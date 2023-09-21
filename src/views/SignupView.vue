<script setup>
import { ref, computed } from "vue";
import EmailPasswordForm from "@/components/auth/EmailPasswordForm.vue";
import InformationForm from "@/components/auth/InformationForm.vue";
const formType = ref("email-password-form");
const formData = ref(null);

const currentForm = computed(() => {
  if (formType.value === "email-password-form") {
    return EmailPasswordForm;
  } else if (formType.value === "information-form") {
    return InformationForm;
  }
});

const navigationToInformation = (EmailPassword) => {
  formData.value = EmailPassword;
  formType.value = "information-form";
};
const navigattionToEmailPassword = () => {
  formType.value = "email-password-form";
};
</script>

<template>
  <component
    :is="currentForm"
    @navigateToInfo="navigationToInformation"
    @navigateToEmailPassword="navigattionToEmailPassword"
    :formData="formData"
  ></component>
</template>

<style scoped></style>
