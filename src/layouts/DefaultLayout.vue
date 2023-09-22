<script setup>
import Nav from "@/components/default/Nav.vue";
import SideBar from "@/components/default/SideBar.vue";
import HomeHeader from "@/components/default/headers/HomeHeader.vue";
import ActionHeader from "@/components/default/headers/ActionHeaders.vue";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
onMounted(() => {
  window.addEventListener("resize", () => {
    //handle profile mobile page in desktop and redirect to home
    if (route.path === "/profile" && window.innerWidth > 960) {
      router.push({ path: "/" });
    }
  });
});

const actionHeaders = [
  { path: "/", component: HomeHeader, props: {} },
  {
    path: "/activities",
    component: ActionHeader,
    props: { action: "فعالیت", icon: "add" },
  },
  {
    path: "/events",
    component: ActionHeader,
    props: { action: "رویداد", icon: "add" },
  },
  {
    path: "/activityTypes",
    component: ActionHeader,
    props: { action: "نوع فعالیت", icon: "add" },
  },
  {
    path: "/profile",
    component: ActionHeader,
    props: { action: "پروفایل", icon: "notification" },
  },
];
</script>
<template>
  <template v-for="header in actionHeaders">
    <component
      v-if="header.path === route.path"
      v-bind="{ ...header.props }"
      :is="header.component"
    />
  </template>
  <main class="home full-container">
    <!--Profile Header-->
    <SideBar />
    <router-view></router-view>
    <!-- Navigation -->
    <Nav />
  </main>
</template>
