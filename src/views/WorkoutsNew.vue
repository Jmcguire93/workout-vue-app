<template>
  <div class="workouts-new">
    <img v-if="status" :src="`https://http.cat/${status}`" />
    <form v-on:submit.prevent="createWorkout()">
      <h1>New Workout!</h1>
      <div>
        Name:
        <input type="text" v-model="newWorkoutParams.name" />
        Description:
        <input type="text" v-model="newWorkoutParams.description" />
        <!-- User Id: -->
        <!-- <input type="text" v-model="newWorkoutParams.user_id" /> -->
        <!-- Image: -->
        <!-- <input type="text" v-model="newWorkoutParams.image" /> -->
      </div>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      // workouts: [],
      errors: [],
      newWorkoutParams: {},
      // currentWorkout: {},
      status: "",
    };
  },
  methods: {
    createWorkout: function () {
      console.log("Creating a workout!");

      axios
        .post("/workouts", this.newWorkoutParams)
        .then((response) => {
          this.$router.push("/workouts");
          console.log("Success!", response.data);
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
  },
};
</script>
