<template>
  <div
    id="content"
    v-vpshow
    class="container footer-content"
  >
    <div class="footer-image">
      <img
        src="~/assets/images/one2.png"
        alt="one"
      >
    </div>
    <div class="footer-content-links">
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
    <div class="footer-content-rights">
      <p class="text is-red">
        All rights reserved
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
  });
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/base/variables";
  .footer {
    &-content {
      display: flex;
      flex-direction: column;
      height: 100%;

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
  }

  .before-enter-content {
    animation: none;
  }

  .enter-content {
    animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
  }
</style>
