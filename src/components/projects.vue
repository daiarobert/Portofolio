<template>
  <div class="intro row d-flex" id="projects">
    <div
      v-for="(item, key) in projects"
      :key="item"
      :class="` col-md-6 card-${key}`"
      :data-id="`${key}`"
    >
      <a
        class="card"
        :href="`${item.link}`"
        target="_blank"
        :style="`background-image: url('/products/project-${key}.jpg'); background-size:120%`"
      >
        <div
          class="project-title"
          style="
            margin-top: 20px;
            font-family: termina, sans-serif;
            text-transform: uppercase;
          "
        >
          {{ item.title }} <img class="click" src="/products/click-white.png" />
        </div>
        <img :src="`${item.img}`" :class="`project--${key}`" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    enterViewRecipe: function (event) {
      gsap.set(".card-1", {
        opacity: 0,
      });
      gsap.set(".card-2", {
        opacity: 0,
      });
      gsap.set(".card-3", {
        opacity: 0,
      });
      gsap.set(".card-4", {
        opacity: 0,
      });
      gsap.set(".card-5", {
        opacity: 0,
      });
      gsap.set(".card-6", {
        opacity: 0,
      });
      gsap.set(".card-7", {
        opacity: 0,
      });
      gsap.set(".card-8", {
        opacity: 0,
      });
      gsap.to(".card-1", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-1", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".project--1", {
        // Animate .recipes__recipe
        // properties to animate here
        top: 70,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-1", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".card-2", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-2", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".project--2", {
        // Animate .recipes__recipe
        // properties to animate here
        top: 70,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-2", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".card-3", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-3", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".project--3", {
        // Animate .recipes__recipe
        // properties to animate here
        top: 70,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-3", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".card-4", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-4", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".project--4", {
        // Animate .recipes__recipe
        // properties to animate here
        top: 70,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-4", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".card-5", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-5", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".project--5", {
        // Animate .recipes__recipe
        // properties to animate here
        top: 70,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-5", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".card-6", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-6", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".project--6", {
        // Animate .recipes__recipe
        // properties to animate here
        top: 70,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-6", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".card-7", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-7", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".project--7", {
        // Animate .recipes__recipe
        // properties to animate here
        top: 70,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-7", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".card-8", {
        // Animate .recipes__recipe
        // properties to animate here
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-8", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      gsap.to(".project--8", {
        // Animate .recipes__recipe
        // properties to animate here
        top: 70,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-8", // what element the animation should start at
          start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
      //   gsap.to(".card-4", {
      //     // Animate .recipes__recipe
      //     // properties to animate here
      //     opacity: 1,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: ".card-3", // what element the animation should start at
      //       start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
      //       toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
      //     },
      //   });
      //   gsap.to(".project--4", {
      //     // Animate .recipes__recipe
      //     // properties to animate here
      //     top: 70,
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: ".card-3", // what element the animation should start at
      //       start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
      //       toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
      //     },
      //   });

      //   gsap.from(".card-3", {
      //     delay: 0.2,
      //     duration: 1.5,
      //     opacity: "0",
      //     ease: "bounce",
      //     scrollTrigger: {
      //       trigger: ".card-3", // what element the animation should start at
      //       start: "100% bottom", // 10% of .recipes__recipe[data-id='2'] enters the bottom of the viewport
      //       toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
      //     },
      //   });
    },
  },
  //invoke on load
  mounted() {
    this.enterViewRecipe();
  },
};
</script>
<script setup>
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
var projects = {
  1: {
    img: "/products/captain-morgan-mobile.png",
    color: "#203354",
    title: "Captain Morgan",
    link: "https://oliver_digital.s3.amazonaws.com/channelsight/cs-cm-2022/index.html",
  },
  2: {
    img: "/products/baileys-desktop.png",
    color: "#152238",
    title: "Baileys",
    link: "https://shoppable.channelsight.com/8db0d58a-6410-464b-b570-53b6ffcfce3a/baileys/page.html",
  },
  3: {
    img: "/products/roe-desktop.png",
    color: "#1c2e4a",
    title: "Roe & co",
    link: "https://static.channelsight.com/roeandcoireland/index.html",
  },
  4: {
    img: "/products/johnnie-walker-mobile.png",
    color: "#23395d",
    title: "Johnnie Walker",
    link: "https://static.channelsight.com/johnniewalker/index.html",
  },
  5: {
    img: "/products/gordons-mobile.png",
    color: "#192841",
    title: "Gordons",
    link: "https://static.channelsight.com/gordonsireland/index.html",
  },
  6: {
    img: "/products/hop13-desktop.png",
    title: "Hop House 13",
    link: "https://static.channelsight.com/hh13ireland/index.html",
  },
  7: {
    img: "/products/rockshore.png",
    title: "Rockshore",
    link: "https://static.channelsight.com/rockshoreireland/index.html",
  },
  8: {
    img: "/products/smirnoff.png",
    title: "Smirnoff",
    link: "https://static.channelsight.com/smirnoffireland/index.html",
  },
};

$(document).ready(function () {
  //Supplementary JS goes here...
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
a {
  text-decoration: none;
}
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
.card-7 {
  .project-title {
    color: #13b1dd;
  }
}
.card {
  color: white;
  font-size: 27px;
  min-height: 380px;
  max-height: 450px;
  border-radius: 25px;
  margin-bottom: 25px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: none;
  background-position-y: -10px;
  transition: 1s ease-in;
  background-color: transparent
    linear-gradient(0deg, #5e151e, #6f2422 5%, #9c4b2d 50%, #f3e6d3) 0 0
    no-repeat padding-box;

  //   margin-top: 10px;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .project--1,
  .project--4,
  .project--5,
  .project--8 {
    transition: 0.5s ease-out;
    top: 70px;
  }
  .project--2,
  .project--3,
  .project--6,
  .project--7 {
    transition: 1s ease-out;
    top: 70px;
  }
}
.card-1,
.card-3,
.card-5,
.card-7 {
  padding-right: 25px;
  padding-left: 0;
}
.card-2,
.card-4,
.card-6,
.card-8 {
  padding-right: 0;
  padding-left: 0;
}
.project--1,
.project--4,
.project--5,
.project--8 {
  max-width: 250px;
  position: absolute;
  top: 120px;
}
.project--2,
.project--3,
.project--6,
.project--7 {
  max-width: 450px;
  position: absolute;
  top: 160px;
}
.container {
  flex-direction: column;
  justify-content: start;
  text-align: start;
  padding: 50px;
  @media screen and (max-width: 767px) {
    padding: 0;
    .row > * {
      padding: 0;
    }
  }
}
.title {
  font-size: 35px;
  line-height: 35px;
  font-weight: 500;
}
.click {
  max-width: 30px;
  margin-left: auto;
  position: absolute;
  right: 15px;
  top: 15px;
  //   padding: 10;
  //   margin-top: 15px;
}
@media screen and(max-width: 1020px) {
  .project--2,
  .project--3,
  .project--6,
  .project--7 {
    max-width: 390px;
  }
  .card:hover {
    .project--2,
    .project--3,
    .project--6,
    .project--7 {
      transition: 1s ease-out;
      top: 100px;
    }
  }
}
@media screen and(max-width: 767px) {
  .card-1,
  .card-3,
  .card-5,
  .card-7 {
    padding: 0 !important;
  }
  .card-3 {
    order: 4;
  }
  .card-4 {
    order: 7;
  }
  .card-7 {
    order: 8;
  }
}
@media screen and(max-width: 480px) {
  .project-title {
    font-size: 20px;
  }
  .click {
    max-width: 30px;
    right: 12px;
    top: 12px;
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
