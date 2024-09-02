<template>
  <div class="wrapper">
    <h1>Страница с постами</h1>

    <h1>{{ $store.state.post.limit }}</h1>

    <my-input
      style="margin: 20px 0"
      placeholder="Поиск..."
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      v-focus
    />

    <div class="app__btns">
      <my-button @click="showMoal" class="button" style="margin-top: 15px"
        >Создать пост</my-button
      >
      <my-select
        :options="sortOptions"
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
      />
    </div>
    <my-modal v-model:show="modalVisible">
      <post-form @create="cretePost" />
    </my-modal>
    <post-list
      v-if="!isPostLoading"
      @remove="removePost"
      :posts="sortedAndSearchedPosts"
    />
    <div v-else>Идет загрузка...</div>

    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  components: { PostForm, PostList },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    cretePost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showMoal() {
      this.modalVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },

  computed: {
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
    ...mapState({
      posts: (state) => state.post.posts,
      isPostLoading: (state) => state.post.isPostLoading,
      selectedSort: (state) => state.post.selectedSort,
      sortOptions: (state) => state.post.sortOptions,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
    }),
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
