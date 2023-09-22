<script setup>
import BackgroundShadow from "@/components/shared/base/BackgroundShadow.vue";
import ButtonPrimry from "@/components/shared/base/ButtonPrimry.vue";
import { Form } from "vee-validate";
const emit = defineEmits(["SubmitForm"]);
const props = defineProps({
  actionSchema: {
    type: Object,
  },
  setModalState: {
    type: Function,
    required: true,
  },
  modalState: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <Teleport to="body">
    <Form
      class="modal-container"
      @submit="emit('SubmitForm')"
      :validation-schema="actionSchema"
      @click.stop
      ><slot name="Body"></slot>
      <div class="modal-container__add-bottom add-bottom">
        <div class="add-bottom__filter-container filter-container">
          <div class="filter-container__action-buttons action-buttons">
            <ButtonPrimry
              text="لغو"
              @onClick="() => setModalState(!modalState)"
              class="action-buttons__btn"
            />
            <ButtonPrimry
              text="تایید"
              type="submit"
              class="action-buttons__btn"
            />
          </div>
        </div>
      </div>
    </Form>
    <BackgroundShadow />
  </Teleport>
</template>

<style scoped></style>
