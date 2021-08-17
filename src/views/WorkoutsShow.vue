<template>
  <div class="workouts-show">
    <div class="container">
      <h2>{{ workout.name }}</h2>
      <p>{{ workout.description }}</p>
      <p>Created by: {{ workout.user.username }}</p>
      <!-- <img v-bind:src="workout.image" alt="workout.name" /> -->
      <li v-if="$parent.getUserId() == workout.user_id">
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
    };
  },
  created: function () {
    axios.get("http://localhost:3000/workouts/" + this.$route.params.id).then((response) => {
      this.workout = response.data;
      console.log(response.data);
    });
  },
};
</script>
