<template>
  <div class="mobile">
    <img
      class="mobile-bg"
      src="~/assets/images/mobileBg.png"
      alt="mobile">
    <div class="container mobile-content">
      <div class="mobile-content-section">
        <img
          class="mobile-bg-small"
          src="~/assets/images/mobileBg-small.png"
          alt="mobile">
        <img
          id="image"
          class="mobile-image"
          src="~/assets/images/mobile.png"
          alt="mobile"
          v-vpshow>
      </div>
      <div
        id="mobile"
        class="mobile-content-section is-right"
        v-vpshow>
        <h2 class="h2 with-shadow mobile-header">
          WATCH YOUR NUMBERS
        </h2>
        <p class="text mobile-text">
          Check in daily to see how your streaming and social
          media numbers are growing,and learn how much you're
          earning with every listen. We'll help you make sense
          of the data so you know exactly what to do next.
        </p>
        <a class="button-o2 mobile-button">
          join one second
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({});
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";

  .mobile {
    background-color: rgba(228, 227, 221, .5);
    padding: $building-unit-x10 0 $building-unit-x8 0;
    position: relative;

    @media($mobile) {
      padding: $building-unit-x5 0 $building-unit-x4 0;;
    }

    &-bg {
      position: absolute;
      left: -10%;
      z-index: -1;
      top: 25%;

      @media($mobile) {
        display: none;
      }

      &-small {
        display: none;

        @media($mobile) {
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          transform: translateY(50%);
        }
      }
    }

    &-text {
      margin-bottom: $building-unit-x10;
      @media($mobile) {
        margin-top: $building-unit_x2;
        margin-bottom: $building-unit-x5;
      }
    }

    &-image {
      @media($mobile) {
        max-width: 300px;
        position: relative;
        z-index: 1;
      }
    }

    &-header {
      @media($mobile) {
       line-height: 100%;
      }
    }

    &-content {
      display: flex;
      @media($mobile) {
        flex-direction: column;
      }

      &-section {
        flex: 1;

        &.is-right {
          text-align: center;
          align-self: center;

          @media($mobile) {
            text-align: left;
            padding: 0 $building-unit-x2;
          }
        }
      }
    }
  }

  // animations
  .before-enter-mobile {
    animation: none;
  }

  .enter-mobile {
    animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
  }

  .before-enter-image {
    animation: none;
  }

  .enter-image {
    animation: slideLeft 1s ease-in-out;
  }
</style>
