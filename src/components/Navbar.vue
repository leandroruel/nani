<template>
  <nav
    class="navbar navbar-dark bg-dark"
    :class="{ 'navbar-expand-lg': options.expandNavbarLG }"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nani</a>
      <Nav />
    </div>
  </nav>
</template>

<script>
import Nav from "./Nav";
export default {
  name: "Navbar",
  components: {
    Nav
  },
  data() {
    return {
      options: {
        expandNavbarLG: true
      }
    };
  }
};
</script>

<style scoped></style>
