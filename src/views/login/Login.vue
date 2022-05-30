<template>
  <div class="main">
    <div class="login">
      <h2>Login</h2>
      <label class="mt-2" for="username">Username:</label>
      <input v-model="username" type="text" />
      <label class="mt-3" for="password">Password:</label>
      <input v-model="password" type="password" />
      <button v-on:click="enviarDadosLogin" class="btn btn-primary mt-3">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    enviarDadosLogin() {
      const dados = {
        username: this.username,
        password: this.password,
      };
      Axios.post("http://localhost:8081/login", dados).then((response) => {
        localStorage.setItem("token", response.data);
        this.$router.push("/");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors.scss";
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  .login {
    display: flex;
    flex-direction: column;
    width: 40%;
    background-color: $light;
    padding: 4%;
    border-radius: 7%;
    input {
      border: none;
      border-bottom: solid 0.5px $secondary;
      border-radius: 4%;
    }
    input:focus {
      outline: none;
    }
  }
}
</style>