<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Header from '~/components/root/Header.vue';

  export default Vue.extend({
    components: {
      Header
    },
    head: {
      link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/hjm4myz.css' }]
    }
  });
</script>
