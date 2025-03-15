<template>
  <div class="intro d-flex row">
    <div
      class="wrapper row col-12 col-md-8"
      style="padding-left: 0; padding-right: 25px; --bs-gutter-x: 0"
    >
      <div class="container left card">
        <div
          class="title"
          style="font-family: inconsolata, sans-serif; text-transform: none"
        >
          Hello, I’m
          <span style="color: #13b1dd; font-family: termina, sans-serif"
            >ROB</span
          >ert,
        </div>
        <div
          class="title"
          style="font-family: inconsolata, sans-serif; text-transform: none"
        >
          A Web Developer building web applications and websites for well-known
          brands.
        </div>
        <div
          class="introduction"
          style="
            font-family: inconsolata, sans-serif;
            text-transform: none;
            font-size: 24px;
            margin-top: 25px;
          "
        >
          I specialize in developing robust and scalable web solutions,
          leveraging modern technologies to create efficient and
          high-performance applications.
        </div>
        <div class="contact-me" style="margin-top: auto">
          <a href="mailto: daiarobert2@gmail.com"
            ><button class="btn btn-outline-light">contact me</button></a
          >
          <a
            href="https://www.linkedin.com/in/robert-daia-5b8954223/"
            target="_blank"
            ><img class="icon icon-1" src="/products/linkedin-icon.png"
          /></a>
          <a href="mailto: daiarobert2@gmail.com"
            ><img class="icon icon-2" src="/products/email-icon.png"
          /></a>
          <a href="mailto: daiarobert2@gmail.com"
            ><img class="icon icon-3" src="/products/phone-icon.png"
          /></a>
        </div>
      </div>
    </div>
    <a
      class="right card card-github col-12 col-md-4"
      href="https://github.com/daiarobert"
      target="_blank"
      style="
        background-image: url('/products/github-test.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <img class="click" src="/products/click-white.png" />
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
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
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.intro {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3em;
  padding-right: 3em;
  @media screen and(max-width:480px) {
    padding-left: 1em;
    padding-right: 1em;
  }
}
.card {
  height: 500px;
  max-height: 570px;
  border-radius: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
  color: #ffffff;
}
.left {
  background: linear-gradient(
    49deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(110, 110, 110, 0.963) 75%
  );
  background-size: 250%;
  border: none;
}
.right {
  //width: 35%;
}
.container {
  flex-direction: column;
  justify-content: start;
  text-align: start;
  padding: 50px;
}
.title {
  font-size: 35px;
  line-height: 35px;
  font-weight: 500;
}
.btn {
  border: solid 1px;
  padding: 10px;
  border-radius: 25px;
}
.click {
  max-width: 30px;
  margin-left: auto;
  padding: 10;
  margin-top: 15px;
}
.icon {
  max-width: 40px;
  margin-left: 10px;
}
.icon-1 {
  margin-left: 20px;
}
@media screen and(max-width:767px) {
  .wrapper {
    padding: 0 !important;
  }
}
@media screen and(max-width:767px) {
  .left {
    padding: 25px !important;
    margin-bottom: 0 !important;
  }
  .title {
    font-size: 30px;
  }
  .introduction {
    font-size: 18px;
  }
  .card-github {
    height: 320px !important;
  }
  .click {
    max-width: 30px;
    right: 15px;
    top: 15px;
  }
}
.click {
  -webkit-animation: pulse 3s linear infinite;
  animation: pulse 3s linear infinite;
}
@keyframes pulse {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.1);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
