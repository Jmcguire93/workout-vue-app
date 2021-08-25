<template>
  <div class="workouts-show">
    <div class="container">
      <!-- Main Wrapper -->
      <div id="main-wrapper">
        <div class="wrapper style2">
          <div class="inner">
            <div class="container">
              <div class="row">
                <div class="col-8 col-12-medium">
                  <div id="content">
                    <!-- Content -->

                    <article>
                      <header class="major">
                        <h2>{{ workout.name }}</h2>
                        <p>{{ workout.description }}</p>
                      </header>

                      <span class="image featured"><img src="images/pic08.jpg" alt="" /></span>

                      <!-- <p>
                        Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus. Praesent semper mod quis
                        eget mi. Etiam eu ante risus. Aliquam erat volutpat. Aliquam luctus et mattis lectus sit amet
                        pulvinar. Nam turpis nisi consequat etiam lorem ipsum dolor sit amet nullam.
                      </p>

                      <h3>More intriguing information</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus
                        justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem
                        felis, ultricies a bibendum id, bibendum sit amet nisl. Mauris et lorem quam. Maecenas rutrum
                        imperdiet vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci
                        convallis tempor. Etiam a lacus a lacus pharetra porttitor quis accumsan odio. Sed vel euismod
                        nisi. Etiam convallis rhoncus dui quis euismod. Maecenas lorem tellus, congue et condimentum ac,
                        ullamcorper non sapien. Donec sagittis massa et leo semper a scelerisque metus faucibus. Morbi
                        congue mattis mi. Phasellus sed nisl vitae risus tristique volutpat. Cras rutrum commodo luctus.
                      </p>

                      <p>
                        Phasellus odio risus, faucibus et viverra vitae, eleifend ac purus. Praesent mattis, enim quis
                        hendrerit porttitor, sapien tortor viverra magna, sit amet rhoncus nisl lacus nec arcu.
                        Suspendisse laoreet metus ut metus imperdiet interdum aliquam justo tincidunt. Mauris dolor
                        urna, fringilla vel malesuada ac, dignissim eu mi. Praesent mollis massa ac nulla pretium
                        pretium. Maecenas tortor mauris, consectetur pellentesque dapibus eget, tincidunt vitae arcu.
                        Vestibulum purus augue, tincidunt sit amet iaculis id, porta eu purus.
                      </p> -->
                    </article>
                  </div>
                </div>
                <div class="col-4 col-12-medium">
                  <div id="sidebar">
                    <!-- Sidebar -->

                    <section>
                      <header class="major">
                        <h2>Exercises</h2>
                      </header>
                      <div v-for="workout_exercise in workout_exercises" :key="workout_exercise.id">
                        <!-- <div v-for="workout_exercise in workout_exercises" :key="workout_exercise.id"> -->
                        <h3>{{ getExercise(workout_exercise.exercise_id).name }}</h3>
                        <div>Sets: {{ workout_exercise.sets }}, Reps: {{ workout_exercise.reps }}</div>
                        <!-- <div>Reps: {{ workout_exercise.reps }}</div> -->

                        <div>Weight: {{ workout_exercise.weight }}</div>
                        <div>Notes: {{ workout_exercise.notes }}</div>
                        <footer>
                          <a v-on:click="openModal(workout_exercise.id)" class="button icon solid fa-info-circle">
                            Edit Exercise
                          </a>
                        </footer>
                      </div>
                    </section>

                    <!-- <section>
                      <header class="major">
                        <h2>Subheading</h2>
                      </header>
                      <ul class="style2">
                        <li><a href="#">Amet turpis, feugiat et sit amet</a></li>
                        <li><a href="#">Ornare in hendrerit in lectus</a></li>
                        <li><a href="#">Semper mod quis eget mi dolore</a></li>
                        <li><a href="#">Quam turpis feugiat sit dolor</a></li>
                        <li><a href="#">Amet ornare in hendrerit in lectus</a></li>
                        <li><a href="#">Semper mod quisturpis nisi</a></li>
                        <li><a href="#">Consequat etiam lorem phasellus</a></li>
                        <li><a href="#">Amet turpis, feugiat et sit amet</a></li>
                        <li><a href="#">Semper mod quisturpis nisi</a></li>
                      </ul>
                      <footer>
                        <a href="#" class="button icon solid fa-arrow-circle-right">Do Something</a>
                      </footer>
                    </section> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <h2>{{ workout.name }}</h2>
      <p>Created by: {{ user.username }}</p>
      <p>{{ workout.description }}</p>
      <div v-for="workout_exercise in workout_exercises" :key="workout_exercise.id">
        <div v-for="workout_exercise in workout_exercises" :key="workout_exercise.id">
        <p>Exercise: {{ getExercise(workout_exercise.exercise_id).name }}</p>
        <p>Sets: {{ workout_exercise.sets }}, Reps: {{ workout_exercise.reps }}</p>
        <p>Reps: {{ workout_exercise.reps }}</p>
        <p>Weight: {{ workout_exercise.weight }}</p>
        <p>Notes: {{ workout_exercise.notes }}</p>

        <li v-if="$parent.getUserId() == user_id">
          <button v-on:click="openModal(workout_exercise.id)">Edit Exercise</button>
        </li>
      </div> -->
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
