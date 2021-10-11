<template>
  <v-app>
    <div class="container mt-3">
      <div class="row">
        <router-view></router-view>
      </div>
    </div>
    <FooterTemplate class="foot"/>
  </v-app>
</template>

<script>
import FooterTemplate from './components/FooterTemp/index.vue';

export default {
  name: 'App',

  components: {
    FooterTemplate
  },

  data: () => ({
    //
  }),
};
</script>


<style>
  div.v-application--wrap{
    background: #0f161d !important;
  }
</style>