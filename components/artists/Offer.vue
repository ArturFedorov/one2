<template>
  <div class="offer">
    <img
      class="offer-bg"
      src="~/assets/icons/triangles.svg"
      alt="triangles">
    <div
      class="container"
      id="offer"
      v-vpshow>
      <h1 class="h1 with-shadow is-uppercase offer-header">
        We provide you with
      </h1>
      <img src="~/assets/images/offer.png" alt="offer" />
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
        <a class="button-o2 is-black">
          join one second
        </a>
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

    &-button {
      display: flex;
      &-section {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-top: $building-unit-x8;
      }
    }

    &-text {
      display: flex;
      margin-top: $building-unit-x12*2;

      &-header {
        line-height: 120%;
        font-size: 38px;
        padding: $building-unit-x4 $building-unit-x6;
      }
      &-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .text {
          padding: $building-unit-x4 $building-unit-x6;
        }

        &.with-border {
          border: 5px solid $black;

          .h2 {
            border-bottom: 5px solid $black;
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
