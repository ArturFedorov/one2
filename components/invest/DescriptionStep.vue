<template>
  <div class="description">
    <div class="description-devider" />
    <div
      class="container description-content"
      :class="{'is-reversed': isReversed}"
    >
      <div class="description-content-section is-right">
        <img
          id="image"
          v-vpshow
          class="description-image" :src="imageUrl"
          alt="how"
        >
      </div>
      <div class="description-content-section">
        <h2
          id="text"
          v-vpshow
          class="h2 is-medium description-header"
          :class="{'is-narrow': isNarrowText}"
        >
          {{ text }}
        </h2>
        <a class="button-o2 is-black invest-button">
          join one second
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      imageUrl: {
        type: String,
        default: require('~/assets/images/invest/how.png')
      },
      text: {
        type: String,
        default: '',
        required: false
      },
      isReversed: {
        type: Boolean,
        default: false
      },
      isNarrowText: {
        type: Boolean,
        default: false
      }
    }
  });
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";
  $devider-height: 230px;

  .description {
    &-devider {
      border-top: 5px solid $black;
      border-bottom: 5px solid $black;
      height: $devider-height;
      position: relative;
      z-index: 0;
      @media($mobile) {
        display: none;
      }
    }
    &-header {
      line-height: 120%;
      max-width: 600px;
      margin-top: $devider-height/2;
      margin-bottom: 120px;

      @media($mobile) {
        margin-top: $building-unit-x3;
        margin-bottom: $building-unit-x4;
      }

      &.is-narrow {
        margin-top: $devider-height/1.5;
      }
      &:before {
        border-top: 5px solid $black;
        border-bottom: 5px solid $black;
      }
    }
    &-content {
      display: flex;
      margin-top: -$devider-height - $building-unit-x12;

      @media($mobile) {
        flex-direction: column;
        margin-top: 0;
      }

      &.is-reversed {
        flex-direction: row-reverse;
        @media($mobile) {
          flex-direction: column;
        }

        .is-right {
          text-align: right;
        }

        .invest-button {
          background-color: $red;
        }
      }

      &-section {
        flex: 1;
        @media($mobile) {
          text-align: center;
          padding: 0 $building-unit;
        }
      }
    }
    &-image {
      max-width: 500px;

      @media($mobile) {
        max-width: 100%;
      }
    }
  }
  .before-enter-image {
    animation: none;
  }

  .enter-image {
    animation: slideLeft 1s ease-in-out;
  }

  // animations
  .before-enter-text {
    animation: none;
  }

  .enter-text {
    animation:  opacity 1s ease-in-out;
  }
</style>
