<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style src="bootstrap-icons/font/bootstrap-icons.css">
html,
body {
  height: 100%;
  font-size: 16px;
}
</style>
