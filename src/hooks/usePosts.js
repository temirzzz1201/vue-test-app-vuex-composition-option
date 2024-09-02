import axios from "axios";
import { ref, onMounted } from "vue";

export function usePosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostLoading = ref(true);

  const fetching = async () => {
    try {
      const res = await axios("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _page: 1,
          _limit: limit,
        },
      });
      totalPages.value = Math.ceil(res.headers["x-total-count"] / limit);
      posts.value = await res.data;
    } catch (error) {
      console.log(error);
    } finally {
      isPostLoading.value = false;
    }
  };
  onMounted(fetching);
  return {
    posts,
    totalPages,
    isPostLoading,
  };
}
