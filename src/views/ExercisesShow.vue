<template>
  <div class="exercises-show">
    <div class="container">
      <h2>{{ exercise.name }}</h2>
      <p>{{ exercise.muscle_group }}</p>
      <p>{{ exercise.instructions }}</p>
      <img v-bind:src="exercise.image" alt="exercise.name" />
      <li v-if="$parent.getUserId() == exercise.user_id">
        <router-link v-bind:to="`/exercises/${exercise.id}/edit`"><button>Edit exercise</button></router-link>
        <!-- This router link (line 9) needs to be add to workout instead of edit -->
      </li>
      <router-link to="/exercises">Back to all exercises</router-link>
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
    };
  },
  created: function () {
    axios.get("http://localhost:3000/exercises/" + this.$route.params.id).then((response) => {
      this.exercise = response.data;
      console.log(response.data);
    });
  },
};
</script>
