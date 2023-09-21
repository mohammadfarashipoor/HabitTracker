<script setup>
import BaseInput from "@/components/shared/base/BaseInput.vue";
import BaseLoading from "@/components/shared/base/BaseLoading.vue";
import { Form } from "vee-validate";
import { reactive } from "vue";
import { validationSchema } from "@/plugins/yup";
import { authStore } from "@/stores/auth";
const store = authStore();
const informationSchema = validationSchema.informationFormSchema;
const emit = defineEmits("navigateToEmailPassword");

const props = defineProps({
  formData: {
    type: Object,
    required: true,
  },
});
const loadingState = reactive({
  isLoading: false,
});
const submitSignup = async (values) => {
  const user = {
    email: props.formData.email,
    password: props.formData.password,
    name: values.name,
    age: values.age,
  };
  loadingState.isLoading = true;
  const response = await store.handleSignupForm(user);
  loadingState.isLoading = false;
  if (response) {
    store.$router.replace("/");
  }
};
</script>

<template>
  <main class="auth-page">
    <div class="auth-page__auth-container auth-container">
      <div class="auth-container__header">
        <h1 class="auth-container__title">اطلاعات فردی</h1>
        <img
          class="auth-container__image"
          src="@/assets/images/Image.png"
          alt=""
        />
      </div>
      <Form
        @submit="submitSignup"
        :validation-schema="informationSchema"
        class="auth-container__auth-form auth-form"
      >
        <div class="auth-form__input-container input-container">
          <BaseInput name="name" type="text" label="نام" icon="user" />
        </div>
        <div class="auth-form__input-container input-container">
          <BaseInput name="age" type="text" label="سن" icon="calendar" />
        </div>
        <button class="auth-form__auth-submit auth-submit" type="submit">
          تایید
        </button>
      </Form>
      <router-link
        to="/signup"
        @click="emit('navigateToEmailPassword')"
        class="auth-container__back-icon"
      >
        <img src="@/assets/images/icons/arrow-right.svg" alt="" />
      </router-link>
    </div>
    <BaseLoading :isLoading="loadingState.isLoading" />
  </main>
</template>

<style scoped></style>
