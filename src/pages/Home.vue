<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <!-- posts list -->
        <div class="posts mt-5" v-for="(post, index) in getPosts" :key="index">
          <Posts :title="post.title" :image="post.image" :url="post.url" />
        </div>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>
</template>

<script>
import Posts from "@/components/Posts";

export default {
  components: {
    Posts
  },
  data() {
    return {
      pageOptions: {
        maxPosts: 10
      }
    };
  },
  methods: {
    fetchPosts() {
      return [
        {
          uuid: "03800671-45b3-492e-a80b-e4e994db519f",
          author: "shikky",
          title: "my first post!",
          image: "https://via.placeholder.com/300.png/09f/fff",
          likes: "35",
          url: "/post/shikky/03800671-45b3-492e-a80b-e4e994db519f",
          comments: {
            total: "1",
            data: [{ username: "kaeru", comment: "hey really cool!" }]
          }
        },
        {
          uuid: "5117a7cf-2e44-4b22-82b2-ff4df910dd92",
          author: "koaru",
          title: "my second post yay!",
          image: "https://via.placeholder.com/300.png/07f/fff",
          likes: "16",
          url: "/post/koaru/5117a7cf-2e44-4b22-82b2-ff4df910dd92",
          comments: {
            total: "1",
            data: [{ username: "kaeru", comment: "that's really badass!" }]
          }
        }
      ];
    }
  },
  computed: {
    getPosts() {
      return this.fetchPosts();
    }
  }
};
</script>
