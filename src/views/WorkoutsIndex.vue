<template>
  <div class="workouts-index">
    <h1>{{ message }}</h1>
    <div v-for="workout in workouts" :key="workout.id">
      <h2>Name: {{ workout.name }}</h2>
      <p>Description: {{ workout.description }}</p>
      <p>Created by: {{ workout.user.username }}</p>
      <!-- <img v-bind:src="workout.image" alt="workout.name" /> -->
      <p><router-link v-bind:to="`/workouts/${workout.id}`">Link to workout</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Workouts",
      workouts: [],
      newWorkoutParams: {},
      currentWorkout: {},
    };
  },
  created: function () {
    this.indexWorkouts();
  },
  methods: {
    indexWorkouts: function () {
      axios.get("http://localhost:3000/workouts").then((response) => {
        this.workouts = response.data;
        console.log("All workouts:", this.workouts);
      });
    },
  },
};
</script>
