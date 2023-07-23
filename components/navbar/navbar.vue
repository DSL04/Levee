<script lang="ts" src="./navbar"></script>
<style lang="scss" src="./navbar.scss"></style>
<template>
    <v-app-bar app>
        <v-toolbar-title>
            <v-btn text to="/" class="v-title">LeveeJazz</v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="space-x-32">
            <v-btn text to="/artists">Artists</v-btn>
            <v-btn text to="/events">Events</v-btn>
            <v-btn text to="/booking">Booking</v-btn>
            <v-btn text to="/shops"><v-icon>mdi-cart</v-icon>Shop</v-btn>
            <v-btn text to="/contact">Contact</v-btn>
        </v-toolbar-items>
    </v-app-bar> 
</template>


