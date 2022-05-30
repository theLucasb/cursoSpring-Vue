<template>
  <div id="nav">
    <div class="login">
      <div class="buttons">
        <router-link to="/login">
          <button class="btn btn-primary btn-sm">Login</button>
        </router-link>
        <router-link class="link ml-3 mt-2" to="#">
          <h6>Cadastro</h6>
        </router-link>
      </div>
    </div>
    <Menu />
    <hr />
  </div>
  <router-view />
</template>

<script>
import Menu from "./components/Menu";

export default {
  components: { Menu },
};
</script>

<style lang="scss">
@import "scss/colors.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  .login {
    width: 100%;
    background-color: $light;
    .buttons {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 4%;
      .link {
        text-decoration: none;
      }
    }
  }
}
</style>
