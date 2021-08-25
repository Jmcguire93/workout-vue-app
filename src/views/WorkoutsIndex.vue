<template>
  <div class="workouts-index">
    <!-- Main Wrapper -->
    <div id="main-wrapper">
      <div class="wrapper style1">
        <div class="inner">
          <!-- Feature 1 -->
          <section class="container box feature1">
            <div class="row">
              <div class="col-12">
                <header class="first major">
                  <h2>View user created workouts!</h2>
                  <p>
                    Checkout some of the following
                    <strong>workouts</strong>
                    ...
                  </p>
                </header>
              </div>
              <div v-for="workout in workouts" :key="workout.id" id="main-wrapper">
                <div class="col-4 col-12-medium">
                  <section>
                    <router-link v-bind:to="`/workouts/${workout.id}`" class="image featured">
                      <span><img :src="getExerciseImage(workout)" alt="" /></span>
                    </router-link>
                    <header>
                      <h3>{{ workout.name }}</h3>
                      <p>{{ workout.description }}</p>
                      <p>Created by: {{ workout.user.username }}</p>
                    </header>
                  </section>
                </div>
                <!-- <div class="col-4 col-12-medium">
                  <section>
                    <a href="#" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
                    <header class="second icon solid fa-cog">
                      <h3>{{ workout.name }}</h3>
                      <p>{{ workout.description }}</p>
                    </header>
                  </section>
                </div>
                <div class="col-4 col-12-medium">
                  <section>
                    <a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
                    <header class="second icon solid fa-chart-bar">
                      <h3>{{ workout.name }}</h3>
                      <p>{{ workout.description }}</p>
                    </header>
                  </section>
                </div> -->
              </div>

              <div class="col-12">
                <p>
                  Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus. Praesent semper bibendum
                  ipsum, et tristique augue fringilla eu. Vivamus id risus vel dolor auctor euismod quis eget mi. Etiam
                  eu ante risus. Aliquam erat volutpat. Aliquam luctus mattis lectus sit amet pulvinar. Nam nec turpis.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <!-- <div class="wrapper style2">
						<div class="inner"> -->
    <!-- <h1>{{ message }}</h1> -->
    <!-- <div v-for="workout in workouts" :key="workout.id">
      <h2>Name: {{ workout.name }}</h2>
      <p>Created by: {{ workout.user.username }}</p>
      <p>Description: {{ workout.description }}</p>
      
      <p><router-link v-bind:to="`/workouts/${workout.id}`">Link to workout</router-link></p>
    </div> -->
  </div>
</template>

<style scoped>
.image img {
  display: block;
  width: 300px;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
}
</style>

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
    getExerciseImage: function (workout) {
      // debugger;
      const workout_exercises = workout.workout_exercises;

      if (workout_exercises.length) {
        const [workout_exercise] = workout_exercises;
        const exercise = workout.exercises.find((e) => e.id == workout_exercise.exercise_id);
        return exercise.image;
      }
    },
  },
};
</script>
