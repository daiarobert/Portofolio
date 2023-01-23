<template>
  <div class="intro row d-flex" id="contact">
    <div class="left card container-contact">
      <div class="title" style="font-family: inconsolata, sans-serif">
        Want to work together?
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
        Feel free to reach out for collaborations or just a friendly hello
      </div>
      <div
        class="email"
        style="
          font-family: inconsolata, sans-serif;
          text-transform: none;
          font-size: 24px;
          color: #13b1dd;
        "
      >
        daiarobert2@gmail.com
      </div>
      <div class="contact-me" style="margin-top: auto">
        <button class="btn btn-outline-light">contact me</button>
        <img class="icon icon-1" src="/products/linkedin-icon.png" />
        <img class="icon icon-2" src="/products/email-icon.png" />
        <img class="icon icon-3" src="/products/phone-icon.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    enterViewContact: function (event) {
      gsap.set(".container-contact", {
        opacity: 0,
        y: 50,
      });
      gsap.to(".container-contact", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".container-contact", // what element the animation should start at
          start: "70% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
    },
  },
  //invoke on load
  mounted() {
    this.enterViewContact();
  },
};
</script>
<script setup>
import dataModel from "../js/model.js";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

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
  margin-bottom: 25px;
}
.card {
  height: 350px;
  max-height: 570px;
  border-radius: 25px;
  margin-top: 10px;
}
.left {
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    49deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(184, 184, 184, 0.9626444327731093) 75%
  );
  background-size: 350%;
  color: #ffffff;
  margin-right: 10px;
}
.container-contact {
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
.icon {
  max-width: 40px;
  margin-left: 10px;
}
.icon-1 {
  margin-left: 20px;
}
@media screen and (max-width: 767px) {
  .left {
    margin-top: 150px !important;
  }
  .intro {
    padding-left: 3em;
    padding-right: 3em;
  }
}
@media screen and (max-width: 480px) {
  .left {
    margin-top: 225px !important;
    padding: 25px !important;
  }
  .title {
    font-size: 30px !important;
  }
  .introduction {
    font-size: 18px !important;
  }
  .email {
    font-size: 18px !important;
  }
  .intro {
    padding-left: 1em;
    padding-right: 1em;
  }
}

// .dot {
//   border-radius: 50%;
//   height: 15px;
//   width: 15px;
//   background-color: aqua;
//   margin-right: 10px;
// }
</style>
