<script setup>
import { Form } from "vee-validate";
import BaseInput from "@/components/shared/base/BaseInput.vue";
import { validationSchema } from "@/plugins/yup";


const signupSchema = validationSchema.signupFormSchema;

const emit = defineEmits('navigateToInfo');
const submitEmailPassword = (values) => {
  emit('navigateToInfo',values);
};
</script>

<template>
  <main class="auth-page">
    <div class="auth-page__auth-container auth-container">
      <div class="auth-container__header">
        <h1 class="auth-container__title">ثبت نام</h1>
        <img
          class="auth-container__image"
          src="@/assets/images/Image.png"
          alt=""
        />
      </div>
      <Form
        @submit="submitEmailPassword"
        :validation-schema="signupSchema"
        class="auth-container__auth-form auth-form"
      >
        <div class="auth-form__input-container input-container">
          <BaseInput name="email" type="email" label="ایمیل" icon="user" />
        </div>
        <div class="auth-form__input-container input-container">
          <BaseInput
            name="password"
            type="password"
            label="رمزعبور"
            icon="lock"
          />
        </div>
        <button class="auth-form__auth-submit auth-submit" type="submit">
          ثبت نام
        </button>
      </Form>
      <router-link to="/login" class="auth-container__back-icon">
        <img src="@/assets/images/icons/arrow-right.svg" alt="" />
      </router-link>
    </div>
  </main>
</template>

<style scoped></style>
