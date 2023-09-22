<script setup>
import AddActivityType from "@/components/modals/AddActivityType.vue";
import { useState } from "@/composables/state.js";
import ButtonPrimry from "@/components/shared/base/ButtonPrimry.vue";
import BackgroundShadow from "@/components/shared/base/BackgroundShadow.vue";
import BaseInput from "@/components/shared/base/BaseInput.vue";
import { ref } from "vue";

const props = defineProps({
  setModalState: {
    type: Function,
    required: true,
  },
  modalState: {
    type: Boolean,
    required: true,
  },
  setActivityTypeFilter: {
    type: Function,
    required: true,
  },
  activityTypeFilter: {
    type: Object,
    required: true,
  },
});
const [activityTypeState, setActivityTypeState] = useState(false);

// static data activity type
const [activtiyType, setActivtiyType] = useState([
  { id: 1, name: "دراز", bgColor: "#FFF5FF", color: "#AE3EC9" },
  { id: 2, name: "نشست", bgColor: "#EFF9FF", color: "#58C2FE" },
  { id: 3, name: "پیاده روی", bgColor: "#E5F8EA", color: "#25A244" },
  { id: 4, name: "شنا", bgColor: "#FFF3DB", color: "#FFA400" },
  { id: 5, name: "صخره", bgColor: "#FEE6CF", color: "#E86E00" },
]);
const inputValue = ref("");
function selectActivtyType(item) {
  const { setActivityTypeFilter, activityTypeFilter } = props;
  let items = activtiyType.value;
  setActivityTypeFilter([...activityTypeFilter, item]);
  setActivtiyType(items.filter((element) => element.id != item.id));
}

function filteredList() {
  return activtiyType.value.filter((item) =>
    item.name.toLowerCase().includes(inputValue.value.toLowerCase())
  );
}
</script>
<template>
  <div class="main__edit-container edit-container">
    <div class="edit-container__gray-line"></div>
    <b>انتخاب نوع فعالیت</b>
    <div class="edit-container__head">
      <div
        class="edit-container__input-container input-container input-container_width"
      >
        <BaseInput
          v-model="inputValue"
          type="text"
          name="title"
          icon="weight"
          label="جست و جوی نوع فعالیت"
        />
      </div>
      <img
        class="input-container__add"
        src="@/assets/images/icons/add.svg"
        @click="() => setActivityTypeState(true)"
      />
    </div>
    <AddActivityType
      v-if="activityTypeState"
      :modalState="activityTypeState"
      :setModalState="setActivityTypeState"
      :setActivtiyType="setActivtiyType"
      :activtiyType="activtiyType"
    />
    <div class="input-container__activity">
      <div
        v-for="(item, index) in filteredList()"
        @click="() => selectActivtyType(item)"
        :key="index"
        :style="{ backgroundColor: item.bgColor, color: item.color }"
        class="input-container__activity-item activity-type"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="edit-container__action-buttons action-buttons">
      <ButtonPrimry
        text="لغو"
        @onClick="() => setModalState(!modalState)"
        class="action-buttons__btn"
      />
      <ButtonPrimry
        text="تایید"
        @onClick="() => setModalState(!modalState)"
        class="action-buttons__btn"
      />
    </div>
  </div>
  <BackgroundShadow />
</template>

<style></style>
