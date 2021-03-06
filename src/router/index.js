import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import WorkoutsIndex from "../views/WorkoutsIndex";
import WorkoutsNew from "../views/WorkoutsNew";
import WorkoutsShow from "../views/WorkoutsShow";
import WorkoutsEdit from "../views/WorkoutsEdit";
import ExercisesIndex from "../views/ExercisesIndex";
import ExercisesShow from "../views/ExercisesShow";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/workouts",
    name: "workouts-index",
    component: WorkoutsIndex,
  },
  {
    path: "/workouts/new",
    name: "workouts-new",
    component: WorkoutsNew,
  },
  {
    path: "/workouts/:id",
    name: "workouts-show",
    component: WorkoutsShow,
  },
  {
    path: "/workouts/:id/edit",
    name: "workouts-edit",
    component: WorkoutsEdit,
  },
  {
    path: "/exercises",
    name: "exercises-index",
    component: ExercisesIndex,
  },
  {
    path: "/exercises/:id",
    name: "exercises-show",
    component: ExercisesShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
