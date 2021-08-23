<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <router-link to="/exercises">Exercises</router-link>
    |
    <router-link to="/workouts">Workouts</router-link>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to WorkoutApp!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
