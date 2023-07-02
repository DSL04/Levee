<script lang="ts" src="./artists.ts"></script>
<style lang="scss" src="./artists.scss"></style>

<template>
    <div>
        <div class="flex justify-center artists-video-background align-center">
      <h1 class="home-title">OUR ARTISTS</h1>
    </div>

    <!--TimeLine-->
    <div class="mt-4 artists-timeline-background">
      <div class="mt-4 flex justify-center home-title2">Here is what you can expect</div>
      <v-timeline class="flex justify-center">
        <div class="w-1/2">
          <v-timeline-item
            dot-color="purple-lighten-2"
            fill-dot
          >
            <v-card>
              <v-card-title class="bg-purple-lighten-2">
                <h2 class="font-weight-light">
                  Artists Section
                </h2>
              </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            dot-color="amber-lighten-1"
            fill-dot
            size="x-small"
          >
            <v-card>
              <v-card-title class="bg-amber-lighten-1 justify-end">
                <h2 class="me-4 font-weight-light">
                  Promotions Section
                </h2>
              </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            dot-color="cyan-lighten-1"
            fill-dot
          >
            <v-card>
              <v-card-title class="bg-cyan-lighten-1">
                <h2 class="font-weight-light">
                  Collaborations and Organizations Section
                </h2>
              </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </div>
      </v-timeline>

    </div>

    </div>
</template>