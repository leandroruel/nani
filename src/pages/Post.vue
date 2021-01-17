<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <article>
          <p class="post-category text-muted mb-2">
            <small>category name</small>
          </p>
          <h3 class="card-title">
            This is a example post this will have a few funny things
          </h3>
          <div class="card rounded-3">
            <img
              src="https://via.placeholder.com/300.png/09f/fff"
              alt=""
              class="card-img-top"
            />
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "image", "id", "user", "url"],
  data() {
    return {};
  }
};
</script>
