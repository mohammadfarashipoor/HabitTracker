<script setup>
const props = defineProps({
  firstActivityType: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="top-ranking__medal-container centerazition medal-container">
    <div class="medal-container__medal-number">
      <svg
        class="medal-container__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="32"
        viewBox="0 0 31 32"
        fill="none"
      >
        <path
          d="M29.34 14.11L27.3 11.74C26.91 11.29 26.595 10.45 26.595 9.85V7.3C26.595 5.71 25.29 4.405 23.7 4.405H21.15C20.565 4.405 19.71 4.09 19.26 3.7L16.89 1.66C15.855 0.774996 14.16 0.774996 13.11 1.66L10.755 3.715C10.305 4.09 9.45001 4.405 8.86501 4.405H6.27001C4.68001 4.405 3.37501 5.71 3.37501 7.3V9.865C3.37501 10.45 3.06001 11.29 2.68501 11.74L0.660007 14.125C-0.209993 15.16 -0.209993 16.84 0.660007 17.875L2.68501 20.26C3.06001 20.71 3.37501 21.55 3.37501 22.135V24.7C3.37501 26.29 4.68001 27.595 6.27001 27.595H8.86501C9.45001 27.595 10.305 27.91 10.755 28.3L13.125 30.34C14.16 31.225 15.855 31.225 16.905 30.34L19.275 28.3C19.725 27.91 20.565 27.595 21.165 27.595H23.715C25.305 27.595 26.61 26.29 26.61 24.7V22.15C26.61 21.565 26.925 20.71 27.315 20.26L29.355 17.89C30.225 16.855 30.225 15.145 29.34 14.11Z"
          fill="#2DC653"
        />
      </svg>
      <span class="medal-container__rate">1</span>
    </div>

    <b class="medal-container__title font-14">{{ props.firstActivityType[0] }}</b>
    <span class="medal-container__title font-14"
      >{{ props.firstActivityType[1] }} فعالیت</span
    >
  </div>
</template>
