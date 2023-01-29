<template>
  <div class="intro d-flex row">
    <div class="container-atipic card row" style="--bs-gutter-x: 0">
      <div class="left col-12 col-md-6">
        <div
          class="product-wrapper"
          style="
            font-family: inconsolata, sans-serif;
            font-size: 35px;
            font-weight: 500;
          "
        >
          {{ active }}
        </div>
        <div
          class="product-description"
          style="
            font-family: inconsolata, sans-serif;
            text-transform: none;
            font-size: 19px;
            padding: 30px;
          "
        >
          Full stack Multi-page website with an Admin panel.<br />
          this project was build using MERN Stack.<br />Deployed using Netlify
          and Heroku.<br />

          Login Authentication using protected routes and JWT token.<br />
        </div>
        <div class="buttons--wrapper d-flex" style="margin-bottom: 20px">
          <a href="https://codecubes.co.uk/" target="_blank"
            ><button
              type="button"
              class="carousel__button-live btn btn-outline-light active"
              data-action="csWidgetOpen"
              style="
                border: solid 1px;
                padding: 10px;
                border-radius: 25px;
                min-width: 98px;
                font-family: inconsolata, sans-serif;
              "
              :data-id="active"
              @click="openModal(active)"
            >
              View Live
            </button>
          </a>
          <div class="space" style="width: 10px"></div>

          <a href="https://github.com/daiarobert/atipic" target="_blank"
            ><button
              type="button"
              class="carousel__button-code btn btn-outline-light"
              style="
                border: solid 1px;
                padding: 10px;
                min-width: 98px;
                border-radius: 25px;
                font-family: inconsolata, sans-serif;
              "
            >
              View Code
            </button>
          </a>
        </div>
        <div class="trigger-buttons">
          <button
            class="prev__btn desktop"
            @click="currentSlide(), animation($event)"
            :id="`${active}`"
          >
            <div :class="`carousel__previous--${props.iteration}`">
              <img class="arrow" src="products/left-arrow.png" />
            </div>
          </button>
          <button
            class="next__btn desktop"
            @click="currentSlide(), animation($event)"
            :id="`${active}`"
          >
            <div :class="`carousel__next--${props.iteration}`">
              <img class="arrow" src="products/right-arrow.png" />
            </div>
          </button>
          <div class="slick-slider-dots" style="z-index: 1"></div>
        </div>
      </div>
      <div
        class="right col-12 col-md-6 d-flex justify-content-center align-items-center"
      >
        <div class="carousel__bg col-12 col-sm-6">
          <div class="carousel--wrapper">
            <div :class="carouselIteration">
              <div
                class="carousel__product"
                v-for="(item, key) in carousel[props.iteration]"
                :key="item"
              >
                <div>
                  <img
                    class="carousel__img--product opacity--0"
                    :data-id="key"
                    :src="item.img"
                    style="max-width: 200px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "Atipic",
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    currentSlide() {
      var that = this;
      $(".carousel--wrapper").on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
          if (currentSlide != nextSlide) {
            that.animation();
          }
          $(".carousel--wrapper").on("afterChange", function () {
            var dataId = $(".slick-current").attr("data-slick-index");
            if (dataId == 0) {
              that.active = "Atipic";
            } else if (dataId == 1) {
              that.active = "Atipic Login";
            }
          });
        }
      );
    },
    overflowCheck() {
      $(".api").addClass("justify-content-start");
    },
    animation() {
      gsap.to(".product-wrapper", {
        x: -200,
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          gsap.to(`.product-wrapper`, {
            duration: 0.5,
            opacity: 1,
            x: 0,
          });
        },
      });
      gsap.to(".product-wrapper", {
        x: -200,
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          gsap.to(`.product-wrapper`, {
            duration: 0.5,
            opacity: 1,
            x: 0,
          });
        },
      });
    },
    enterViewProject: function (event) {
      gsap.set(".container-atipic", {
        opacity: 0,
        y: 50,
      });
      gsap.to(".container-atipic", {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".container-atipic", // what element the animation should start at
          start: "50% bottom", // enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
    },
  },

  mounted() {
    this.currentSlide();
    this.enterViewProject();
  },
};
</script>
<script setup>
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
const props = defineProps({
  iteration: {
    type: String,
    default: "1",
  },
});
var carouselIteration = "carousel--" + props.iteration;
var carousel = {
  1: {
    1: {
      img: "/products/atipic-mobile.png",
      intro:
        "Full stack Multi-page website with an Admin panel. this project was build using MERN Stack. Deployed using Netlify and Heroku. Login Authentication using protected routes and JWT token",
    },
    2: {
      img: "/products/atipic-login.png",
      intro: "Login Authentication using protected routes and JWT token",
    },
  },
};
$(document).ready(function () {
  $("." + carouselIteration).slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".carousel__previous--" + props.iteration),
    nextArrow: $(".carousel__next--" + props.iteration),
    appendDots: $(".slick-slider-dots"),
  });
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
  @media screen and (max-width: 480px) {
    padding-left: 1em;
    padding-right: 1em;
  }
}
.arrow {
  max-width: 15px;
  margin-top: -3px;
}
.carousel__img--product {
  margin-top: 40px;
}
@media screen and (max-width: 767px) {
  .product-description {
    font-size: 18px !important;
    padding: 20px !important;
  }
  .product-wrapper {
    font-size: 30px !important;
    margin-top: 20px;
  }
  .right {
    height: 300px;
  }
  .carousel__img--product {
    width: 150px;
    margin-top: 0px;
  }
  .trigger-buttons {
    margin-bottom: 30px;
  }
  .container-atipic {
    margin-top: 0 !important;
  }
}
.card {
  height: 500px;
  max-height: 570px;
  border-radius: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
}

.left {
  background-color: #222224;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
.right {
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #006465;
}
.container-atipic {
  justify-content: start;
  text-align: start;
  padding: 0;
}
.title {
  font-size: 35px;
  line-height: 35px;
  font-weight: 500;
}
.container-atipic {
  flex-direction: row;
}
.carousel__product {
  display: flex;
  justify-content: center;
}
.prev__btn {
  border: 1px solid white !important;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  border-right-color: transparent;
  min-width: 30px;
  min-height: 35px;
  background: transparent;
  color: white;
}
.next__btn {
  border: 1px solid white;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  margin-left: -1px;
  min-width: 30px;
  min-height: 35px;
  background: transparent;
  color: white;
}
@media screen and (max-width: 767px) {
  .left {
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .right {
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }
}
</style>
