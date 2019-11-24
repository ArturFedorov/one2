<template>
  <div class="container header">
    <div class="header-section">
      <img
        class="header-logo"
        src="~/assets/base-icons/logo.svg"
        alt="logo">
    </div>
    <div class="header-section right">
      <nav class="header-navigation">
        <nuxt-link class="header-navigation-link is-uppercase" to="/">
          Artists
        </nuxt-link>
        <nuxt-link class="header-navigation-link is-uppercase" to="/">
          Invest
        </nuxt-link>
        <nuxt-link class="header-navigation-link is-uppercase" to="/">
          About Us
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="scss">
@import "../../assets/styles/base/variables";

$header-height: 120px;

.header {
  display: flex;
  height: $header-height;
  align-items: center;
  background-color: $white;

  @media($tablet) {
    padding: 0 40px;
  }

  @media($mobile) {
    height: $header-height/2;
    padding: 0 20px;

  }

  &-logo {
    @media($mobile) {
      width: 40px;
    }
  }

  &-section {
    &.right {
      margin-left: auto;
    }
  }

  &-navigation {
    display: flex;

    &-link {
      color: $black;
      font-size: $font-size-base;
      margin-left: 50px;

      @media($mobile) {
        font-size: $font-size-base/2;
        margin-left: 20px;
      }

      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
