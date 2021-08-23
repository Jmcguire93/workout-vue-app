<template>
  <div class="workouts-show">
    <div class="container">
      <h2>{{ workout.name }}</h2>
      <p>Created by: {{ user.username }}</p>
      <p>{{ workout.description }}</p>
      <div v-for="workout_exercise in workout_exercises" :key="workout_exercise.id">
        <!-- <div v-for="workout_exercise in workout_exercises" :key="workout_exercise.id"> -->
        <p>Exercise: {{ getExercise(workout_exercise.exercise_id).name }}</p>
        <p>Sets: {{ workout_exercise.sets }}, Reps: {{ workout_exercise.reps }}</p>
        <!-- <p>Reps: {{ workout_exercise.reps }}</p> -->
        <p>Weight: {{ workout_exercise.weight }}</p>
        <p>Notes: {{ workout_exercise.notes }}</p>

        <li v-if="$parent.getUserId() == user_id">
          <button v-on:click="openModal(workout_exercise.id)">Edit Exercise</button>
        </li>
      </div>
      <dialog id="workout-exercises">
        <form method="dialog">
          <p>
            Sets:
            <input type="text" v-model="exerciseParams.sets" />
          </p>
          <p>
            Reps:
            <input type="text" v-model="exerciseParams.reps" />
          </p>
          <p>
            Weight:
            <input type="text" v-model="exerciseParams.weight" />
          </p>
          <p>
            Notes:
            <input type="text" v-model="exerciseParams.notes" />
          </p>
          <button>Close</button>
          <button v-on:click="updateWorkoutExercise()">Update Exercise</button>
          <button v-on:click="destroyWorkoutExercise()">Delete Exercise</button>
        </form>
      </dialog>

      <li v-if="$parent.getUserId() == workout.user_id">
        <router-link v-bind:to="`/workouts/${workout.id}/edit`"><button>Edit workout</button></router-link>
      </li>
      <router-link to="/workouts">Back to all workouts</router-link>
      |
      <router-link to="/exercises">Add Exercise</router-link>
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
      exerciseParams: {},
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
    openModal: function (exercise_id) {
      // debugger;
      document.querySelector("#workout-exercises").showModal();
      var exercise_found = this.workout_exercises.find((exercise) => exercise.id == exercise_id);
      console.log(exercise_id);
      console.log(exercise_found);
      this.exerciseParams = { ...exercise_found };
    },
    updateWorkoutExercise: function () {
      axios.patch(`/workout_exercises/${this.exerciseParams.id}`, this.exerciseParams).then((response) => {
        console.log(response.data);
        // this.$router.push(`/workouts/${this.$route.params.id}`);
        this.$router.go();
      });
    },
    destroyWorkoutExercise: function () {
      axios.delete(`/workout_exercises/${this.exerciseParams.id}`).then((response) => {
        console.log("Workout deleted", response.data);
        this.$router.go();
      });
    },
    getExercise: function (exercise_id) {
      // debugger;
      // return this.exercises.find((exercise) => (exercise.id = exercise_id));
      var findExercise = this.exercises.find((exercise) => exercise.id == exercise_id);
      console.log("Find Exercise", findExercise);
      console.log("Exercise ID", exercise_id);
      return findExercise;
    },
  },
};
</script>
