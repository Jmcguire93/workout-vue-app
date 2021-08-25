<template>
  <div class="login d-flex justify-content-center">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div class="post-image-body">
        <h1>Email:</h1>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <div class="post-image-body">
        <h1>Password:</h1>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style>
form {
  align-items: center;
  text-align: center;
  width: 50%;
}

input {
  width: 20%;
  text-align: center;
}
/* .post-image-body {
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
} */
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
}
.flex-down * {
  margin: 10px;
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
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
