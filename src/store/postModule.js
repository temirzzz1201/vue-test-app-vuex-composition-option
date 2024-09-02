import axios from "axios";

let postModule = {
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(
          post2[state.selectedSort]
        );
      });
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((posts) =>
        posts.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostLoading = bool;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setLoading", true);
        const res = await axios("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        commit(
          "setTotalPages",
          Math.ceil(res.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", res.data);
      } catch (error) {
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit("setPage", (state.page += 1));
        const res = await axios("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        commit(
          "setTotalPages",
          Math.ceil(res.headers["x-total-count"] / state.limit)
        );

        commit("setPosts", [...state.posts, ...res.data]);
      } catch (error) {
        console.log(error);
      }
    },
  },
  namespaced: true,
};

export default postModule;
