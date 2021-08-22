<template>
  <div class="workouts-show">
    <div class="container">
      <h2>{{ workout.name }}</h2>
      <p>{{ workout.description }}</p>
      <p>Created by: {{ user.username }}</p>
      <div v-for="(exercise, index) in exercises" :key="exercise.id">
        <!-- <div v-for="workout_exercise in workout_exercises" :key="workout_exercise.id"> -->
        <p>Exercise: {{ exercise.name }}</p>
        <p>Sets: {{ workout_exercises[index].sets }}</p>
        <p>Reps: {{ workout_exercises[index].reps }}</p>
        <p>Weight: {{ workout_exercises[index].weight }}</p>
        <p>Notes: {{ workout_exercises[index].notes }}</p>

        <li v-if="$parent.getUserId() == user_id">
          <button v-on:click="openModal()">Edit Exercise</button>
        </li>
      </div>
      <dialog id="workout-exercises">
        <form method="dialog">
          <p>
            Sets:
            <input type="text" v-model="newWorkoutExerciseParams.sets" />
          </p>
          <p>
            Reps:
            <input type="text" v-model="newWorkoutExerciseParams.reps" />
          </p>
          <p>
            Weight:
            <input type="text" v-model="newWorkoutExerciseParams.weight" />
          </p>
          <p>
            Notes:
            <input type="text" v-model="newWorkoutExerciseParams.notes" />
          </p>
          <button>Close</button>
          <button v-on:click="updateWorkoutExercise()">Update Exercise</button>
        </form>
      </dialog>

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
      exercises: [],
      user: {},
      user_id: localStorage.getItem("user_id"),
      workout_exercises: [],
      newWorkoutExerciseParams: {},
      currentWorkoutExercise: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/workouts/" + this.$route.params.id).then((response) => {
      this.workout = response.data;
      this.exercises = response.data.exercises;
      this.user = response.data.user;
      this.workout_exercises = response.data.workout_exercises;
      console.log("Current user id", this.user_id);
      console.log("This workout", this.workout.user_id);
      console.log("Exercises", this.exercises);
      console.log("Users", this.user);
      console.log("This workout", this.workout);
      console.log("Jointable", response.data.workout_exercises);
    });
  },
  methods: {
    openModal: function () {
      document.querySelector("#workout-exercises").showModal();
    },
    updateWorkoutExercise: function () {
      axios.patch(`/workout_exercises/${this.$route.params.id}`, this.newWorkoutExerciseParams).then((response) => {
        console.log(response.data);
        this.$router.push(`/workouts/${this.$route.params.id}`);
      });
    },
  },
};
</script>
