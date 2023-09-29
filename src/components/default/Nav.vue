<script setup>
import HomeIcon from "@/components/shared/icons/HomeIcon.vue";
import FlashIcon from "@/components/shared/icons/FlashIcon.vue";
import NavToggleIcon from "@/components/shared/icons/NavToggleIcon.vue";
import NoteIcon from "@/components/shared/icons/NoteIcon.vue";
import ProfileIcon from "@/components/shared/icons/ProfileIcon.vue";
import WieghtIcon from "@/components/shared/icons/WieghtIcon.vue";
import ModalActivity from "@/components/modals/ModalActivity.vue";
import ModalEvent from "@/components/modals/ModalEvent.vue";
import AddActivityType from "@/components/modals/AddActivityType.vue";
import TeleportComponent from "@/components/shared/base/TeleportComponent.vue"
import { useState } from "@/composables/state.js";
import { useRoute } from "vue-router";
import { toggleNavigationStore } from "@/stores/toggleNavigationStore";

const store = toggleNavigationStore();
const [showActivity, setShowActivity] = useState(false);
const [showEvent, setShowEvent] = useState(false);
const [showActivityType, setShowActivityType] = useState(false);
const route = useRoute();
const isActive = (path) => {
  //active icon in navigation items
  return route.path === path;
};
</script>

<template>
  <nav class="home__navigation navigation">
    <div
      class="navigation__nav-container navigation__nav-container_round-left nav-container"
    >
      <div class="nav-container__nav-item nav-item">
        <router-link to="/" class="nav-item__link">
          <HomeIcon :class="isActive('/') ? 'active-navigation' : ''"
        /></router-link>
      </div>
      <div class="nav-container__nav-item nav-item">
        <router-link to="/events" class="nav-item__link">
          <FlashIcon :class="isActive('/events') ? 'active-navigation' : ''" />
        </router-link>
      </div>
    </div>
    <div class="navigation__nav-toggle nav-toggle">
      <input
        class="nav-toggle__input"
        type="checkbox"
        id="button"
        v-model="store.toggleState"
        @click="
          () => {
            store.changeToggleState();
          }
        "
      />

      <label class="nav-toggle__toggle-label" for="button">
        <NavToggleIcon />
      </label>
      <div class="nav-toggle__dropmenu dropmenu">
        <div
          class="dropmenu__dropmenu-item dropmenu-item_transform-first"
          @click="
            () => {
              setShowActivityType(true);
            }
          "
        >
          <WieghtIcon class="dropmenu-item__icon" />
          <span class="dropmenu-item__title font-18">نوع فعالیت</span>
        </div>

        <TeleportComponent>
          <div v-if="showActivityType">
          <AddActivityType
            :setModalState="setShowActivityType"
            :modalState="showActivityType"
        /></div></TeleportComponent>

        <div
          class="dropmenu__dropmenu-item dropmenu-item_transform-two"
          @click="
            () => {
              setShowActivity(true);
            }
          "
        >
          <NoteIcon class="dropmenu-item__icon" />
          <span class="dropmenu-item__title font-18">فعالیت</span>
        </div>

        <TeleportComponent>
          <div v-if="showActivity">
          <ModalActivity

            :setModalState="setShowActivity"
            :modalState="showActivity"
        /></div></TeleportComponent>

        <div
          class="dropmenu__dropmenu-item dropmenu-item_transform-three"
          @click="
            () => {
              setShowEvent(true);
            }
          "
        >
          <FlashIcon class="dropmenu-item__icon" />
          <span class="dropmenu-item__title font-18">رویداد</span>
        </div>
        <TeleportComponent>
          <div v-if="showEvent">
          <ModalEvent

            :setModalState="setShowEvent"
            :modalState="showEvent"
        /></div></TeleportComponent>
      </div>
      <div class="nav-toggle__background-shadow"></div>
    </div>
    <div
      class="navigation__nav-container navigation__nav-container_round-right nav-container"
    >
      <div class="nav-container__nav-item nav-item">
        <router-link to="/activities" class="nav-item__link">
          <NoteIcon
            :class="isActive('/activities') ? 'active-navigation' : ''"
          />
        </router-link>
      </div>
      <div class="nav-container__nav-item nav-item nav-item_activitytype">
        <router-link to="/activityTypes" class="nav-item__link">
          <WieghtIcon
            :class="isActive('/activityTypes') ? 'active-navigation' : ''"
          />
        </router-link>
      </div>
      <div class="nav-container__nav-item nav-item nav-item_hidden">
        <router-link to="/profile" class="nav-item__link">
          <ProfileIcon
            :class="isActive('/activityTypes') ? 'active-navigation' : ''"
          />
        </router-link>
      </div>
    </div>
  </nav>
</template>
