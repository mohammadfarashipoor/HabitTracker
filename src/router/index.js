const Loginview = () => import("@/views/LoginView.vue");
const SignupView = () => import("@/views/SignupView.vue");
const HomeView = () => import("@/views/HomeView.vue");
const NotFoundView = () => import("@/views/NotFoundView.vue");
const AuthLayout = () => import("@/layouts/AuthLayout.vue");
const DefaultLayout = () => import("@/layouts/DefaultLayout.vue");

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
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFoundView,
  },
];

export default routes;
