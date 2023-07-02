<template>
   <v-app>
    <div>
      <Navbar />
    </div>

    <v-main class="">
      <Nuxt />  
    </v-main>

    <div>
    <Footer />
    </div>
  </v-app>

</template>

<script>
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
export default {
    components: { Navbar, Footer },
    
};
</script>

<style>
  .v-main {
    padding: 0px !important;
    background-image: url(../static/background6.gif);
    background-repeat: round;
  }
</style>
