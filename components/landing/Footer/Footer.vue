<template>
  <div class="footer">
    <FooterContent />
    <div
      class="footer-bg">
      <img
        class="footer-ball"
        src="~/assets/images/red-ball-half.png"
        alt="stripes">
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import FooterContent from './FooterContent.vue';
  export default Vue.extend({
    components: {
      FooterContent
    }
  });
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/base/variables";

  .footer {
    background-color: $black;
    position: relative;
    height: 800px;

    @media($mobile) {
      height: 400px;
    }

    &-image {
      max-width: 115px;
      @media($mobile) {
        max-width: 55px;
      }
    }
    &-ball {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  .before-enter-content {
    animation: none;
  }

  .enter-content {
    animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
  }
</style>
