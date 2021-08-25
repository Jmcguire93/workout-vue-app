<template>
  <div class="home">
    <!-- Banner -->
    <div id="banner">
      <h2>
        <strong>WorkoutApp:</strong>
        A free responsive site template
        <br />
        built on HTML5 and CSS3 by
        <a href="http://html5up.net">HTML5 UP</a>
      </h2>
      <p>Does this statement make you want to click the big shiny button?</p>
      <a href="#" class="button large icon solid fa-check-circle">Yes it does</a>
    </div>
    <div id="main-wrapper">
      <div class="wrapper style1">
        <div class="inner">
          <section class="container box feature1">
            <div class="row">
              <div class="col-12">
                <header class="first major">
                  <h2>This is an important heading</h2>
                  <p>
                    And this is where we talk about why we’re
                    <strong>pretty awesome</strong>
                    ...
                  </p>
                </header>
              </div>
              <div class="col-4 col-12-medium">
                <section>
                  <a href="/workouts" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
                  <header class="second icon solid fa-user">
                    <h3>Workouts</h3>
                    <p>And a subtitle</p>
                  </header>
                </section>
              </div>
              <div class="col-4 col-12-medium">
                <section>
                  <a href="/exercises" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
                  <header class="second icon solid fa-cog">
                    <h3>Exercises</h3>
                    <p>And another subtitle</p>
                  </header>
                </section>
              </div>
              <div class="col-4 col-12-medium">
                <section>
                  <a href="/workouts/new" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
                  <header class="second icon solid fa-chart-bar">
                    <h3>Create Workout</h3>
                    <p>And yes, a subtitle</p>
                  </header>
                </section>
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
                    <a href="/workouts" class="image left"><img src="images/pic04.jpg" alt="" /></a>
                    <div>
                      <header>
                        <span class="date">{{ workout.created_at }}</span>
                        <h3>
                          <a href="#">{{ workout.name }}</a>
                        </h3>
                      </header>
                      <p>
                        {{ workout.description }}
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

<style></style>

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
  },
};
</script>
