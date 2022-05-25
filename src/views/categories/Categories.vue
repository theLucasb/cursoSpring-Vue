<template>
  <div>
    <div class="categories">
      <h1>Categories</h1>
      <div
        class="list"
        v-for="category in categories.categories"
        :key="category.id"
      >
        <div class="dados">{{ category.id }}</div>
        <div class="dados">{{ category.name }}</div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      produtos: "",
    };
  },
  methods: {
    // getCategories() {
    //   axios.get("http://localhost:8081/categories").then((resp) => {
    //     this.categories = resp.data;
    //   });
    // },

    ...mapActions(["getCategories"]),
  },
  created() {
    this.getCategories();
  },
  computed: {
    ...mapState(["categories"]),
  },
};
</script>

<style lang="scss" scoped>
.categories {
  align-items: center;
  text-align: center;
  .list {
    width: 50%;
    margin-left: 22.5%;
    align-items: center;
    padding: 1%;
    display: flex;
    justify-content: center;
    border: solid 1px grey;
    .dados {
      padding: 0.7%;
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