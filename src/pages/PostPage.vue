<template>
  <div class="wrapper">
    <h1>Страница с постами</h1>
    <my-input
      style="margin: 20px 0"
      placeholder="Поиск..."
      v-model="searchQuery"
      v-focus
    />
    <div class="app__btns">
      <my-button @click="showMoal" class="button" style="margin-top: 15px"
        >Создать пост</my-button
      >
      <my-select :options="sortOptions" v-model="selectedSort" />
    </div>
    <my-modal v-model:show="modalVisible">
      <post-form @create="cretePost" />
    </my-modal>
    <!-- <post-list v-if="!isPostLoading" @remove="removePost" :posts="posts" /> -->
    <post-list
      v-if="!isPostLoading"
      @remove="removePost"
      :posts="sortedAndSearchedPosts"
    />
    <div v-else>Идет загрузка...</div>

    <!-- <pagination-block
        @changePage="changePage"
        :page="page"
        :totalPages="totalPages"
      /> -->

    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
// import PaginationBlock from "@/components/PaginationBlock.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
    };
  },
  components: {
    PostForm,
    PostList,
    // PaginationBlock,
  },
  methods: {
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
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    //   // this.fetchPosts();
    // },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const res = await axios("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });
        this.totalPages = Math.ceil(res.headers["x-total-count"] / this.limit);
        this.posts = await res.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const res = await axios("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });
        this.totalPages = Math.ceil(res.headers["x-total-count"] / this.limit);
        this.posts = [...this.posts, ...res.data];
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchPosts();

    // const options = {
    //   // rootMargin: 0,
    //   // threshold: 1.0,
    // };

    // const callback = (entries) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };

    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((posts) =>
        posts.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  // watch: {
  //   selectedSort(newValue) {
  //     this.posts.sort((post1, post2) => {
  //       return post1[newValue]?.localeCompare(post2[newValue]);
  //     });
  //   },
  // },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
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
</style>
