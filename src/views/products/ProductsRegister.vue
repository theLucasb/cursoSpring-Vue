<template>
  <div class="main">
    <h1>Novos Produtos</h1>
    <div class="form">
      <form>
        <div class="row">
          <label for="">Descrição</label>
          <input v-model="form.name" class="ml-3" type="text" />
        </div>

        <div class="row">
          <label for="">Quantidade</label>
          <input v-model="form.amount" class="ml-3" type="text" />
        </div>

        <div class="row">
          <label for="">Preço</label>
          <input v-model="form.price" class="ml-3" type="text" />
        </div>
        <div class="botao">
          <button v-on:click="addProdutos" class="btn btn-primary">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        name: "",
        amount: "",
        price: "",
      },
    };
  },
  methods: {
    ...mapActions(["addProducts"]),

    addProdutos(add) {
      add = {
        name: this.form.name,
        amount: this.form.amount,
        price: this.form.price,
      };
      this.addProducts(add);

      this.form.name = "";
      this.form.amount = "";
      this.form.price = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .row {
      padding: 1.4%;
      display: flex;
      align-items: center;
      input {
        border: none;
        border-bottom: 1px solid grey;
      }
      input:focus {
        outline: none;
      }
    }
  }
}
</style>