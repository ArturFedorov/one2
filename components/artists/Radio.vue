<template>
  <div class="radio">
    <img
      class="radio-image"
      src="~/assets/images/radio.jpg"/>
    <div class="radio-content">
      <div class="container">
        <h1 class="h1 h1-white with-shadow is-uppercase radio-header">
          One second
        </h1>
        <h1 class="h1 h1-white with-shadow is-uppercase radio-header">
          is created
        </h1>
        <h1 class="h1 h1-white with-shadow is-uppercase radio-header">
          for you
        </h1>
        <div class="list-o2 radio-list">
          <div
            v-for="item in items"
            :key="item"
            class="list-o2-item radio-list-item">
            <img
              class="list-o2-image"
              src="~/assets/icons/disc.svg"
              alt="disc" />
            <p class="text">
              {{ item }}
            </p>
          </div>
          <div class="radio-button">
            <a class="button-o2 is-white with-black">
              join one second
            </a>
            <img
              class="radio-button-image"
              src="~/assets/icons/circles.svg"
              alt="circles">
          </div>
        </div>
      </div>
    </div>
    <img
      class="radio-circles"
      src="~/assets/icons/circles-grey.svg"
      alt="circles">
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data () {
      return {
        items: [
          'get funding for your projects among your friends, fans or random investors',
          'find local studios, producers, clubs and concert halls',
          'buy songs and beats',
          'connect and collaborate with other musicians, djs and bands',
          'get support with management, promotion and distribution'
        ]
      };
    }
  });
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";
  .radio {
    position: relative;

    &-image {
      position: relative;
      animation: opacity .5s ease-in-out;
    }

    &-circles {
      position: relative;
      margin-top: -4px;
      z-index: 0;
    }

    &-button {
      display: flex;
      align-items: center;
      margin-top: $building-unit-x6;

      &-image {
        margin-left: auto;
      }
    }

    &-content {
      position: absolute;
      right: 8%;
      top: $building-unit-x12;
      animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
    }

    &-header:not(last-child) {
      margin-bottom: 0;
    }

    &-list {
      margin-top: $building-unit-x11;

      &-item {
        margin-bottom: $building-unit-x4;
      }
    }

  }
</style>
