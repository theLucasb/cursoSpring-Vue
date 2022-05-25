<template>
  <div class="conteudo">
    <ul>
      <router-link to="/">
        <li>
          <img src="./../assets/fullstack.png" width="100" alt="Home" />
        </li>
      </router-link>
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="/about">
        <li>Sobre nós</li>
      </router-link>
      <router-link to="/categories">
        <li>Categories</li>
      </router-link>
      <router-link to="/products">
        <li>Products</li>
      </router-link>
    </ul>
  </div>
</template>

<script >
export default {};
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