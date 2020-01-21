<template>
  <div class="description">
    <DescriptionStep
      class="description-section"
      :text="sectionOne"
    />
    <DescriptionStep
      class="description-section"
      :image-url="imageTwoUrl"
      :is-reversed="true"
      :text="sectionTwo"
    />
    <DescriptionStep
      class="description-section"
      :image-url="imageThreeUrl"
      :is-narrow-text="true"
      :text="sectionThree"
    />
    <DescriptionStep
      class="description-section"
      :image-url="imageFourUrl"
      :is-reversed="true"
      :is-narrow-text="true"
      :text="sectionFour"
    />
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import DescriptionStep from './DescriptionStep.vue';

  export default Vue.extend({
    components: {
      DescriptionStep
    },
    data () {
      return {
        sectionOne: 'Now you get an opportunity to invest in artists you like and earn together',
        imageTwoUrl: require('~/assets/images/invest/announce.png'),
        sectionTwo: 'Here we unite perspective beginners and experienced independent music artists',
        imageThreeUrl: require('~/assets/images/invest/funding.png'),
        sectionThree: 'Our team makes promo and helps with management',
        imageFourUrl: require('~/assets/images/invest/pick.png'),
        sectionFour: 'Buy our tokens and invest in music business'
      };
    }
  });
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";
  .description {
    @media($mobile) {
      display: flex;
      max-width: 100%;
      overflow-x: auto;
    }
    &-section {
      margin-top: 220px;
      @media($mobile) {
        flex: 1;
        margin-top: 150px;
        min-width: 100%;
      }
    }
  }
</style>
