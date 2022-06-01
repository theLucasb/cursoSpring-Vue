<template>
  <div>
    <div class="categories">
      <h1>Categorias</h1>
      <div
        class="list"
        v-for="category in categories.categories"
        :key="category.id"
      >
        <div class="categories">
          <div class="dados">{{ category.id }}</div>
          <div class="dados">
            <button class="btn" v-on:click="mostrarProdutos(category.id)">
              {{ category.name }}
            </button>
          </div>
        </div>
        <div class="row" v-for="produto in products.products" :key="produto.id">
          <div v-if="produto.category" class="produtos">
            <ul
              v-if="
                produto.category.id == productId && category.id == productId
              "
            >
              <li>
                {{ produto.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      productId: "",
    };
  },
  methods: {
    ...mapActions("categories", ["getCategories"]),
    ...mapActions("products", ["getProducts"]),

    mostrarProdutos(id) {
      id != this.productId ? (this.productId = id) : (this.productId = "");
      console.log(this.productId);
    },
  },
  created() {
    this.getCategories();
    this.getProducts();
  },
  computed: {
    ...mapState(["categories", "products"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors.scss";
.categories {
  align-items: center;
  text-align: center;
  .list {
    width: 50%;
    margin-left: 22.5%;
    align-items: center;
    padding: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid grey;
    .dados {
      padding: 0.7%;
    }
  }
  .categories {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: $light;
  }
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .produtos {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        list-style: none;
        border-bottom: solid 1px gray;
      }
    }
  }
}
.vuex {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 900;
  align-items: center;
  button {
    font-size: 32px;
  }
}
.produtos {
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    border-bottom: solid 1px black;
  }
}
</style>