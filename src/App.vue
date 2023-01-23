<template>
  <logoBar :brandExperience="brandContext" />
  <intro />
  <projects />
  <wipProject />
  <contact />
  <!-- <csModal v-bind:pickedProduct="pickedProduct" /> -->
  <!--pass a variation value to determine the style of component-->
  <!-- <retailers :brandExperience="brandContext" :variation="2" /> -->
  <!-- <carousel :iteration="'1'" /> -->
  <!-- <carouselNew /> -->
</template>

<script setup>
// import channelsightWidget from "./js/channelsight-widget.js";
import logoBar from "./components/logoBar.vue";
import intro from "./components/intro.vue";
import projects from "./components/projects.vue";
import wipProject from "./components/wipProject.vue";
import contact from "./components/contact.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
</script>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
::-webkit-scrollbar {
  display: none;
}
</style>
