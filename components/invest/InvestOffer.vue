<template>
  <div class="invest-offer">
    <div
      id="invest-offer"
      v-vpshow
      class="invest-offer-content"
    >
      <div class="container">
        <h2
          id="text"
          v-vpshow
          class="h2 is-white with-shadow invest-offer-header">
          OUR GOAL IS TO CREATE CYBERSPACE FOR MUSIC
          COMMUNITY SO EVERYONE CAN SHARE THEIR
          TALENT AND BOOST UP MUSIC CAREER
        </h2>
        <img
          class="invest-offer-logo"
          src="~/assets/base-icons/logo.svg"
          alt="logo"
        >
      </div>
      <img
        id="invest-image"
        v-vpshow
        class="invest-offer-circles"
        src="~/assets/icons/red-circles.svg"
        alt="circles"
      >
    </div>
    <img
      v-vpshow
      class="invest-offer-bg"
      src="~/assets/images/bg_invest.png"
      alt="invest"
    >
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
  });
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";

  .invest-offer {
    position: relative;
    &-bg {
      position: relative;
      z-index: -1;
      margin-top: -230px;
      width: 100%;
      @media($mobile) {
        margin-top: -100px;
      }

    }
    &-header {
      max-width: 90%;
      position: relative;
      z-index: 2;
      @media ($tablet) {
        font-size: 42px;
        max-width: 100%;
      }
      @media($mobile) {
        font-size: 28px;
      }
    }

    &-content {
      position: relative;
      padding: $building-unit-x6 0;
      background-color: $black;
      @media($tablet) {
        padding: $building-unit-x8 $building-unit-x3 $building-unit-x3 $building-unit-x3;
      }
    }

    &-logo {
      margin-top: $building-unit-x6;
      @media($mobile) {
        width: 40px;
        margin-top: $building-unit-x2;
      }
    }

    &-circles {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 0;
      @media($mobile) {
        display: none;
      }
    }
  }

  .before-enter-invest-offer {
    animation: none;
  }

  .enter-invest-offer {
    animation: slideLeft 1s ease-in-out;
  }

  .before-enter-text {
    animation: none;
  }

  .enter-text {
    animation: opacity 1s ease-in-out;
  }

  .before-invest-image {
    animation: none;
  }

  .enter-invest-image {
    animation: slideRight 1s ease-in-out;
  }
</style>
