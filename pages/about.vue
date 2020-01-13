<template>
  <div class="about">
    <Main/>
    <Footer />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Main from '../components/about/Main.vue';
  import Footer from '../components/about/Footer.vue';

  export default Vue.extend({
    components: {
      Footer,
      Main
    }
  });
</script>

<style scoped lang="scss">
  @import "../assets/styles/base/variables";
</style>
