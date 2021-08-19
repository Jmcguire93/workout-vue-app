<template>
  <div class="workouts-show">
    <div class="container">
      <h2>{{ workout.name }}</h2>
      <p>{{ workout.description }}</p>
      <p>Created by: {{ user.username }}</p>
      <div v-for="exercise in exercises" :key="exercise.id">
        <p>{{ exercise.name }}</p>
        <!-- <img v-bind:src="exercise.image" alt="workout.name" /> -->
      </div>

      <li v-if="$parent.getUserId() == workout.current_user_id">
        <router-link v-bind:to="`/workouts/${workout.id}/edit`"><button>Edit workout</button></router-link>
      </li>
      <router-link to="/workouts">Back to all workouts</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      errors: [],
      workout: {},
      exercises: [],
      user: {},
      // current_user_id: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    axios.get("http://localhost:3000/workouts/" + this.$route.params.id).then((response) => {
      this.workout = response.data;
      this.exercises = response.data.exercises;
      this.user = response.data.user;
      console.log(response.data);
    });
  },
};
</script>
