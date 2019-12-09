<template>
  <div class="artists">
    <div>
      <div>
        <img src="~/assets/images/nine.png" alt="nine" />
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
        Become an <br />
        <span class="h1-reversed">investor</span> for young <br/>
        or experienced artists
      </h1>
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
  }
</style>
