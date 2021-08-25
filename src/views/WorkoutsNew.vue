<template>
  <div class="workouts-new">
    <img v-if="status" :src="`https://http.cat/${status}`" />
    <form class="flex-down" v-on:submit.prevent="createWorkout()">
      <h1>New Workout</h1>
      <div class="flex-down">
        <h1>Name:</h1>
        <input type="text" v-model="newWorkoutParams.name" />
        <h1>Description:</h1>
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

<style>
.post-image-body {
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
}
.post-image-body * {
  flex: 1 1 auto;
  text-align: center;

  margin: 5px;
}
.flex-down {
  display: flex;
  align-items: center;
  flex-direction: column;

  justify-content: space-between;
  /* width: 50%; */
}
.flex-down * {
  margin: 10px;
  max-width: 540px;
}

h1 {
  color: white;
}
</style>

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
