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
                  <a href="/workouts" class="image featured"><img src="images/workouts.png" alt="" /></a>
                  <header class="second icon solid fa-user">
                    <h3>Workouts</h3>
                    <p>View user created workouts</p>
                  </header>
                </section>
              </div>
              <div class="col-4 col-12-medium">
                <section>
                  <a href="/exercises" class="image featured"><img src="images/exercises6.png" alt="" /></a>
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
                  WorkoutApp understands the importance of living a healthy lifestyle. With us, you can learn what
                  muscle groups exercises are targetting and how to perform them with our detailed instructions! Not
                  sure where to begin? As a user, you have access to browse all workouts created by other users. Want to
                  get creative? - build your own!
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
                <article>
                  <a href="#" class="image featured"><img src="images/pic07.jpg" alt="" /></a>
                  <header>
                    <h3><a href="#">Neural Implants</a></h3>
                    <p>The pros and cons. Mostly cons.</p>
                  </header>
                  <p>
                    Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus semper mod quisturpis nisi
                    consequat ornare in, hendrerit in lectus semper mod quis eget mi quat etiam lorem. Phasellus quam
                    turpis, feugiat sed et lorem ipsum dolor consequat dolor feugiat sed et tempus consequat etiam.
                  </p>
                  <p>
                    Lorem ipsum dolor quam turpis, feugiat sit amet ornare in, hendrerit in lectus semper mod quisturpis
                    nisi consequat etiam lorem sed amet quam turpis.
                  </p>
                  <footer>
                    <a href="#" class="button alt icon solid fa-file-alt">Continue Reading</a>
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
  width: 332px;
  height: 196px;
  object-fit: cover;
  border-radius: 8px;
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
