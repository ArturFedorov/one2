<template>
  <div class="container header">
    <div class="header-section">
      <img src="~/assets/base-icons/logo.svg" alt="logo" />
    </div>
    <div class="header-section right">
      <nav class="header-navigation">
        <nuxt-link
          class="header-navigation-link is-uppercase"
          to="/">
          Artists
        </nuxt-link>
        <nuxt-link
          class="header-navigation-link is-uppercase"
          to="/">
          Invest
        </nuxt-link>
        <nuxt-link
          class="header-navigation-link is-uppercase"
          to="/">
          About Us
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
})
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";

  .header {
    display: flex;
    height: 120px;
    align-items: center;
    background-color: $white;

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

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }

</style>
