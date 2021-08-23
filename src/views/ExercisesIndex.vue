<template>
  <div class="exercises-index">
    <h1>{{ message }}</h1>
    <div v-for="exercise in exercises" :key="exercise.id">
      <h2>{{ exercise.name }}</h2>
      <p>Muscle Group: {{ exercise.muscle_group }}</p>
      <!-- <p>Instructions: {{ exercise.instructions }}</p> -->
      <img v-bind:src="exercise.image" alt="exercise.name" />
      <p><router-link v-bind:to="`/exercises/${exercise.id}`">Link to exercise</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Exercises",
      exercises: [],
      newExerciseParams: {},
      currentExercise: {},
    };
  },
  created: function () {
    this.indexExercises();
  },
  methods: {
    indexExercises: function () {
      axios.get("http://localhost:3000/exercises").then((response) => {
        this.exercises = response.data;
        console.log("All exercises:", this.exercises);
      });
    },
  },
};
</script>
