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
      right: 0;
      top: calc(920px/2 - 380px/2)
    }
  }

  .investors {
    &-header {
      position: absolute;
      top: 33%;
      line-height: $line-height;
    }
  }
</style>
