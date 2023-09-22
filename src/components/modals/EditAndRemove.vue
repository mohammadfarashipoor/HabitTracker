<script setup>
import { vOnClickOutside } from "@vueuse/components";
const emit = defineEmits();
const props = defineProps({
  setShow: {
    type: Function,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
  itemRemove: {
    type: Object,
  },
});

function removeCard() {
  emit("removeCard", props.itemRemove);
}
function editCard() {
  emit("editCard", props.itemRemove);
}
</script>

<template>
  <div
    class="event-container__editbox"
    v-if="show"
    v-on-click-outside.bubble="
      () => {
        setShow(false);
      }
    "
  >
    <div class="event-container__editbox-item" @click="editCard()">
      <img src="@/assets/images/icons/edit-2.svg" /><span>ویرایش</span>
    </div>
    <div class="event-container__editbox-item" @click="removeCard()">
      <img src="@/assets/images/icons/trash.svg" /> <span>حذف</span>
    </div>
  </div>
</template>

<style></style>
