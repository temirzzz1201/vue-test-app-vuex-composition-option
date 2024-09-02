<template>
  <nav class="navbar">
    <div @click="$router.push('/')" class="navbar__logo">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')" class="navbar__btn">
        Посты
      </my-button>
      <my-button @click="$router.push('/')" class="navbar__btn">
        Главная
      </my-button>
      <my-button @click="$router.push('/store')" class="navbar__btn">
        Посты с vuex
      </my-button>
      <my-button @click="$router.push('/composition')" class="navbar__btn">
        Посты с composition api
      </my-button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 50px;
  padding: 0 20px;
  background: teal;
  box-shadow: 2px 2px 4px gray;
  &__btns {
    display: flex;
    justify-content: space-between;
    // width: 100%;
    // max-width: 200px;
  }
  &__btn {
    background: none;
    border: none;
    font-size: 16px;
    color: aliceblue;
    cursor: pointer;
    margin-right: 10px;
    margin-left: auto;
  }
  &__btn:last-child {
    margin-right: 0;
  }
  &__logo {
    font-size: 24px;
    color: aliceblue;
    cursor: pointer;
  }
}
</style>
