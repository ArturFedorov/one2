<template>
  <div
    class="database"
  >
    <div class="database-section left">
      <h2 class="h2 with-shadow database-header">
        CONNECT TO OUR DATABASE
      </h2>
      <div class="database-text">
        <p class="text">
          Musicians
        </p>
        <p class="text">
          Producers
        </p>
        <p class="text home-text">
          Songs
        </p>
        <p class="text home-text">
          Beats
        </p>
      </div>
      <nuxt-link
        to="/form"
        class="button-o2 is-black database-button">
        join one second
      </nuxt-link>
    </div>
    <div class="database-section right">
      <img
        class="database-image"
        src="~/assets/images/database.png"
        alt="database"
      >
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({});
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";
  $database-image-width-desktop: 850px;
  $database-image-width-tablet: 640px;
  $database-image-width-mobile: 240px;

  .database {
    display: flex;
    position: relative;

    @media($tablet) {
      min-width: $database-image-width-tablet;
      flex-direction: column-reverse;
      margin-top: 400px;
    }
    &-button {
      align-self: center;
      margin-top: 150px;

      @media ($tablet) {
        align-self: flex-start;
        margin-top: $building-unit-x8;
      }

      @media($mobile) {
        margin-top: $building-unit-x5;
      }
    }

    &-section {
      flex: 1;
      position: relative;
      align-items: center;

      &.left {
        padding-top: $building-unit-x9;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        @media ($desktop) {
          padding-right: 40px;
        }

        @media ($tablet) {
          align-items: flex-start;
          padding: 0 20px 0 20px;
        }

        @media($mobile) {
          align-items: flex-start;
          padding: 0 20px 0 20px;
          max-width: 50%;
          margin-top: -$building-unit-x7;
        }
      }

      &.right {
        max-width: 100%;
      }
    }

    &-header {
      @media ($desktop) {
        text-align: center;
      }

      @media($mobile) {
        line-height: 100%;
      }
    }

    &-text {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 0 $building-unit-x6 0 $building-unit-x4;

      @media ($tablet) {
        padding: 0 20px 0 5px;
      }

      @media($mobile) {
        padding: $building-unit_x0_5 0 0 3px;
      }
    }

    &-image {
      position: absolute;
      top: 0;
      left: 30px;
      min-width: $database-image-width-desktop;

      @media ($desktop) {
        left: -30px;
      }

      @media($tablet) {
        position: relative;
        left: 0;
        min-width: $database-image-width-tablet;
      }

      @media($mobile) {
        position: relative;
        min-width: $database-image-width-mobile;
        max-width: 535px;
      }
    }
  }

</style>
