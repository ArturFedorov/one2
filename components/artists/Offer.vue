<template>
  <div class="offer">
    <img
      class="offer-bg"
      src="~/assets/icons/triangles.svg"
      alt="triangles"
    >
    <div
      id="offer"
      v-vpshow
      class="container"
    >
      <h1 class="h1 with-shadow is-uppercase offer-header">
        We provide you with
      </h1>
      <img src="~/assets/images/offer.png" alt="offer">
    </div>
    <div class="container offer-text">
      <div class="offer-text-section with-border">
        <h2 class="h2 is-uppercase offer-text-header">
          Joining this platform you make
          next step in music career
        </h2>
        <p class="text">
          Tell about your project and get ready to work hard to reach top lines in music
          charts. You can start with single. Together with our community we show it to the
          world. Analyze statistics and move on to your next project.
        </p>
      </div>
      <div class="offer-text-section">
        <h2 class="h2 is-uppercase offer-text-header is-narrow">
          Choose Your options in order
          to reach YOUR fans
        </h2>
        <p class="text">
          We offer different ways: you can make a few more singles, EP or LP, depending
          on your level and strategy you chose with producer. If you are ready to create
          video, just announce it here and wait for investors. By the way, you keep all rights
          on your music, investors get their interest in profit you make in streaming and sales.
        </p>
      </div>
    </div>
    <div class="container offer-button">
      <div class="offer-button-section">
        <nuxt-link
          to="/form"
          class="button-o2 is-black">
          join one second
        </nuxt-link>
      </div>
      <div class="offer-button-section">
        <img src="~/assets/icons/one-red.svg" alt="one">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
  });
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";
  .offer {
    &-bg {
      position: absolute;
      z-index: -1;
    }

    &-header {
      text-align: center;
    }

    &-button {
      display: flex;
      &-section {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-top: $building-unit-x8;

        @media($tablet) {
          justify-content: center;
          padding-top: $building-unit-x4;
          &:last-child {
            display: none;
          }
        }
      }
    }

    &-text {
      display: flex;
      margin-top: $building-unit-x12*2;

      @media ($tablet) {
        flex-direction: column;
        border: 3px solid $black;
        margin: $building-unit-x9 $building-unit-x2 0 $building-unit-x2;
      }

      @media($mobile) {
        border: 3px solid $black;
        margin: $building-unit-x9 $building-unit-x2 0 $building-unit-x2;
      }

      &-header {
        line-height: 120%;
        font-size: 38px;
        padding: $building-unit-x4 $building-unit-x6;

        @media($mobile) {
          padding: $building-unit-x4 $building-unit-x3 $building-unit-x2 $building-unit-x3;
          font-size: 24px;
        }
      }
      &-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .text {
          padding: $building-unit-x4 $building-unit-x6;

          @media($mobile) {
            padding: $building-unit-x2 $building-unit-x3 $building-unit-x4 $building-unit-x3;
          }
        }

        &.with-border {
          border: 5px solid $black;

          @media ($tablet) {
            border: none;
            border-bottom: 3px solid $black;
          }
          .h2 {
            border-bottom: 5px solid $black;

            @media($tablet) {
              border: none;
            }
          }
        }
      }
    }
  }

  // animations
  .before-enter-offer {
    animation: none;
  }

  .enter-offer {
    animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
  }
</style>
