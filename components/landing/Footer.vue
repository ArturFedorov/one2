<template>
  <div class="footer">
    <div class="container footer-content">
      <div class="footer-image">
        <img
          src="~/assets/images/one2.png"
          alt="one">
      </div>
      <div class="footer-links">
        <a class="text is-white is-uppercase">About us</a>
        <a class="text is-white is-uppercase">Artists</a>
        <a class="text is-white is-uppercase">Invest</a>
      </div>
     <div class="footer-rights">
       <p class="text is-red">All rights reserved</p>
     </div>
    </div>
    <div class="footer-bg">
      <img
        class="footer-ball"
        src="~/assets/images/red-ball-half.png"
        alt="stripes">
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({});
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";

  .footer {
    background-color: $black;
    position: relative;
    height: 800px;

    @media($mobile) {
      height: 400px;
    }

    &-image {
      max-width: 115px;
      @media($mobile) {
        max-width: 55px;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    &-links {
      margin-top: $building-unit-x12;
      display: flex;
      flex-direction: column;
      @media($mobile) {
        margin-top: $building-unit-x4;
      }

      .text:not(:last-child) {
        margin-bottom: $building-unit-x2;
      }
    }

    &-ball {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    &-rights {
      margin-top: auto;
      position: relative;
      z-index: 3;
      @media($mobile) {
        .text.is-red {
          color: $white;
        }
      }
    }
  }
</style>
