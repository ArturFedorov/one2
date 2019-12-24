<template>
  <div class="invest">
    <img
      class="invest-image"
      src="~/assets/images/invest.png"
      alt="invest">
    <div
      id="offer"
      class="invest-capture"
      v-vpshow>
      <h1 class="h1 h1-white with-shadow is-uppercase invest-header">
        One second
      </h1>
      <p class="text is-white invest-text">
        Use our service to invest in music industry.
      </p>
      <a class="button-o2 invest-button">
        join one second
      </a>
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
    &-header {
      margin-bottom: $building-unit;
      line-height: 100%;
    }

    &-text {
      font-size: 48px;
      font-weight: $font-medium;
      line-height: 100%;
      margin-bottom: $building-unit-x10;
    }

    &-capture {
      position: absolute;
      top: 60%;
      width: 100%;
      text-align: center;
      animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
    }
  }

</style>
