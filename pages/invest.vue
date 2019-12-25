<template>
  <div class="invest">
    <Invest />
    <InvestOffer class="infest-offer"/>
    <Description />
    <Footer class="invest-footer"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Invest from '../components/invest/Invest.vue';
  import InvestOffer from '../components/invest/InvestOffer.vue';
  import Description from '../components/invest/Description.vue';
  import Footer from '../components/invest/Footer.vue';

  export default Vue.extend({
    components: {
      Invest,
      InvestOffer,
      Description,
      Footer
    }
  });
</script>

<style scoped lang="scss">
  @import "../assets/styles/base/variables";
  .invest {
    &-offer {
      margin-top: -50px;
      @media($mobile) {
        margin-top: 0;
      }
    }
    &-footer {
      margin-top: 150px;
      @media($mobile) {
        margin-top: 60px;
      }
    }
  }
</style>
