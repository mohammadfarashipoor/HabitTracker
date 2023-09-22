<script setup>
import { ref } from "vue";
const props = defineProps({
  indexItem: {
    type: Number,
    required: true,
  },
});
const countImage = ref(null);
const itemWidth = ref(null);
const itemsPerPage = ref(null);
const itemsToMove = 2;
let currentIndex = 0;
function prevImage(e) {
  itemWidth.value = countImage.value.children[props.indexItem].offsetWidth;
  itemsPerPage.value = Math.floor(
    countImage.value.offsetWidth / itemWidth.value
  );

  if (currentIndex > 0) {
    if (e.ctrlKey) {
      currentIndex -= itemsToMove;
      if (currentIndex < 0) {
        currentIndex = 0;
      }
    }
    if (e.button === 1) {
      //middle button in mouse
      currentIndex = 0;
    } else {
      currentIndex--;
    }
    countImage.value.style.marginLeft = `-${
      currentIndex * itemWidth.value + currentIndex * 40
    }px`;
  }
}
function nextImage(e) {
  itemWidth.value = countImage.value.children[props.indexItem].offsetWidth;
  itemsPerPage.value = Math.floor(
    countImage.value.offsetWidth / itemWidth.value
  );
  if (currentIndex < countImage.value.children.length - itemsPerPage.value) {
    if (e.ctrlKey) {
      currentIndex += itemsToMove;
      if (
        currentIndex >
        countImage.value.children.length - itemsPerPage.value
      ) {
        currentIndex = countImage.value.children.length - itemsPerPage.value;
      }
    }
    if (e.button === 1) {
      //middle button in mouse
      currentIndex = countImage.value.children.length - itemsPerPage.value;
    } else {
      currentIndex++;
    }
    countImage.value.style.marginLeft = `-${
      currentIndex * itemWidth.value + currentIndex * 40
    }px`;
  }
}
</script>
<template>
  <div class="activity-header__activity-link activity-link">
    <div class="carousel-container">
      <div class="carousel" ref="countImage">
        <img
          class="activity-link__image carousel-item"
          width="100%"
          src="@/assets/images/no-photo(1).png"
          alt=""
        />
        <img
          class="activity-link__image carousel-item"
          width="100%"
          src="@/assets/images/no-photo(1).png"
          alt=""
        /><img
          class="activity-link__image carousel-item"
          width="100%"
          src="@/assets/images/no-photo(1).png"
          alt=""
        />
        <img
          class="activity-link__image carousel-item"
          width="100%"
          src="@/assets/images/no-photo(1).png"
          alt=""
        />
      </div>
      <button
        class="action-btn nextBtn"
        @click="nextImage($event, props.indexItem)"
        id="nextBtn"
      >
        →
      </button>
      <button
        class="action-btn prevBtn"
        @click="prevImage($event, props.indexItem)"
        id="prevBtn"
      >
        ←
      </button>
    </div>
  </div>
</template>
<style scoped>
/*Carousel style */
.activity-link {
  position: relative;
}
.carousel:hover ~ .action-btn {
  display: block;
  transition: all 1s ease-out;
}
.action-btn:hover {
  display: block;
}
.action-btn {
  display: none;
  position: absolute;
  top: 50%;
  background-color: #b9b7b76b;
  border: none;
  color: black;
  padding: 0px 10px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  transition: 0.3s;
  border-radius: 40px;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
}
.action-btn:nth-child(3) {
  left: 30px;
}
.action-btn:nth-child(2) {
  right: 30px;
}

.action-btn:hover {
  background-color: #2471eb;
  color: white;
}
.carousel-container {
  direction: ltr;
  transition: all 1s ease-out;
  width: 330px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}
.carousel-container > * {
  direction: ltr;
}

.carousel {
  display: flex;
  transition: margin 0.3s;
}

.carousel-item {
  flex: 0 0 506px; /* Set the width of each item */
  max-width: 304px;
  border-radius: 20px;
  margin: 0 20px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
