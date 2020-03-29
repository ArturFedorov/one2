<template>
  <div class="invest">
    <img
      class="invest-image"
      src="~/assets/images/invest.png"
      alt="invest"
    >
    <div
      id="offer"
      v-vpshow
      class="invest-capture"
    >
      <h1 class="h1 h1-white with-shadow is-uppercase invest-header">
        One second
      </h1>
      <p class="text is-white invest-text">
        Use our service to invest in music industry.
      </p>
      <nuxt-link
        to="/form"
        class="button-o2 invest-button">
        join one second
      </nuxt-link>
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

  .invest {
    position: relative;
    line-height: 0;
    z-index: 2;
    &-header {
      margin-bottom: $building-unit;
      line-height: 100%;
      @media($mobile) {
        margin-bottom: $building-unit-x0_5;
      }
    }

    &-image {
      width: 100%;
    }

    &-text {
      font-size: 48px;
      font-weight: $font-medium;
      line-height: 100%;
      margin-bottom: $building-unit-x10;

      @media($tablet) {
        margin-bottom: $building-unit-x6;
      }

      @media($mobile) {
        font-size: 18px;
        margin-bottom: $building-unit-x4;
      }
    }

    &-capture {
      position: absolute;
      top: 60%;
      width: 100%;
      text-align: center;
      animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
      @media($mobile) {
        top: 50%;
      }
    }
  }

</style>
