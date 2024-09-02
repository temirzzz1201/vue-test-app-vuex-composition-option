<template>
  <div class="wrapper">
    <h1>Страница с постами</h1>

    <h1>{{ $store.state.post.limit }}</h1>

    <my-input
      style="margin: 20px 0"
      placeholder="Поиск..."
      :model-value="searchQuery"
      v-focus
    />

    <div class="app__btns">
      <my-button class="button" style="margin-top: 15px"
        >Создать пост</my-button
      >
      <my-select :options="sortOptions" v-model="selectedSort" />
    </div>
    <!-- <my-modal v-model:show="modalVisible">
      <post-form />
    </my-modal> -->
    <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>
<script>
// import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
// import { ref } from "vue";
import { usePosts } from "@/hooks/usePosts";
import { useSortedAndSearchedPosts } from "@/hooks/useSortedAndSearchedPosts";
import { useSortedPosts } from "@/hooks/useSortedPosts";

export default {
  name: "App",
  components: { PostList },
  data() {
    return {
      modalVisible: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
    };
  },
  setup() {
    const { posts, totalPages, isPostLoading } = usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostLoading,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
};
</script>

<style lang="scss">
.app {
  &__btns {
    display: flex;
    justify-content: space-between;
  }
}
.observer {
  height: 30px;
  background: gray;
}
.wrapper {
  padding: 50px 20px;
}
.isAuth {
  margin: 20px 0;
  h2 {
    margin-bottom: 20px;
  }
}
</style>
