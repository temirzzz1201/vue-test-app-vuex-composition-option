import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageWithCompositionApi from "@/pages/PostPageWithCompositionApi";
import PostDetail from "@/components/PostDetail";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/posts/:id",
    component: PostDetail,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
  {
    path: "/composition",
    component: PostPageWithCompositionApi,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
