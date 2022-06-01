<template>
  <div class="conteudo">
    <ul>
      <router-link to="/">
        <li>
          <img
            src="./../assets/fullstack.png"
            width="100"
            alt="Course Fullstack"
          />
        </li>
      </router-link>
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="/about">
        <li>Sobre nós</li>
      </router-link>
      <router-link v-if="session || token.length > 12" to="/categories">
        <li>Categories</li>
      </router-link>
      <router-link v-if="session || token.length > 12" to="/products">
        <li>Produtos</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      session: false,
    };
  },
  computed: {
    username() {
      return localStorage.username;
    },
    token() {
      // return localStorage.token;
      return this.$store.state.user.user.token;
    },
  },
  mounted() {
    if (localStorage.token) {
      this.session = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.conteudo {
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    li {
      margin-left: 1%;
      width: 100px;
    }
  }
}
</style>