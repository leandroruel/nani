<template>
  <article>
    <p class="post-category text-muted mb-2">
      <small>category name</small>
    </p>
    <h3 class="card-title">
      <router-link :to="url" class="text-decoration-none">
        {{ title }}
      </router-link>
    </h3>
    <div class="card rounded-3">
      <img :src="image" alt="" class="card-img-top" />
      <div class="card-body">
        <button type="button" class="btn btn-light">
          <i class="bi bi-lightning"></i>
        </button>
        <button type="button" class="btn btn-light">
          <i class="bi bi-chat"></i>
        </button>
        <button type="button" class="btn btn-light">
          <i class="bi bi-share"></i>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Posts",
  props: ["title", "image", "id", "user", "url"]
};
</script>
