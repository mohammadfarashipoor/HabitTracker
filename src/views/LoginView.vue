<script setup>
import { reactive } from "vue";
import BaseLoading from "@/components/shared/base/BaseLoading.vue";
import { Form } from "vee-validate";
import BaseInput from "@/components/shared/base/BaseInput.vue";
import { validationSchema } from "@/plugins/yup";
import { authStore } from "@/stores/auth";
const store = authStore();
const loadingState = reactive({
  isLoading: false,
});
const LoginSchema = validationSchema.loginFormSchema;
const submitLogin = async (values) => {
  loadingState.isLoading = true;
  const response = await store.loginForm(values);
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
        <h1 class="auth-container__title">ورود</h1>
        <img
          class="auth-container__image"
          src="@/assets/images/Image.png"
          alt=""
        />
      </div>
      <Form
        @submit="submitLogin"
        :validation-schema="LoginSchema"
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
          ورود
        </button>
      </Form>

      <p class="auth-container__no-account no-account">
        حساب کاربری ندارید؟
        <router-link to="/signup" class="no-account__link"
          ><b>ثبت نام</b></router-link
        >
      </p>
    </div>
    <BaseLoading :isLoading="loadingState.isLoading" />
  </main>
</template>

<style scoped></style>
