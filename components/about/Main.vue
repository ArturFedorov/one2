<template>
  <div class="about">
    <div class="container about-content">
      <div class="about-section"></div>
      <div class="about-section with-border">
        <div class="about-section-header">
          <h1 class="h1 is-uppercase h1-white about-header">
            One second
          </h1>
          <img
            class="about-section-icon"
            src="~/assets/icons/one-red.svg"/>
        </div>
        <h2 class="h2 is-uppercase about-subheader">
          It is our vision
          how music industry
          should look like
        </h2>
      </div>
    </div>
    <div class="container about-cards">
      <img
        class="about-cards-bg"
        src="~/assets/icons/red-circle.svg"/>
      <div
        id="about"
        class="card about-card"
        v-vpshow>
        <img
          class="card-bg"
          src="~/assets/icons/triangle-half.svg"/>
        <div class="card-content">
          <h2 class="h2 is-white is-uppercase card-header with-margin">
            We unite creativity finance and management
          </h2>
          <div class="card-text">
            <p class="text is-white is-light">
              Artists get easy access to capital for their projects. Nothing would detract musicians from making music. We expect that people interacing with this
              service all over the world will unite, collaborate and create new
              interresting music.
            </p>
            <img
              class="card-icon"
              src="~/assets/icons/one-red.svg"/>
          </div>
        </div>
      </div>
      <div
        id="form"
        class="card about-card"
        v-vpshow>
        <img
          class="card-bg-2"
          src="~/assets/icons/form-bg.svg"/>
        <div class="card-content">
          <h2 class="h2 is-white is-uppercase card-header">
            Join us
          </h2>
          <div class="card-text">
            <p class="text is-white is-light">
              Become a partner of one second. Contribute to
              unique single experience of new music community.
            </p>
          </div>
          <div class="card-form">
            <div class="input-o2 card-input">
              <input
                type="text"
                placeholder="Your name"
                class="input-o2-box"/>
            </div>
            <div class="input-o2">
              <input
                placeholder="Your email"
                type="text"
                class="input-o2-box"/>
            </div>
            <div class="card-form-checkbox">
              <Checkbox
                :checked="checked"
                @checked="checked=!checked"/>
              <span class="text is-white is-light card-form-checkbox-label">
                I agree to share personal information
              </span>
            </div>
          </div>
          <div class="card-button">
            <a class="button-o2 is-small">
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
  import Checkbox from '../common/Checkbox/Checkbox.vue';

  export default Vue.extend({
    components: {
      Checkbox
    },
    data () {
      return {
        checked: false
      }
    }
  });
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";

  .about{
    background: url('../../assets/images/about/bg.png') no-repeat;
    background-size: auto;

    &-content {
      display: flex;

      @media($mobile) {
        flex-direction: column-reverse;
      }
    }

    &-header {
      line-height: 100%;
      animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
      @media($mobile) {
        font-size: 36px;
        margin-bottom: $building-unit-x7;
      }
    }

    &-subheader {
      line-height: 100%;
      animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
      @media($mobile) {
        font-size: 24px;
        color: $gray;
      }
    }

    &-section {
      flex: 1;
      padding: $building-unit-x2 $building-unit-x6;
      margin: $building-unit-x10 0;

      @media($mobile) {
        padding: $building-unit-x2 $building-unit-x2;
        margin: $building-unit-x5 0;
      }

      &-icon {
        width: 55px;
        margin-top: $building-unit-x3;
        animation: opacity 1s ease-in-out;
        @media($mobile) {
          width: 25px;
        }
      }

      &-header {
        display: flex;
        align-items: flex-start;
        @media($mobile) {
          align-items: baseline;
          justify-content: space-between;
        }
      }

      &.with-border {
        border: 5px solid $black;
        @media($mobile) {
          border: none;
        }
      }
    }

    &-cards {
      display: flex;
      position: relative;
      padding: $building-unit-x10*3.5 0;

      @media($mobile) {
        padding: 0;
        flex-direction: column;
      }

      &-bg {
        position: absolute;
        top: 0;
        animation: slideUp 1s ease-in-out, opacity 1.5s ease-in-out;
      }
    }

    &-card {
      flex: 1;
      margin: 0 $building-unit-x2;
      @media($mobile) {
        margin: $building-unit 0;
      }

    }
  }

  .card {
    background-color: $black;
    position: relative;
    padding: $building-unit-x3 $building-unit-x3 $building-unit $building-unit-x3;
    &-bg {
      position: absolute;
      z-index: 0;
      top: 0;
      right: 0;
      height: 300px;
    }

    &-bg-2 {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      max-height: 100%;
    }

    &-button {
      margin-top: $building-unit-x5;
    }
    &-content {
      position: relative;
    }
    &-header {
      line-height: 120%;
      font-size: 36px;
      box-shadow: none;

      @media($mobile) {
        font-size: 24px;
      }

      &.with-margin {
        margin-bottom: $building-unit-x10;
      }
    }

    &-input {
      margin-bottom: $building-unit;
    }

    &-form {
      max-width: 75%;
      margin-top: $building-unit-x2;
      @media($mobile) {
        max-width: 100%;
      }

      &-checkbox {
        display: flex;
        align-items: center;
        margin-top: $building-unit-x2;

        &-label {
          margin-left: $building-unit;
          font-size: 18px;

          @media($mobile) {
            font-size: 12px;
          }
        }
      }
    }

    &-text {
      display: flex;
      flex-direction: column;

      .text {
        line-height: 120%;
      }
    }
    &-icon {
      margin-left: auto;
      margin-top: $building-unit-x3;
      width: 55px;
    }
  }

  .before-enter-about {
    animation: none;
  }

  .enter-about {
    animation: slideLeftTransition 1s ease-in-out;
  }

  .before-enter-form {
    animation: none;
  }

  .enter-form {
    animation: slideRight 1s ease-in-out;
  }
</style>
