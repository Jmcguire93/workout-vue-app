<template>
  <div class="signup">
    <form class="flex-down" v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <h1>Username:</h1>
        <input type="text" v-model="newUserParams.username" />
      </div>
      <div>
        <h1>Email:</h1>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <h1>Password:</h1>
        <input type="password" v-model="newUserParams.password" />
      </div>
      <div>
        <h1>Password confirmation:</h1>
        <input type="password" v-model="newUserParams.password_confirmation" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style>
.post-image-body {
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
}
.post-image-body * {
  flex: 1 1 auto;
  text-align: center;

  margin: 5px;
}
.flex-down {
  display: flex;
  align-items: center;
  flex-direction: column;

  justify-content: space-between;
  /* width: 50%; */
}
.flex-down * {
  margin: 10px;
  max-width: 540px;
}
h1 {
  color: white;
}
h1 {
  color: white;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
