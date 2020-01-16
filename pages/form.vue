<template>
  <div class="form">
    <img
      class="form-bg"
      src="~/assets/images/form/plate.png"
      alt="plate">
    <div class="container form-content">
      <h1 class="h1 is-uppercase with-shadow form-header">
        join one second
      </h1>
      <h2 class="h2 is-medium form-subheader">
        Become a partner of one second. Contribute to unique single
        experience of new music community.
      </h2>
      <div class="form-form">
        <div class="form-section">
          <p class="text is-bold form-section-header">
            Personal information
          </p>
          <div class="input-o2">
            <input
              placeholder="Your name"
              type="text"
              class="input-o2-box"/>
          </div>
          <div class="input-o2">
            <input
              placeholder="Date of birth"
              type="text"
              class="input-o2-box"/>
          </div>
          <div class="input-o2">
            <input
              placeholder="Select country"
              type="text"
              class="input-o2-box"/>
          </div>
          <div class="input-o2">
            <input
              placeholder="Your city"
              type="text"
              class="input-o2-box"/>
          </div>
        </div>
        <div class="form-section">
          <p class="text is-bold form-section-header">
            Social networks
          </p>
          <div class="input-o2">
            <input
              placeholder="Facebook link"
              type="text"
              class="input-o2-box"/>
          </div>
          <div class="input-o2">
            <input
              placeholder="Youtube link"
              type="text"
              class="input-o2-box"/>
          </div>
        </div>
      </div>
    </div>
    <div class="form-footer">
     <div class="container">
       <a
         class="button-o2 with-border form-button">
         Save
       </a>
       <a
         class="button-o2 is-white with-border form-button">
         Cancel
       </a>
     </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    components: {
    }
  });
</script>

<style scoped lang="scss">
  @import "../assets/styles/base/variables";
  $image-width-desktop: 735px;
  $image-width-mobile: 250px;

  .form {
    position: relative;
    padding-top: $building-unit-x7;
    &-bg {
      position: absolute;
      max-width: $image-width-desktop;
      right: -$image-width-desktop/2;
      animation: rotate 1s ease-in-out;
      top: 30%;

      @media($mobile) {
        max-width: $image-width-mobile;
        right: -$image-width-mobile/2;
        top: 20%;
      }
    }

    &-button {
      &:first-child {
        margin-right: $building-unit;
      }
    }

    &-content {
      margin-bottom: $building-unit-x10*3;
      animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
    }

    &-header {
      margin-bottom: $building-unit-x3;
      line-height: 100%;
    }

    &-form {
      margin-top: $building-unit-x10;
    }

    &-section {
      margin-bottom: $building-unit-x8;
      &-header {
        margin-bottom: $building-unit-x4;
      }
    }

    &-subheader {
      line-height: 100%;
      @media($mobile) {
        font-size: 14px;
      }
    }

    &-footer {
      background-color: $white;
      border-top: 1px solid $gray;
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $building-unit-x4 0;
    }
  }

  .input-o2 {
    max-width: 750px;
  }

  .input-o2:not(:last-child) {
    margin-bottom: $building-unit-x2;
  }
</style>
