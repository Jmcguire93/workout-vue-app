<template>
  <div class="home">
    <!-- Banner -->
    <!-- <div id="banner">
      <h2>
        <strong>WorkoutApp:</strong>

        <br />
        A community for exercise creation and exploration
        <a href="http://html5up.net">HTML5 UP</a>
      </h2>
      <p>Does this statement make you want to click the big shiny button?</p>
      <a href="#" class="button large icon solid fa-check-circle">Yes it does</a>
    </div> -->
    <div id="main-wrapper">
      <div class="wrapper style1">
        <div class="inner">
          <section class="container box feature1">
            <div class="row">
              <div class="col-12">
                <header class="first major">
                  <h2>Start working out today</h2>
                  <p>
                    View other users workouts, or
                    <strong>create your own</strong>
                    ...
                  </p>
                </header>
              </div>
              <div class="col-4 col-12-medium">
                <section>
                  <a href="/workouts" class="image featured"><img src="images/exercises6.png" alt="" /></a>
                  <header class="second icon solid fa-user">
                    <h3>Workouts</h3>
                    <p>View user created workouts</p>
                  </header>
                </section>
              </div>
              <div class="col-4 col-12-medium">
                <section>
                  <a href="/exercises" class="image featured"><img src="images/workouts.png" alt="" /></a>
                  <header class="second icon solid fa-chart-bar">
                    <h3>Exercises</h3>
                    <p>Explore exercises</p>
                  </header>
                </section>
              </div>
              <div class="col-4 col-12-medium">
                <section>
                  <a href="/workouts/new" class="image featured"><img src="images/create_workout.jpeg" alt="" /></a>
                  <header class="second icon solid fa-cog">
                    <h3>Create Workout</h3>
                    <p>Create your own</p>
                  </header>
                </section>
              </div>
              <div class="col-12">
                <p>
                  <strong>View, build and create!</strong>
                  Start sharing your exercise experience with others.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="wrapper style3">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col-8 col-12-medium">
              <!-- Article list -->
              <section class="box article-list">
                <h2 class="icon fa-file-alt">Recent Posts</h2>

                <!-- Excerpt -->
                <div v-for="workout in workouts" :key="workout.id" id="main-wrapper">
                  <article class="box excerpt">
                    <a href="/workouts" class="image left recent-post">
                      <img :src="getExerciseImage(workout)" alt="" />
                    </a>
                    <div>
                      <header>
                        <span class="date">
                          <strong>{{ new Date(workout.created_at).toDateString() }}</strong>
                        </span>
                        <h3>
                          <a href="#">{{ workout.name }}</a>
                        </h3>
                      </header>
                      <p>
                        {{ workout.description }}
                      </p>
                      <p>
                        Created by
                        <strong>{{ workout.user.username }}</strong>
                      </p>
                    </div>
                  </article>
                </div>
              </section>
            </div>
            <div class="col-4 col-12-medium">
              <!-- Spotlight -->
              <!-- <section class="box spotlight">
                <h2 class="icon fa-file-alt">Spotlight</h2>
                <article v-for="last_workout in last_workouts" :key="last_workout.id" id="">
                  <a href="/last_workouts" class="">
                    <img :src="getExerciseImage(last_workout)" alt="" />
                  </a>
                  <header>
                    <h3>
                      <a href="">{{ last_workout.name }}</a>
                    </h3>
                    <p>{{ last_workout.description }}</p>
                  </header>
                  <p>
                    {{ workout.description }}
                  </p>
                  <p>
                    Created by
                    <strong>{{ last_workout.user.username }}</strong>
                    <span class="date">
                      <strong>{{ new Date(workout.created_at).toDateString() }}</strong>
                    </span>
                  </p>
                  <footer>
                    <router-link
                      v-bind:to="`/last_workouts/${last_workout.id}`"
                      class="button icon solid fa-info-circle"
                    >
                      Link to Workout
                    </router-link>
                  </footer>
                </article>
              </section> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recent-post img {
  display: block;
  width: 180px;
  height: 167px;
  object-fit: cover;
  border-radius: 8px;
}
.featured img {
  display: block;
  position: inherit;
  width: 380px;
  height: 196px;
  object-fit: cover;
  border-radius: 8px;
}
.spotlight img {
  width: 420px;
}
</style>

<script>
import axios from "axios";
// import WorkoutsShow from "./WorkoutsShow.vue";
// import WorkoutsIndex from "./WorkoutsIndex.vue";

export default {
  components: {},
  data: function () {
    return {
      message: "Welcome to WorkoutApp!",
      workouts: [],
      last_workout: {},
    };
  },
  created: function () {
    this.indexWorkouts();
    this.getLastWorkout();
  },
  methods: {
    indexWorkouts: function () {
      axios.get("http://localhost:3000/workouts").then((response) => {
        this.workouts = response.data;
        console.log("All workouts:", this.workouts);
      });
    },
    getExerciseImage: function (workout) {
      const workout_exercises = workout.workout_exercises;

      if (workout_exercises.length) {
        const [workout_exercise] = workout_exercises;
        const exercise = workout.exercises.find((e) => e.id == workout_exercise.exercise_id);
        return exercise.image;
      }
    },
    getLastWorkout: function () {
      axios.get("http://localhost:3000/last_workout").then((response) => {
        this.last_workout = response.data;
        console.log("All workouts:", this.last_workout);
      });
    },
  },
};
</script>
