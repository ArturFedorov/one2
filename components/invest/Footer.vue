<template>
  <div class="footer">
    <FooterContent />
    <img
      class="footer-image"
      src="~/assets/icons/triangle-circle.svg"
      alt="image">
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import FooterContent from '../landing/Footer/FooterContent.vue';

  export default Vue.extend({
    components: {
      FooterContent
    }
  });
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";
  .footer {
    background-color: $black;
    position: relative;
    height: 800px;
    @media($mobile) {
      height: 400px;
    }

      &-image {
      position: absolute;
      bottom: 0;
      right: 10%;
      @media($mobile) {
        right: 0;
      }
    }
  }
</style>
