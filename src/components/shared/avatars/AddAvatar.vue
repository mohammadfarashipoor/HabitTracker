<script setup>
import { vOnClickOutside } from "@vueuse/components";
import ShareAvatars from "@/components/shared/avatars/ShareAvatars.vue";
import { useState } from "@/composables/state";

const props = defineProps({
  images: {
    type: Object,
    required: true,
  },
  addAvatar_hidden: {
    type: String,
  },
});
const [show, isShow] = useState(false);
</script>

<template>
  <div
    class="avatars__icon add-avatar"
    :class="props.addAvatar_hidden"
    @click.stop="
      () => {
        isShow(!show);
      }
    "
  >
    <img src="@/assets/images/icons/add-avatar.svg" />
    <small class="add-avatar__small font-14"> اضافه کردن</small>
  </div>
  <Teleport to="body"> <ShareAvatars :show="show" :isShow="isShow" /></Teleport>
</template>

<style>
.share-box {
  z-index: 2;
}
</style>
