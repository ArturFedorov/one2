<template>
  <div class="artists">
    <div>
      <div>
        <img
          class="artists-bg"
          src="~/assets/images/nine.png" alt="nine"
        >
      </div>
      <div class="artists-header">
        <h1 class="h1 h1-white with-shadow is-uppercase">
          Artists get up to
          <span class="h1-reversed">90</span>
          percent
        </h1>
      </div>
    </div>
    <div class="investors-header">
      <h1 class="h1 with-shadow is-uppercase">
        Become an <br>
        <span class="h1-reversed">investor</span> for young <br>
        or experienced artists
      </h1>
    </div>
    <div class="investors-text">
      <h2 class="h2 is-white investors-text-header">
        GET BUSINESS OPPORTUNITIES
        WITH ARTISTS YOU LIKE
      </h2>
      <div class="investors-list">
        <p class="text is-white is-medium investors-list-item">
          Buy up to 50% in projects of fresh or experiencd artists
        </p>
        <p class="text is-white is-medium investors-list-item">
          Share risks with other investors
        </p>
        <p class="text is-white is-medium investors-list-item">
          We moderate content
        </p>
        <p class="text is-white is-medium investors-list-item">
          Use our coins to invest in music industry
        </p>
      </div>
      <a class="button-o2 investors-button">
        find out more
      </a>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({});
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";
  $line-height: 140px;

  .artists {
    position: relative;

    &-bg {
      width: 100%;
    }
    &-header {
      position: absolute;
      line-height: $line-height;
      max-width: 900px;
      right: $building-unit-x12;
      top: calc(920px/2 - 380px/2);

      @media($mobile) {
        top: 70px;
        right: $building-unit-x2;
        line-height: 24px;
        max-width: 200px;
        .h1 {
          font-size: 24px;

          &-reversed {
            text-shadow: $h1-text-shadow-white-mobile;
          }
        }
      }
    }
  }

  .investors {
    &-header {
      position: absolute;
      top: 33%;
      left: $building-unit-x12;
      line-height: $line-height;

      @media($mobile) {
        top: 35%;
        left: $building-unit-x4;
        line-height: 24px;
        .h1 {
          font-size: 24px;

          &-reversed {
            text-shadow: $h1-text-shadow-black-mobile;
          }
        }
      }
    }

    &-text {
      position: absolute;
      bottom: 23%;
      left: $building-unit-x12 + $building-unit_x7;
      @media($mobile) {
        bottom: 23%;
        left: $building-unit_x4;
      }

      &-header {
        max-width: 800px;
        line-height: 100%;
        margin-bottom: $building-unit-x8;
        @media($mobile) {
          font-size: $building-unit-x2;
          max-width: 200px;
        }
      }
    }

    &-list {
      margin-bottom: $building-unit-x12*2;
      @media($mobile) {
        display: none;
      }
      &-item:not(:last-child) {
        margin-bottom: $building-unit-x2;
      }
    }

    &-button {
      @media($mobile) {
        display: none;
      }
    }

  }
</style>
