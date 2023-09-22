<script setup>
import ButtonPrimry from "@/components/shared/base/ButtonPrimry.vue";
import { useToast } from "vue-toastification";
import { activityStore } from "@/stores/activity";
import { activityTypeStore } from "@/stores/activityType";

const store = activityStore();
const useStore = activityTypeStore();
const toast = useToast();
const emit = defineEmits();
const props = defineProps({
  message: String,
  type: String,
  id: {
    required: true,
    type: String,
  },
  removeKey: {
    required: true,
    type: String,
  },
});
const confirmRemove = async () => {
  if (props.removeKey === "activity") {
    await store.removeActivity(props.id);
  } else if (props.removeKey === "activityType") {
    await useStore.removeActivityType(props.id);
  }
  toast.success(`${props.type} با موفقیت حذف شد`);
  emit("confirmRemove");
};
function cancelRemove() {
  emit("cancelRemove");
}
</script>
<template>
  <div class="modal-container">
    <div class="modal-container__edit-container edit-container">
      <p class="edit-container">{{ message }}</p>
      <div class="edit-container__action-buttons action-buttons">
        <ButtonPrimry
          class="action-buttons__btn"
          text="خیر"
          @onClick="cancelRemove"
        />
        <ButtonPrimry
          class="action-buttons__btn action-buttons__btn_danger"
          :text="props.type + ' حذف شود '"
          @onClick="confirmRemove"
        />
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
