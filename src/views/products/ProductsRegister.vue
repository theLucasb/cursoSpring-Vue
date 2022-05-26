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
    ...mapActions("products", ["addProducts"]),

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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px gray;
    border-radius: 7%;
    width: 35%;
    padding: 1%;
    .row {
      width: 100%;
      padding: 1%;
      display: flex;
      align-items: baseline;
      justify-content: flex-start;
      label {
        align-items: flex-start;
        text-align: right;
        width: 21%;
      }
      input {
        width: 69%;
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