<template>
  <div class="main" v-for="produto in products" :key="produto.id">
    <h4>Atualizar Produto</h4>
    <div class="alert alert-success" v-if="ok">
      <h4>Dados Atualizados com Sucesso!</h4>
    </div>
    <div v-else-if="error">
      <h4>{{ message }}</h4>
    </div>
    <div class="form">
      <form>
        <div class="row">
          <label for="">Descrição</label>
          <input v-model="produto.name" class="ml-3" type="text" />
        </div>

        <div class="row">
          <label for="">Quantidade</label>
          <input v-model="produto.amount" class="ml-3" type="text" />
        </div>

        <div class="row">
          <label for="">Preço</label>
          <input v-model="produto.price" class="ml-3" type="text" />
        </div>
        <div class="botao">
          <button v-on:click="updateProduto(produto)" class="btn btn-warning">
            Atualizar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
      message: "errrrroorrr",
      ok: false,
      error: false,
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions("products", ["findProductById", "updateProducts"]),

    async updateProduto(produto) {
      const update = {
        id: produto.id,
        name: produto.name,
        amount: produto.amount,
        price: produto.price,
      };
      try {
        await this.updateProducts(update);
        this.ok = true;
        await this.findProductById(produto.id);
      } catch (err) {
        err.data
          ? (this.message = err.data.message)
          : (this.message = "Não foi possível atualizar o produto");
        this.error = true;
      }
    },
  },
  created() {
    this.findProductById(this.$route.params.id);
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