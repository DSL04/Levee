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
            <v-btn icon to="/shop">
            <v-icon>mdi-cart</v-icon>
            <span>Shop</span>
            </v-btn>
            <v-btn text to="/contact">Contact</v-btn>
        </v-toolbar-items>

        <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>
        
        <!-- Menu items here -->

        </v-menu>
    </v-app-bar> 
</template>


