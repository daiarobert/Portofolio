<template>
  <div class="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div class="container-fluid">
        <div
          class="d-flex align-items-center"
          style="
            font-weight: 500;
            color: white;
            font-family: termina, sans-serif;
            text-transform: uppercase;
          "
        >
          <div class="dot" style=""></div>
          rob
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#projects">projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#contact">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logoSrc: "/logo--white.svg",
      logoBg: "#912b88",
    };
  },
  methods: {
    logoBar: function (event) {
      $(".navbar").css({
        // backgroundColor: this.logoBg,
      });
    },
  },
  //invoke on load
  mounted() {
    this.logoBar();
  },
};
</script>
<script setup>
const props = defineProps({
  brandExperience: {
    type: String,
    default: "1",
  },
});

$(document).ready(function () {
  //Supplementary JS goes here...
  document.querySelectorAll(".dropdown-toggle").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.target.classList.contains("dropdown-toggle")) {
        event.target.classList.toggle("toggle-change");
      } else if (
        event.target.parentElement.classList.contains("dropdown-toggle")
      ) {
        event.target.parentElement.classList.toggle("toggle-change");
      }
    });
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navbar {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3em;
  padding-right: 3em;
  border-radius: 25px;
  margin-top: -15px;
}
.navbar-nav {
  margin-left: auto;
}
.nav-item {
  margin-right: 0 !important;
}
.nav-link {
  font-family: termina, sans-serif;
  text-transform: uppercase;
}
.dot {
  border-radius: 50%;
  height: 15px;
  width: 15px;
  background-color: #13b1dd;
  margin-right: 10px;
  align-items: center;
  animation: pulse_v2 2s infinite;
}
.collapse {
  list-style: none;
  li:nth-child(1),
  li:nth-child(2) {
    margin-right: 15px;
  }
}
@media screen and (max-width: 480px) {
  .navbar {
    padding-left: 1em;
    padding-right: 1em;
    margin-top: -15px;
  }
}
@keyframes pulse_v2 {
  0% {
    box-shadow: 0 0 0 0px #13b1dd3a;
  }
  100% {
    box-shadow: 0 0 0 10px #13b1dd00;
  }
}
</style>
