<script lang="ts" src="./footer"></script>
<style lang="scss" src="./footer.scss"></style>
<template>
  <v-footer app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4>
          <h3>Sponsors</h3>
          <ul>
            <li>Platinum Sponsor</li>
            <li>Gold Sponsor</li>
            <li>Silver Sponsor</li>
          </ul>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <h3>Contact</h3>
          <ul>
            <li>Phone: 123-456-7890</li>
            <li>Email: info@example.com</li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </v-flex>
        <v-flex xs12 md4>
          <h3>Follow Us</h3>
          <v-icon size="24" class="mr-2">mdi-facebook</v-icon>
          <v-icon size="24" class="mr-2">mdi-twitter</v-icon>
          <v-icon size="24" class="mr-2">mdi-instagram</v-icon>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>