<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <logoBar />
  <intro />
  <projects />
  <wipProject />
  <contact />
</template>

<script>
import logoBar from "./components/logoBar.vue";
import intro from "./components/intro.vue";
import projects from "./components/projects.vue";
import wipProject from "./components/wipProject.vue";
import contact from "./components/contact.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Intro from "./components/intro.vue";
import WipProject from "./components/wipProject.vue";

export default {
  components: { contact, Intro, WipProject, projects, logoBar },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
