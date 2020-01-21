<template>
  <div
    class="microphone"
  >
    <img
      class="microphone-bg"
      src="~/assets/images/stripes.png"
      alt="stripes"
    >
    <div
      id="microphones"
      v-vpshow
      class="microphone-container"
    >
      <div class="microphone-image">
        <img
          class="microphone-mics"
          src="~/assets/images/mics.png"
          alt="mics"
        >
      </div>
      <div
        id="container"
        v-vpshow
        class="microphone-list-container"
      >
        <h2 class="h2 microphone-header">
          EVERYONES WHO NEEDS TO
          BOOST UP A MUSIC CAREER
        </h2>
        <div class="list-o2 microphone-list">
          <div
            v-for="item in items"
            :key="item"
            class="list-o2-item microphone-list-item"
          >
            <img
              class="list-o2-image"
              src="~/assets/icons/disc.svg"
              alt="disc"
            >
            <p class="text">
              {{ item }}
            </p>
          </div>
          <div class="microphone-button">
            <a class="button-o2 is-white">
              join one second
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    data () {
      return {
        items: [
          'introduce yourself',
          'upload your music videos or audio',
          'get funding for recording,  shows and tours',
          'get free distribution',
          'get free promo via our social media',
          'connect with like-minds all over the world',
          'get statistics and contact with fans'
        ]
      };
    }
  });
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";
  $microphone-width: 740px;
  $microphone-width-tablet: 640px;
  $microphone-width-mobile: 240px;
  $microphone-container-top: 400px;

  .microphone {
    position: relative;

    &-bg {
      left: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      max-width: 100vw;
      position: relative;
      right: 50%;
      width: 100vw;
    }

    &-container {
      position: absolute;
      top: 0;
      display: flex;

      @media($tablet) {
        flex-direction: column;
      }

      @media($mobile) {
        flex-direction: column;
      }
    }

    &-mics {
      min-width: $microphone-width;
      margin-left: -($microphone-width/4);

      @media($tablet) {
        min-width: $microphone-width-tablet;
        max-width: $microphone-width-tablet;
        margin-left: 0;
      }

      @media($mobile) {
        min-width: $microphone-width-mobile;
        max-width: 320px;
        margin-left: 0;
      }
    }

    &-header {
      line-height: 100%;
      color: $white;
      margin-bottom: $building-unit-x10;
      font-size: $building-unit-x5;

      @media($mobile) {
        font-size: $building-unit-x3;
        margin-bottom: $building-unit-x5;
      }
    }

    &-image {
      flex: 1;
      padding-top: 100px;
      align-self: center;

      @media($tablet) {
        padding-top: 0;
        margin-top: -$building-unit-x5;
      }

      @media($mobile) {
        padding-top: 0;
        margin-top: -$building-unit-x5;
      }
    }

    &-button {
      margin-top: $building-unit-x6;

      @media($mobile) {
        margin-top: $building-unit-x3;
      }
    }

    &-list {
      &-container {
        margin-top: $microphone-container-top;
        flex: 1;
        background-color: $red;
        opacity: .9;
        padding: $building-unit-x5 30px $building-unit-x5 65px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media($tablet) {
          margin: -($building-unit-x12*3) $building-unit 0 $building-unit;
        }

        @media($mobile) {
          margin: -($building-unit-x12 * 2) $building-unit 0 $building-unit;
          padding: $building-unit-x3 30px $building-unit-x3 65px;
        }
      }

      &-item {
        margin-bottom: $building-unit-x4;
        margin-left: -42px;

        &:last-child {
          margin-bottom: 0;
        }

        @media($mobile) {
          margin-bottom: $building-unit-x2;
        }
      }
    }
  }

  // animations
  .before-enter-container {
    animation: none;
  }

  .enter-container {
    animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
  }

  @keyframes slideUp {
    0% {
      margin-top: $microphone-container-top + 30px;
    }
    100% {
      margin-top: $microphone-container-top;
    }
  }
</style>
