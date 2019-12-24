<template>
    <div class="invest-offer">
      <div
        id="invest-offer"
        class="invest-offer-content"
        v-vpshow>
        <div class="container">
          <h2
            id="text"
            class="h2 is-white with-shadow invest-offer-header"
            v-vpshow>
            OUR GOAL IS TO CREATE CYBERSPACE FOR MUSIC
            COMMUNITY SO EVERYONE CAN SHARE THEIR
            TALENT AND BOOST UP MUSIC CAREER
          </h2>
          <img
            class="invest-offer-logo"
            src="~/assets/base-icons/logo.svg"
            alt="logo">
        </div>
        <img
          id="invest-image"
          class="invest-offer-circles"
          src="~/assets/icons/red-circles.svg"
          alt="circles"
          v-vpshow>
      </div>
      <img
        class="invest-offer-bg"
        src="~/assets/images/bg_invest.png"
        alt="invest"
        v-vpshow>
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
    }
    &-header {
      max-width: 90%;
    }

    &-content {
      position: relative;
      padding: $building-unit-x6 0;
      background-color: $black;
    }

    &-logo {
      margin-top: $building-unit-x6;
    }

    &-circles {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 0;
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
