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
          class="mobile-image"
          src="~/assets/images/mobile.png"
          alt="mobile">
      </div>
      <div class="mobile-content-section is-right">
        <h2 class="h2 with-shadow">
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
          z-index: -1;
          width: 100%;
          transform: translateY(50%);
        }
      }
    }

    &-text {
      margin-bottom: $building-unit-x10;
      @media($mobile) {
        margin-bottom: $building-unit-x5;
      }
    }

    &-image {
      @media($mobile) {
        max-width: 300px;
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
</style>
