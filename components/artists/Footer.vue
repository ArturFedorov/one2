<template>
  <div class="footer-o2">
    <div
      id="content"
      class="footer-o2-content"
      v-vpshow>
      <div class="footer-o2-links">
        <a class="text is-white is-uppercase">About us</a>
        <a class="text is-white is-uppercase">Artists</a>
        <a class="text is-white is-uppercase">Invest</a>
      </div>
    </div>
    <img src="~/assets/images/footer-artists.png" alt="footer"/>
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
    &-content {
      position: absolute;
      right: 10%;
      display: flex;
      top: 20%;
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
