<template>
  <div class="artists">
    <Radio />
    <Offer class="artists-offer"/>
    <Footer />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Radio from '../components/artists/Radio.vue';
  import Offer from '../components/artists/Offer.vue';
  import Footer from '../components/artists/Footer.vue';

  export default Vue.extend({
    components: {
      Radio,
      Offer,
      Footer
    }
  });
</script>

<style scoped lang="scss">
  @import "../assets/styles/base/variables";
  .artists {
    &-bg {
      position: relative;
    }

    &-offer {
      margin-top: -240px;
      margin-bottom: $building-unit-x10*3;
      @media($mobile) {
        margin-top: 200px;
        margin-bottom: $building-unit-x10;
      }
    }
  }
</style>
