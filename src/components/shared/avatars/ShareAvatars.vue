<script setup>
import ButtonPrimry from "@/components/shared/base/ButtonPrimry.vue";
import BackgroundShadow from "@/components/shared/base/BackgroundShadow.vue";
import BaseInput from "@/components/shared/base/BaseInput.vue";
import { ref } from "vue";

const input = ref("");
const props = defineProps({
  isShow: {
    type: Function,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
  setAvatarsFilter: {
    type: Function,
  },
  avatarsFilter: {
    type: Object,
  },
});

const images = ref([
  {
    id: 1,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar.svg",
  },
  {
    id: 2,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(1).svg",
  },
  {
    id: 3,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(2).svg",
  },
  {
    id: 4,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(3).svg",
  },
  {
    id: 5,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(4).svg",
  },
  {
    id: 6,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(3).svg",
  },
  {
    id: 7,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(1).svg",
  },
  {
    id: 8,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar(2).svg",
  },
]);
function handleActive(avatar) {
  const { avatarsFilter, setAvatarsFilter } = props;
  let avatars = images.value;
  avatars.forEach((element) => {
    if (element.id === avatar.id) {
      element.active = !element.active;
      setAvatarsFilter([...avatarsFilter, avatar]);
    }
  });
}

function filteredList() {
  return images.value.filter((image) =>
    image.name.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>
<template>
  <div v-if="show" class="share-box modal-container">
    <div class="share-box__gray-line"></div>
    <div class="share-box__input-search input-search">
      <BaseInput
        v-model:modelValue="input"
        type="text"
        name="title"
        icon="search"
        label="جستجوی دوستان"
      />
    </div>
    <div class="share-box__table-container table-container">
      <div
        class="table-container__person person"
        v-for="(image, index) in filteredList()"
        :key="index"
        @click="handleActive(image)"
      >
        <div
          :class="`person__avatar-profile avatar-profile avatar-profile_color${
            image.active ? ' avatar-profile_active' : ''
          }`"
        >
          <img class="avatar-profile__image" :src="image.imageSrc" />
          <img
            v-if="image.active"
            class="avatar-profile_selected"
            src="@/assets/images/icons/selected.svg"
          />
        </div>
        <span class="person__name font-14">{{ image.name }}</span>
      </div>
    </div>
    <div class="share-box__action-button action-button">
      <ButtonPrimry
        text="لغو"
        @onClick="() => isShow(false)"
        class="action-button__side action-button__side_cancele"
      />
      <ButtonPrimry
        text="تایید"
        @onClick="() => isShow(false)"
        class="action-button__side action-button__side_confirm"
      />
    </div>
  </div>
  <BackgroundShadow v-if="show" />
</template>

<style></style>
