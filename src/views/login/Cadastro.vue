<template>
  <div class="main">
    <div class="login">
      <h3>Insira seus dados</h3>
      <label class="mt-2" for="email">Email:</label>
      <input v-model="email" type="text" />
      <label class="mt-2" for="username">Username:</label>
      <input v-model="username" type="text" />
      <label class="mt-3" for="password">Password:</label>
      <input v-model="password" type="password" />
      <button v-on:click="enviarDadosCadastro" class="btn btn-primary mt-3">
        Cadastrar
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirmed: false,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions("user", ["usersRegisterAction", "emailConfirmed"]),

    async enviarDadosCadastro() {
      const user = {
        email: this.email,
        username: this.username,
        password: this.password,
      };
      await this.usersRegisterAction(user);

      const email = {
        emailTo: user.email,
        subject: "Confirmação de cadastro",
        text: `<h4>Confimação do Seu Cadastro Adm Fullstack</h4>
                  <td style="border-radius: 4px; background: #0095ff; color:white; text-align: center;">
                      <a href="http://localhost:8080/#/registration?email=${user.email}" style="background: #0095FF; border: 1px solid #0077cc; box-shadow: inset 0 1px 0 0 rgba(102,191,255,.75); font-family: arial, sans-serif; font-size: 17px; line-height: 17px; color: #ffffff; text-align: center; text-decoration: none; padding: 13px 17px; display: block; border-radius: 4px;">
                       Confirmar Cadastro
                   </a>
               </td>`,
      };
      await this.emailConfirmed(email);
      this.confirmed = true;
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
      background-color: $light;
    }
    input:focus {
      outline: none;
    }
  }
}
</style>