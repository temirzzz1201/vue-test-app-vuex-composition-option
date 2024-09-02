import { ref, computed } from "vue";

export function useSortedAndSearchedPosts(sortedPosts) {
  const searchQuery = ref("");

  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter((posts) =>
      posts.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    searchQuery,
    sortedAndSearchedPosts,
  };
}
