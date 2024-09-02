<template>
  <div class="post">
    <div class="post__content">
      <div class="post__title">
        <strong>Название: </strong>
        {{ post.title }}
      </div>
      <div class="post__body">
        <strong>Описание: </strong>
        {{ post.body }}
      </div>
    </div>
    <div class="post__btns">
      <my-button @click="$emit('remove', post)" class="button"
        >Удалить</my-button
      >
      <my-button @click="$router.push(`/posts/${post.id}`)" class="button"
        >Перейти</my-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid teal;
  margin-bottom: 15px;
  background: #fff;
  &__btns {
    display: flex;
    padding: 20px;
  }
  .button {
    margin-right: 10px;
  }
  .button:last-child {
    margin-right: 0;
  }
}
</style>
