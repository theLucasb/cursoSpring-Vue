<template>
  <div id="nav">
    <MenuLogin />
    <Menu />
    <hr />
  </div>
  <router-view />
</template>

<script>
import Menu from "./components/Menu";
import MenuLogin from "./components/MenuLogin";

export default {
  components: { Menu, MenuLogin },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  hr {
    border-bottom: 1.4px solid #2c3e50;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
