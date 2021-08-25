<template>
  <div class="workouts-edit">
    <form v-on:submit.prevent="updateWorkout()">
      <h1>Edit Workout</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="currentWorkoutParams.name" />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" v-model="currentWorkoutParams.description" />
      </div>

      <input type="submit" value="Submit" />
    </form>
    <button v-on:click="destroyWorkout()">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentWorkoutParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/workouts/${this.$route.params.id}`).then((response) => {
      console.log("Workout info:", response.data);
      this.currentWorkoutParams = response.data;
    });
  },
  methods: {
    updateWorkout: function () {
      axios.patch(`/workouts/${this.$route.params.id}`, this.currentWorkoutParams).then((response) => {
        console.log(response.data);
        this.$router.push("/workouts");
      });
    },
    destroyWorkout: function () {
      axios.delete(`/workouts/${this.$route.params.id}`).then((response) => {
        console.log("Workout deleted", response.data);
        this.$router.push("/workouts");
      });
    },
  },
};
</script>

<!-- line 52 push to current user workouts/show ? -->
