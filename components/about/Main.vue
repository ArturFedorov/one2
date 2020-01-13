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
      <div class="card about-card">
        <img
          class="card-bg"
          src="~/assets/icons/triangle-half.svg"/>
        <div class="card-content">
          <h2 class="h2 is-white is-uppercase card-header">
            We unite creativity finance and management
          </h2>
          <div class="card-text">
            <p class="text is-white">
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
      <div class="card about-card">
        <h2 class="h2 is-white is-uppercase card-header">
          Join us
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
  });
</script>

<style scoped lang="scss">
  @import "../../assets/styles/base/variables";

  .about{
    background: url('../../assets/images/about/bg.png') no-repeat;
    background-size: auto;

    &-content {
      display: flex;
    }

    &-header {
      line-height: 100%;
    }

    &-subheader {
      line-height: 100%;
    }

    &-section {
      flex: 1;
      padding: $building-unit-x2 $building-unit-x6;
      margin: $building-unit-x10 0;

      &-icon {
        width: 55px;
        margin-top: $building-unit-x3;
      }

      &-header {
        display: flex;
        align-items: flex-start;
      }

      &.with-border {
        border: 5px solid $black;
      }
    }

    &-cards {
      display: flex;
      position: relative;
      padding: $building-unit-x10*3.5 0;

      &-bg {
        position: absolute;
        top: 0;
      }
    }

    &-card {
      flex: 1;
      margin: 0 $building-unit-x2;
    }
  }

  .card {
    background-color: $black;
    position: relative;
    padding: $building-unit $building-unit-x3;
    &-bg {
      position: absolute;
      z-index: 0;
      top: 0;
      right: 0;
      height: 300px;
    }

    &-content {
      position: relative;
    }
    &-header {
      line-height: 120%;
      font-size: 36px;
      box-shadow: none;
      margin-bottom: $building-unit-x10;
    }

    &-text {
      display: flex;
      flex-direction: column;
    }
    &-icon {
      margin-left: auto;
      margin-top: $building-unit-x3;
      width: 55px;
    }
  }
</style>
