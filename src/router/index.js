import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Post from "@/pages/Post.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/post/:user/:id",
    name: "Post",
    props: true,
    component: Post
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
