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
          Hello, I’m <span style="color: #13b1dd">ROB</span>ert,
        </div>
        <div
          class="title"
          style="font-family: inconsolata, sans-serif; text-transform: none"
        >
          a self-taught Frontend Developer.
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
          I have a passion for technology, constantly learning and experimenting
          with new technologies and design trends.
        </div>
        <div class="contact-me" style="margin-top: auto">
          <button class="btn btn-outline-light">contact me</button>
          <img class="icon icon-1" src="/products/linkedin-icon.png" />
          <img class="icon icon-2" src="/products/email-icon.png" />
          <img class="icon icon-3" src="/products/phone-icon.png" />
        </div>
      </div>
    </div>
    <div
      class="right card card-github col-12 col-md-4"
      style="
        background-image: url('/products/github-test.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <img class="click" src="/products/click-white.png" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // logoBar: function (event) {
    //   $(".navbar").css({
    //     // backgroundColor: this.logoBg,
    //   });
    // },
  },
  //invoke on load
  //   mounted() {
  //     this.logoBar();
  //   },
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
  //   width: 65%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    49deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(184, 184, 184, 0.9626444327731093) 75%
  );
  background-size: 350%;
  //   padding-right: 20px;
  //   margin-right: 10px;
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
  max-width: 40px;
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
    right: 10px;
    top: 10px;
  }
}
// @media screen and(max-width: 770px) {
//   .left {
//     width: 100% !important;
//   }

//   .right {
//     width: 100% !important;
//   }
// }

// .dot {
//   border-radius: 50%;
//   height: 15px;
//   width: 15px;
//   background-color: aqua;
//   margin-right: 10px;
// }
</style>
