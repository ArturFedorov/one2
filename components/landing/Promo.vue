<template>
  <div class="container promo">
    <h2
      id="text"
      v-vpshow
      class="h2 with-shadow promo-header"
    >
      WITH
      <span class="h2-reversed">ONE SECOND</span>
      ARTISTS GET
    </h2>
    <div class="promo-content">
      <div
        id="image"
        v-vpshow
        class="promo-content-section"
      >
        <img
          class="promo-image"
          src="~/assets/images/plate.png"
        >
      </div>
      <div
        id="image1"
        v-vpshow
        class="promo-content-section"
      >
        <img
          class="promo-image"
          src="~/assets/images/promo.png"
        >
      </div>
      <div
        id="image2"
        v-vpshow
        class="promo-content-section"
      >
        <img
          class="promo-image"
          src="~/assets/images/merch.png"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({});
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";

  .promo {
    @media ($desktop) {
      min-height: auto !important;
    }

    @media($mobile) {
      padding: $building-unit-x2;
    }

    &-content {
      display: flex;
      @media($mobile) {
        max-width: 100%;
        overflow-x: auto;
      }
      &-section {
        @media($mobile) {
         flex: 1;
        }
      }
    }

    &-image {
      @media($mobile) {
        max-width: 300px;
      }
    }

    &-header {
      @media($mobile) {
        line-height: 100%;
      }
    }
  }

  // animation
  .enter-image {
    animation: slideRight 1s ease-in-out;
  }

  .enter-image1 {
    animation: slideRight 1s ease-in-out;
  }

  .enter-image2 {
    animation: slideRight 1s ease-in-out;
  }

  .before-enter-text {
    animation: none;
  }

  .enter-text {
    animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
  }
</style>
