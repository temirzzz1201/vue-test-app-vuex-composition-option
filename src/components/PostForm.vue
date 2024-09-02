<template>
  <form @submit.prevent>
    <h3>Создание Поста</h3>
    <my-input
      v-model.trim="post.title"
      v-focus
      class="input"
      placeholder="Заголовок"
    />
    <my-input v-model.trim="post.body" class="input" placeholder="Содержание" />
    <my-button @click="createPost" class="button">Добавить Пост</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      (this.post.id = Date.now()), this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
  // Глубокое отслеживание объекта
  // watch: {
  //   post: {
  //     handler(newValue) {
  //       console.log(newValue);
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 25px;
}
</style>
