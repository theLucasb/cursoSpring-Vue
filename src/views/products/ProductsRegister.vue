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

        <div class="row2">
          <label for="preço">Preço</label>
          <input
            v-model.lazy="price"
            v-money="money"
            class="ml-3"
            type="text"
          />
          <div class="row mt-3">
            <select id="categorias" v-model="form.category">
              <option value="">Escolha a Categoria</option>
              <option value="1">Eletrônico</option>
              <option value="2">Papelaria</option>
              <option value="3">Cosméticos</option>
              <option value="4">Vestuário</option>
            </select>
          </div>
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
import { VMoney } from "v-money";

export default {
  directives: { money: VMoney },
  data() {
    return {
      form: {
        name: "",
        amount: "",
        category: "",
      },
      price: 0,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: "",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
    };
  },

  methods: {
    ...mapActions("products", ["addProducts"]),

    addProdutos(add) {
      this.price = this.price.replace(/\./g, "");
      this.price = this.price.slice(3).replace(",", ".");
      add = {
        name: this.form.name,
        amount: this.form.amount,
        price: this.price,
        category: { id: parseInt(this.form.category) },
      };
      console.log(add);
      this.addProducts(add);
      this.form.name = "";
      this.form.amount = "";
      this.price = "";
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
    // padding-right: 0.5%;
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
      #categorias {
        width: 40%;
        border: none;
        background-color: white;
        border-bottom: 1px solid grey;
        margin-left: 4%;
        align-items: flex-end;

        option {
          direction: rtl;
        }
      }
      #categorias:focus {
        outline: none;
      }
    }
    .row2 {
      width: 100%;
      padding: 0.5%;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-left: 10%;
      label {
        align-items: flex-start;
        text-align: right;
        width: 11%;
      }
      input {
        width: 28%;
        border: none;
        border-bottom: 1px solid grey;
      }
      input:focus {
        outline: none;
      }
      #categorias {
        width: 70%;
        border: none;
        background-color: white;
        border-bottom: 1px solid grey;
        margin-left: 7%;
        option {
          direction: rtl;
        }
      }
      #categorias:focus {
        outline: none;
      }
    }
  }
}
</style>