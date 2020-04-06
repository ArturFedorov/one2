<template>
  <div class="footer-o2">
    <div
      id="content"
      v-vpshow
      class="footer-o2-content"
    >
      <div>
        <img
          class="footer-o2-one2"
          src="~/assets/images/one2.png"
          alt="one2"
        >
      </div>
      <div class="footer-o2-links">
        <nuxt-link
          to="/about"
          class="text is-white is-uppercase">About us</nuxt-link>
        <nuxt-link
          to="/artists"
          class="text is-white is-uppercase">Artists</nuxt-link>
        <nuxt-link
          to="/invest"
          class="text is-white is-uppercase">Invest</nuxt-link>
      </div>
      <div class="footer-o2-rights">
        <p class="text is-white">
          All rights reserved
        </p>
      </div>
    </div>
<!--    <img-->
<!--      class="footer-o2-car"-->
<!--      src="~/assets/images/car_logo.png"-->
<!--      alt="footer"-->
<!--    >-->
    <img
      class="footer-o2-ball"
      src="~/assets/images/artists_elipse.png"
      alt="elipse"
    >
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
  });
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";

  .footer-o2 {
    position: relative;
    height: 800px;
    background: $red left 100% url('../../assets/images/car_logo.png') no-repeat;
    background-size: contain;

    @media ($tablet) {
      height: 480px;
    }

    @media($mobile) {
      height: 249px;
    }

    &-content {
      position: absolute;
      right: 10%;
      display: flex;
      top: 0;
      flex-direction: column;
      align-items: flex-end;
      height: 100%;
      padding-top: $building-unit-x7;
      z-index: 2;
      @media($mobile) {
        padding-top: $building-unit-x3;
      }
    }

    &-ball {
      position: absolute;
      bottom: 0;
      right: 0;

      @media ($tablet) {
        max-width: 70%;
      }
    }

    &-one2 {
      margin-bottom: 120px;
      @media($mobile) {
        max-width: 50px;
        margin-bottom: 10px;
      }
    }

    &-rights {
      margin-top: auto;
      padding-bottom: $building-unit-x4;
      @media($mobile) {
      }
    }

    &-links {
      display: flex;
      flex-direction: column;
      text-align: right;

      .text:not(:last-child) {
        margin-bottom: $building-unit-x2;
      }
    }
  }
</style>
