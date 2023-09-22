const Loginview = () => import("@/views/LoginView.vue");
const SignupView = () => import("@/views/SignupView.vue");
const HomeView = () => import("@/views/HomeView.vue");
const ActivityView = () => import("@/views/ActivityView.vue");
const ActivityTypeView = () => import("@/views/ActivityTypeView.vue");
const NotFoundView = () => import("@/views/NotFoundView.vue");
const EventView = () => import("@/views/EventView.vue");
const DefaultLayout = () => import("@/layouts/DefaultLayout.vue");
const AuthLayout = () => import("@/layouts/AuthLayout.vue");
const Profile = () => import("@/components/default/Profile.vue");
const ActivityDetail = () =>
  import("@/components/activity/ActivityDetails.vue");
const EventDetail = () => import("@/components/event/EventDetails.vue");

const routes = [
  {
    path: "/auth",
    name: "authentication",
    component: AuthLayout,
    meta: { layout: "auth" },
    children: [
      {
        path: "/login",
        name: "login",
        meta: { isNotAuthenticate: true },
        component: Loginview,
      },
      {
        path: "/signup",
        name: "signup",
        component: SignupView,
      },
    ],
  },
  {
    path: "/",
    name: "defualt",
    meta: { layout: "defualt", requireAuth: true },
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/activities",
        name: "activities",
        component: ActivityView,
      },
      {
        path: "/activities/:id",
        name: "activityDetail",
        component: ActivityDetail,
      },
      {
        path: "/activityTypes",
        name: "activityTypes",
        component: ActivityTypeView,
      },
      {
        path: "/events",
        name: "events",
        component: EventView,
      },
      {
        path: "/events/:id",
        name: "eventDetail",
        component: EventDetail,
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFoundView,
  },
];

export default routes;
