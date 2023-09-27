<script setup>
import BaseInput from "@/components/shared/base/BaseInput.vue";
import TextInput from "@/components/shared/base/TextInput.vue";
import BaseDatePicker from "@/components/shared/base/BaseDatePicker.vue";
import SelectActivityType from "@/components/shared/base/SelectActivityType.vue";
import ButtonPrimry from "@/components/shared/base/ButtonPrimry.vue";
import BackgroundShadow from "@/components/shared/base/BackgroundShadow.vue";
import BaseFromHourPicker from "@/components/shared/base/BaseFromHourPicker.vue";
import BaseToHourPicker from "@/components/shared/base/BaseToHourPicker.vue";
import { Form } from "vee-validate";
import { validationSchema } from "@/plugins/yup";
import { ref } from "vue";
import { useState } from "@/composables/state.js";
import { activityStore } from "@/stores/activity";
import { postImage } from "@/services/imageApi";
import { toggleNavigationStore } from "@/stores/toggleNavigationStore";
import { homeStore } from "@/stores/home";
const storeToggle = toggleNavigationStore();
const props = defineProps({
  setModalState: {
    type: Function,
    required: true,
  },
  modalState: {
    type: Boolean,
    required: true,
  },
});
const [pictureDivision, setPictureDivision] = useState([]);
const activitySchema = validationSchema.activityModalSchema;
const store = activityStore();
const homestore = homeStore();
let images = [];
const submitActivity = async (values) => {
  //const imageIds = await postImage(images);
  await store.addActivity(values, "imageIds");
  await homestore.yearFilter();
  props.setModalState(!props.modalState);
  if (storeToggle.toggleState) {
    storeToggle.changeToggleState();
  }
};
const uploadInput = ref("");

const chooseFile = () => {
  //image activity file
  const fileInput = uploadInput.value.files[0];
  images.push(fileInput);
  let displayURL = "";
  if (fileInput) {
    //create a url for display image after select image upload
    displayURL = URL.createObjectURL(fileInput);
    setPictureDivision([
      ...pictureDivision.value,
      { id: pictureDivision.value.length + 1, displayURL },
    ]);
  }
};
</script>
<template>
  <Form
    class="modal-container"
    @submit="submitActivity"
    :validation-schema="activitySchema"
    ><div class="modal-container__top add-top">
      <span class="add-top__span">عکس</span>
      <div class="action-top__inputs picture-inputs">
        <input
          ref="uploadInput"
          class="picture-inputs__input"
          type="file"
          accept="image/*"
          id="myPic"
          @change="chooseFile()"
          hidden=""
        />
        <img
          v-show="pictureDivision.length > 0"
          class="picture-inputs__upload"
          v-for="picture in pictureDivision"
          :key="picture.id"
          :src="picture.displayURL"
        />
        <label for="myPic" class="picture-inputs__upload upload">
          <img class="upload__img" src="@/assets/images/icons/Frame5728.svg" />
        </label>
      </div>
    </div>
    <div class="modal-container__add-add-center add-center">
      <div class="add-center__input-container input-container">
        <BaseInput type="text" name="title" icon="note-3" label="نام فعالیت" />
      </div>
      <div class="add-center__input-container input-container">
        <TextInput icon="document-copy" name="description" label="توضیحات" />
      </div>
      <div class="add-center__input-container input-container">
        <base-date-picker
          key="date"
          name="date"
          type="date"
          label="تاریخ"
          placeholder="تاریخ"
          icon="calendar"
        />
      </div>
      <div class="add-center__clock-container clock-container">
        <div class="clock-container__input-container input-container">
          <BaseFromHourPicker
            key="fromHour"
            name="fromHour"
            type="time"
            label="از ساعت"
            placeholder="از ساعت"
            icon="clock1"
          />
        </div>
        <div class="clock-container__input-container input-container">
          <BaseToHourPicker
            key="toHour"
            name="toHour"
            type="time"
            label="تا ساعت"
            placeholder="تا ساعت"
            icon="clock1"
          />
        </div>
      </div>
      <div class="add-center__input-container input-container">
        <SelectActivityType
          type="select"
          label="نوع فعالیت"
          icon="weight"
          placeholder="نوع فعالیت"
          name="activityType"
        />
      </div>
    </div>
    <div class="modal-container__add-bottom add-bottom">
      <div class="add-bottom__filter-container filter-container">
        <div class="filter-container__action-buttons action-buttons">
          <ButtonPrimry
            text="لغو"
            @onClick="() => setModalState(!modalState)"
            class="action-buttons__btn"
          /><ButtonPrimry
            text="تایید"
            type="submit"
            class="action-buttons__btn"
          />
        </div>
      </div>
    </div>
  </Form>
  <BackgroundShadow />
</template>

<style></style>
