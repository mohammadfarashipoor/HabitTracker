<script setup>
import ModalSelectActivityType from "@/components/modals/ModalSelectActivityType.vue";
import BackgroundShadow from "@/components/shared/base/BackgroundShadow.vue";
import ButtonPrimry from "@/components/shared/base/ButtonPrimry.vue";
import ShareAvatars from "@/components/shared/avatars/ShareAvatars.vue";
import FilterTag from "@/components/filters/FilterTag.vue";
import { useState } from "@/composables/state.js";
const props = defineProps({
  setFilterSelectorState: {
    type: Function,
    required: true,
  },
  filterSelectorState: {
    type: Boolean,
    required: true,
  },
});
const [activityTypeState, setActivityTypeState] = useState(false);
const [activityTypeFilter, setActivityTypeFilter] = useState([]);
const [show, isShow] = useState(false);
const images = [
  {
    id: 1,
    name: "کیارش",
    active: false,
    imageSrc: "src/assets/images/people/Avatar.svg",
  },
  {
    id: 2,
    name: "کیارش",
    active: true,
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
    active: true,
    imageSrc: "src/assets/images/people/Avatar(3).svg",
  },
  {
    id: 5,
    name: "کیارش",
    active: true,
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
];
const [avatarsFilter, setAvatarsFilter] = useState([]);

function removeItem(itemRemove, itemsObject, setNewItem) {
  let items = itemsObject;
  setNewItem(items.filter((element) => element.id != itemRemove.id));
}
</script>
<template>
  <div class="main__filters-container filters-container modal-container">
    <div class="filters-container__filter-main">
      <div class="filters-container__filter-item filter-item">
        <div class="filter-item__filter-title">
          <span class="filter-item__title">نوع فعالیت</span>
          <img
            @click="() => setActivityTypeState(true)"
            class="filter-item__image"
            src="@/assets/images/icons/arrow-left1.svg"
            alt=""
          />
        </div>
        <ModalSelectActivityType
          v-if="activityTypeState"
          :modalState="activityTypeState"
          :setModalState="setActivityTypeState"
          :activityTypeFilter="activityTypeFilter"
          :setActivityTypeFilter="setActivityTypeFilter"
        />
        <div class="filter-item__tags">
          <FilterTag
            v-for="(activityType, index) in activityTypeFilter"
            :key="index"
            :element="activityType"
            @removeItem="
              () =>
                removeItem(
                  activityType,
                  activityTypeFilter,
                  setActivityTypeFilter
                )
            "
          />
        </div>
      </div>
      <div class="filters-container__filter-item filter-item">
        <div class="filter-item__filter-title">
          <span class="filter-item__title">تاریخ</span>
          <img
            class="filter-item__image"
            src="@/assets/images/icons/arrow-left1.svg"
            alt=""
          />
        </div>
        <div class="filter-item__filter-tag filter-tag">
          <small class="filter-tag__small">شنا</small>
          <img
            class="filter-tag__image"
            src="@/assets/images/icons/close-circle1.svg"
            alt=""
          />
        </div>
      </div>
      <div class="filters-container__filter-item filter-item">
        <div class="filter-item__filter-title" @click="() => isShow(!show)">
          <span class="filter-item__title">افراد</span>
          <img
            class="filter-item__image"
            src="@/assets/images/icons/arrow-left1.svg"
            alt=""
          />
        </div>
        <ShareAvatars
          :show="show"
          :isShow="isShow"
          :avatarsFilter="avatarsFilter"
          :setAvatarsFilter="setAvatarsFilter"
        />
        <div class="filter-item__tags">
          <FilterTag
            v-for="(image, index) in avatarsFilter.filter(
              (item) => item.active
            )"
            :key="index"
            :element="image"
            @removeItem="
              () => removeItem(image, avatarsFilter, setAvatarsFilter)
            "
          />
        </div>
      </div>
    </div>
    <div class="filters-container__action-buttons action-buttons">
      <ButtonPrimry
        text="لغو"
        @onClick="() => setFilterSelectorState(!filterSelectorState)"
        class="action-buttons__btn"
      />
      <ButtonPrimry
        text="تایید"
        @onClick="() => setFilterSelectorState(!filterSelectorState)"
        class="action-buttons__btn"
      />
    </div>
  </div>
  <BackgroundShadow />
</template>
<style></style>
