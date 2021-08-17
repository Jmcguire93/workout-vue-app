import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WorkoutsIndex from "../views/WorkoutsIndex";
import ExercisesIndex from "../views/ExercisesIndex";

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
    path: "/workouts",
    name: "workouts-index",
    component: WorkoutsIndex,
  },
  {
    path: "/exercises",
    name: "exercises-index",
    component: ExercisesIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
