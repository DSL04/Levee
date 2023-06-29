<script lang="ts" src="./navbar"></script>
<style lang="scss" src="./navbar.scss"></style>
<template>
    <v-app-bar app>
        <v-toolbar-title>
            <v-btn text class="v-title">LeveeJazz</v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="space-x-32">
        <v-btn text>Artists</v-btn>
        <v-btn text>Events</v-btn>
        <v-btn text>Booking</v-btn>
        <v-btn icon>
        <v-icon>mdi-cart</v-icon>
            <span>Shop</span>
        </v-btn>
        <v-btn text>Contact</v-btn>
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


