<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <div id="page-wrapper">
      <!-- Header -->
      <div id="header-wrapper">
        <div class="container">
          <!-- Header -->
          <header id="header">
            <div class="inner">
              <!-- Logo -->
              <h1><a href="index.html" id="logo">WorkoutApp</a></h1>

              <!-- Nav -->
              <nav id="nav">
                <ul>
                  <li class="current_page_item"><a href="/">Home</a></li>
                  <li>
                    <a href="#">Get Started</a>
                    <ul>
                      <li v-if="!isLoggedIn()">
                        <a href="/login">Login</a>
                      </li>
                      <li v-if="!isLoggedIn()">
                        <a href="/signup">Signup</a>
                      </li>
                      <li>
                        <a href="/workouts">Workouts</a>
                      </li>
                      <li>
                        <a href="/exercises">Exercises</a>
                      </li>
                      <li v-if="isLoggedIn()">
                        <a href="/workouts/new">Create Workout</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li v-if="isLoggedIn()">
                        <a href="/logout">Logout</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="/workouts">Workouts</a></li>
                  <li><a href="/exercises">Exercises</a></li>
                  <li v-if="isLoggedIn()"><a href="/workouts/new">Create Workout</a></li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
      <router-view />
      <!-- Footer Wrapper -->
      <div id="footer-wrapper">
        <footer id="footer" class="container">
          <div class="row">
            <div class="col-3 col-6-medium col-12-small">
              <!-- Links -->
              <section>
                <h2>Filler Links</h2>
                <ul class="divided">
                  <li><a href="#">Quam turpis feugiat dolor</a></li>
                  <li><a href="#">Amet ornare in hendrerit</a></li>
                  <li><a href="#">Semper mod quisturpis nisi</a></li>
                  <li><a href="#">Consequat etiam phasellus</a></li>
                  <li><a href="#">Amet turpis, feugiat et</a></li>
                  <li><a href="#">Ornare hendrerit lectus</a></li>
                  <li><a href="#">Semper mod quis et dolore</a></li>
                  <li><a href="#">Amet ornare in hendrerit</a></li>
                  <li><a href="#">Consequat lorem phasellus</a></li>
                  <li><a href="#">Amet turpis, feugiat amet</a></li>
                  <li><a href="#">Semper mod quisturpis</a></li>
                </ul>
              </section>
            </div>
            <div class="col-3 col-6-medium col-12-small">
              <!-- Links -->
              <section>
                <h2>More Filler</h2>
                <ul class="divided">
                  <li><a href="#">Quam turpis feugiat dolor</a></li>
                  <li><a href="#">Amet ornare in in lectus</a></li>
                  <li><a href="#">Semper mod sed tempus nisi</a></li>
                  <li><a href="#">Consequat etiam phasellus</a></li>
                </ul>
              </section>

              <!-- Links -->
              <section>
                <h2>Even More Filler</h2>
                <ul class="divided">
                  <li><a href="#">Quam turpis feugiat dolor</a></li>
                  <li><a href="#">Amet ornare hendrerit lectus</a></li>
                  <li><a href="#">Semper quisturpis nisi</a></li>
                  <li><a href="#">Consequat lorem phasellus</a></li>
                </ul>
              </section>
            </div>
            <div class="col-6 col-12-medium imp-medium">
              <!-- About -->
              <section>
                <h2>
                  <strong>ZeroFour</strong>
                  by HTML5 UP
                </h2>
                <p>
                  Hi! This is
                  <strong>ZeroFour</strong>
                  , a free, fully responsive HTML5 site template by
                  <a href="http://twitter.com/ajlkn">AJ</a>
                  for
                  <a href="http://html5up.net/">HTML5 UP</a>
                  . It's
                  <a href="http://html5up.net/license/">Creative Commons Attribution</a>
                  licensed so use it for any personal or commercial project (just credit us for the design!).
                </p>
                <a href="#" class="button alt icon solid fa-arrow-circle-right">Learn More</a>
              </section>

              <!-- Contact -->
              <section>
                <h2>Get in touch</h2>
                <div>
                  <div class="row">
                    <div class="col-6 col-12-small">
                      <dl class="contact">
                        <dt>Twitter</dt>
                        <dd><a href="#">@untitled-corp</a></dd>
                        <dt>Facebook</dt>
                        <dd><a href="#">facebook.com/untitled</a></dd>
                        <dt>WWW</dt>
                        <dd><a href="#">untitled.tld</a></dd>
                        <dt>Email</dt>
                        <dd><a href="#">user@untitled.tld</a></dd>
                      </dl>
                    </div>
                    <div class="col-6 col-12-small">
                      <dl class="contact">
                        <dt>Address</dt>
                        <dd>
                          1234 Fictional Rd
                          <br />
                          Nashville, TN 00000-0000
                          <br />
                          USA
                        </dd>
                        <dt>Phone</dt>
                        <dd>(000) 000-0000</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="col-12">
              <div id="copyright">
                <ul class="menu">
                  <li>&copy; Untitled. All rights reserved</li>
                  <li>
                    Design:
                    <a href="http://html5up.net">HTML5 UP</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

<script>
// import axios from "axios";
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
