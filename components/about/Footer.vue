<template>
  <div
    id="footer"
    class="footer"
    v-vpshow>
    <FooterContent/>
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
    background: url('../../assets/images/about/bg_footer.jpg') no-repeat 50% 0;
    height: 800px;
    background-size: cover;

    @media($mobile) {
      height: 400px;
    }
  }

  .before-enter-footer {
    animation: none;
  }

  .enter-footer {
    animation: opacity .5s ease-in-out;
  }
</style>
