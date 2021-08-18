<template>
  <div class="exercises-show">
    <div class="container">
      <h2>{{ exercise.name }}</h2>
      <p>{{ exercise.muscle_group }}</p>
      <p>{{ exercise.instructions }}</p>
      <img v-bind:src="exercise.image" alt="exercise.name" />
      <li v-if="$parent.getUserId() == exercise.user_id">
        <button v-on:click="openModal()">Add Exercise</button>
        <!-- This router link (line 9) needs to open a form to input a workout id and create workoutexercises instance. -->
      </li>
      <router-link to="/exercises">Back to all exercises</router-link>
      <dialog id="workout-exercises">
        <form method="dialog">
          <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span>Selected: {{ selected }}</span>
          <h1>Exercise Info</h1>
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
          <p>
            Workout ID to add to:
            <input type="text" v-model="newWorkoutExerciseParams.workout_id" />
          </p>
          <p>
            Exercise ID to add to:
            <input type="text" v-model="newWorkoutExerciseParams.exercise_id" />
          </p>
          <!-- <button v-on:click="updateWorkoutExercise(currentWorkoutExercise)">Update</button>
          <button v-on:click="destroyWorkoutExercise(currentWorkoutExercise)">Destroy</button> -->
          <button>Close</button>
          <button v-on:click="createWorkoutExercise()">Add Exercise</button>
        </form>
      </dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      exercise: {},
      newWorkoutExerciseParams: {},
      currentWorkoutExercise: {},
      workouts: [],
      selectedWorkout: {},
      selected: "",
    };
  },
  created: function () {
    axios.get("http://localhost:3000/exercises/" + this.$route.params.id).then((response) => {
      this.exercise = response.data;
      console.log(response.data);
    });
    this.indexWorkouts();
  },
  methods: {
    createWorkoutExercise: function () {
      console.log("Creating a workout!");
      // var params = {
      //   workout_id: x,
      //   exercise_id: this.exercise.id,
      // };
      axios
        .post("/workout_exercises", this.newWorkoutExerciseParams)
        .then((response) => {
          this.$router.push("/workouts");
          console.log("Success!", response.data);
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
    openModal: function () {
      document.querySelector("#workout-exercises").showModal();
    },
    indexWorkouts: function () {
      axios.get("http://localhost:3000/workouts/users_index").then((response) => {
        this.workouts = response.data;
        console.log("All workouts:", this.workouts);
      });
    },
  },
};
</script>
