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
    background-image: url(../static/purpBackground.gif);
    /* background-size: cover; */
    background-repeat:round;
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #8208c4 #8208c4;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 9px;
  }

  *::-webkit-scrollbar-track {
    /* background: url(../static/background3.gif); */
  }

  *::-webkit-scrollbar-thumb {
    background-color: #430863;
    border-radius: 13px;
    border: 7px double #f6f6f6;
  }
</style>
