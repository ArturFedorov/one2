<template>
  <div class="microphone">
    <img
      class="microphone-bg"
      src="~/assets/images/stripes.png"
      alt="stripes">
    <div class="microphone-container">
      <div class="microphone-image">
        <img
          class="microphone-mics"
          src="~/assets/images/mics.png"
          alt="mics">
      </div>
      <div class="microphone-list-container">
        <h2 class="h2 microphone-header">
          EVERYONES WHO NEEDS TO
          BOOST UP A MUSIC CAREER
        </h2>
        <div class="list-o2 microphone-list">
          <div
            class="list-o2-item microphone-list-item"
            v-for="item in items"
            :key="item">
            <img
              class="list-o2-image"
              src="~/assets/icons/disc.svg"
              alt="disc">
            <p class="text">
              {{item}}
            </p>
          </div>
          <div class="microphone-button">
            <a class="button-o2 is-white">
              join one second
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    data () {
      return {
        items: [
          'introduce yourself',
          'upload your music videos or audio',
          'get funding for recording,  shows and tours',
          'get free distribution',
          'get free promo via our social media',
          'connect with like-minds all over the world',
          'get statistics and contact with fans'
        ]
      };
    }
  });
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";

  .microphone {
    position: relative;

    &-bg {
      left: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      max-width: 100vw;
      position: relative;
      right: 50%;
      width: 100vw;
    }

    &-container {
      position: absolute;
      top: 0;
      display: flex;

      @media($tablet) {
        flex-direction: column;
      }

      @media($mobile) {
        flex-direction: column;
      }
    }

    &-mics {
      min-width: 740px;
      margin-left: -150px;
    }

    &-header {
      line-height: 100%;
      color: $white;
      margin-bottom: 80px;
      font-size: 46px;
    }

    &-image {
      flex: 1;
      padding-top: 100px;
    }

    &-button {
      margin-top: 50px;
    }

    &-list {
      &-container {
        margin-top: 400px;
        flex: 1;
        background-color: $red;
        opacity: .9;
        padding: 40px 30px 40px 65px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &-item {
        margin-bottom: 30px;
        margin-left: -42px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
