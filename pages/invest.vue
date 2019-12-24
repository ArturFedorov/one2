<template>
  <div class="invest">
    <Invest />
    <InvestOffer class="infest-offer"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Invest from '../components/invest/Invest.vue';
  import InvestOffer from '../components/invest/InvestOffer.vue';

  export default Vue.extend({
    components: {
      Invest,
      InvestOffer
    }
  });
</script>

<style scoped lang="scss">
  @import "../assets/styles/base/variables";
  .invest {
    &-offer {
      margin-top: -50px;
    }
  }
</style>
