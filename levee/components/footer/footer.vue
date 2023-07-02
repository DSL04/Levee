<script lang="ts" src="./footer"></script>
<style lang="scss" src="./footer.scss"></style>

<template>
  <v-footer app>
    <v-container>
      <v-layout column wrap>
        <v-flex xs12 sm6 md4 class="">
          <ul class="flex justify-around">
            <div class="spotify-image"></div>
            <div class="pepsi-image"></div>
            <div class="citadel-image"></div>
            <div class="shonen-image"></div>
          </ul>
        </v-flex>
        <v-flex xs12 sm6 md4 class="mt-10">
          <h3 class="flex justify-center footer-title">We are gracious to have Pepsi, Citadel, Shonen Sunday, and Spotify as our esteemed sponsors. 
            Their support strengthens our jazz community and enables us to deliver exceptional musical experiences to our audience. With their partnership, we continue to elevate the world of jazz and celebrate the power of music together.</h3>
        </v-flex>
        <v-flex xs12 sm6 md4 class="mt-10">
          <!-- <h3 class="footer-title">Contact</h3> -->
          <ul class="flex justify-evenly">
            <li class="footer-title">Phone: 123-456-7890</li>
            <li class="footer-title">Email: info@example.com</li>
            <li class="footer-title">Address: 123 Main Street, City, Country</li>
          </ul>
        </v-flex>
        <v-flex xs12 md4 class=" justify-end">
          <h3>Follow Us</h3>
          <v-icon size="24" class="mr-2">mdi-facebook</v-icon>
          <v-icon size="24" class="mr-2">mdi-twitter</v-icon>
          <v-icon size="24" class="mr-2">mdi-instagram</v-icon>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>