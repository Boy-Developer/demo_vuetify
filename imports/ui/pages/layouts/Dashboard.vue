<template>
  <v-app id="inspire">
    <!-- Start app bar  + left menu -->
    <layoutAppMenue></layoutAppMenue>
    <!-- End app bar + left menu-->

    <!-- Start content -->
    <layoutContent></layoutContent>
    <!-- End content -->

    <!-- Start footer -->
    <layoutFooter></layoutFooter>
    <!-- End footer -->
  </v-app>
</template>

<script>
import layoutAppMenue from './AppMenu.vue';
import layoutContent from './Content.vue';
import layoutFooter from './Footer.vue';

export default {
  components:{
    layoutAppMenue,
    layoutContent,
    layoutFooter    
  },
};
</script>
<style scoped>
@font-face {
  font-family: khmerOsBattambang;
  src: url(fonts/KhmerOSBattambang-Regular.ttf);
}
#inspire {
    font-family: khmerOsBattambang !important;
}
</style>