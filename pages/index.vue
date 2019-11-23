<template>
  <div class="container home">
    <div class="home-section left">
      <h1 class="h2">ONE SECOND</h1>
      <p class="text home-text">
        New type of online services where artists can get
        professional support in recording & distribution,
        promoting music, get funding for projects
      </p>
    </div>
    <div class="home-section right">
      <img
        class="home-circles"
        src="~/assets/base-icons/lines-circle-half.svg"
        alt="lines" />
      <img
        class="home-image"
        src="~/assets/images/girl.png"
        alt="girl" />
      <img
        class="home-dots"
        src="~/assets/base-icons/dots-red.svg"
        alt="dots" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  head: {
    link: [
      { rel: "  stylesheet", href: "https://use.typekit.net/hjm4myz.css" }
    ]
  }
})
</script>

<style scoped lang="scss">
  @import "../assets/styles/base/variables";

  .container {
    min-height: 100vh;
    display: flex;
  }

  .h2 {
    text-shadow: $h2-text-shadow;
  }

  .home {
    &-section {
      flex: 1;
      position: relative;
      align-items: center;

      &.left {
        padding-top: 150px;
      }

      &.right {
        justify-self: flex-end;
      }
    }

    &-circles {
      position: absolute;
      top: 0;
      left: -33%;
      z-index: 0;
    }

    &-image {
      position: absolute;
      top: 50px;
      right: -40px;
      z-index: 1;
    }

    &-dots {
      position: absolute;
      z-index: 0;
      bottom: 10%;
      right: -40%;
    }

    &-text {
      max-width: 480px;
    }
  }
</style>
