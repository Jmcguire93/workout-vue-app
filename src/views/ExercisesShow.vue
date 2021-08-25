<template>
  <div class="exercises-show">
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
                        <h2>{{ exercise.name }}</h2>
                        <p>{{ exercise.muscle_group }}</p>
                      </header>

                      <span class="image featured">
                        <img v-bind:src="exercise.image" alt="exercise.name" />
                      </span>

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
                        <h2>Instructions</h2>
                      </header>
                      <p>
                        {{ exercise.instructions }}
                      </p>
                      <footer>
                        <p>
                          <!-- v-if="$parent.getUserId() == user_id"> -->
                          <!-- <button v-on:click="openModal()">Add Exercise</button> -->
                          <a v-on:click="openModal()" class="button icon solid fa-info-circle">Add Exercise</a>
                        </p>
                      </footer>
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
      <!-- <h2>{{ exercise.name }}</h2>
      <p>{{ exercise.muscle_group }}</p>
      <p>{{ exercise.instructions }}</p>
      <img v-bind:src="exercise.image" alt="exercise.name" />
      <li v-if="$parent.getUserId() == user_id">
        <button v-on:click="openModal()">Add Exercise</button>
      </li>
      <router-link to="/exercises">Back to all exercises</router-link> -->
      <dialog id="workout-exercises">
        <form method="dialog">
          <select v-model="selected">
            <!-- <option disabled value="">Please select one</option> -->
            <!-- <option>{{ workout }}</option> -->
            <option v-for="workout in workouts" :key="workout.id">{{ workout.name }}</option>
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
      selectedWorkoutId: 0,
      selected: "",
      user_id: localStorage.getItem("user_id"),
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
      for (var i = 0; i < this.workouts.length; i++) {
        if (this.workouts[i].name === this.selected) {
          this.selectedWorkoutId = this.workouts[i].id;
        }
      }
      console.log(this.selectedWorkoutId);
      this.newWorkoutExerciseParams["workout_id"] = this.selectedWorkoutId;
      this.newWorkoutExerciseParams["exercise_id"] = this.exercise.id;

      axios
        .post("/workout_exercises", this.newWorkoutExerciseParams)
        .then((response) => {
          this.$router.push(`/workouts/${this.selectedWorkoutId}`);
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
        console.log("User workouts:", this.workouts);
      });
    },
  },
};
</script>
