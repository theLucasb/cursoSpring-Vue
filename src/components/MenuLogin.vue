<template>
  <div class="main">
    <div class="login">
      <div v-if="token.length > 12 || session" class="saudacao mr-4 mt-2">
        <h6>Bem vindo {{ username }}</h6>
      </div>
      <div class="buttons">
        <router-link to="/login" v-if="token.length < 12 && !session">
          <button class="btn btn-primary btn-sm mr-3">Login</button>
        </router-link>
        <button
          v-if="token.length > 12 || session"
          @click="resetLogin"
          class="btn btn-primary btn-sm"
        >
          Logout
        </button>
        <router-link
          v-if="token.length < 12 && !session"
          class="link ml-3 mt-2"
          to="/cadastro"
        >
          <h6>Cadastro</h6>
        </router-link>
      </div>
    </div>
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
  methods: {
    resetLogin() {
      localStorage.removeItem("token");
      this.$router.go();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/colors.scss";
.main {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  .login {
    width: 100%;
    background-color: $light;
    display: flex;
    justify-content: flex-end;
    .saudacao {
      color: $info;
    }
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
