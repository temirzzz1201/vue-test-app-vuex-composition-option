<template>
  <div>
    <div v-show="posts.length">
      <h3>Список Постов</h3>
      <transition-group name="post-list">
        <post-item
          v-for="post in posts"
          :post="post"
          v-bind:key="post.id"
          @remove="$emit('remove', post)"
        />
      </transition-group>
    </div>
    <h1
      style="text-align: center; margin-bottom: 20px"
      v-show="posts.length === 0"
    >
      Пока постов нет!
    </h1>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  data() {},
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    PostItem,
  },
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 25px;
}
.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-leave-active {
  position: absolute;
}
.post-list-move {
  transition: transform 0.5s ease;
}
</style>
