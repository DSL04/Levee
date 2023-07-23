<script lang="ts" src="./artists.ts"></script>
<style lang="scss" src="./artists.scss"></style>

<template>
    <div>
      <div class="flex justify-center artists-video-background align-center">
        <h1 class="artists-title">OUR ARTISTS</h1>
      </div>

    <!--TimeLine-->
    <div class="mt-4 artists-timeline-background">
      <div class="mt-4 flex justify-center artists-title2">HERE IS WHAT YOU CAN EXPECT</div>
      <v-timeline class="flex justify-center artists-max-height">
        <div class="w-1/2">
          <v-timeline-item
            dot-color="purple-lighten-2"
            fill-dot
          >
            <v-card>
              <v-card-title class="bg-purple-lighten-2">
                <h2 class="font-weight-light">
                  ARTISTS SECTION
                </h2>
              </v-card-title>
              <v-card-text>
                Check out all the artists we manage and promote. Get a taste of some of their top tracks, and if you want to tailor your taste to a certain genre, you can filter the artists we promote via genre, to your prefered choice.
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
                  PROMOTION/ACHIEVEMENTS SECTION
                </h2>
              </v-card-title>
              <v-card-text>
                Our artists speak for themselves. The awards are an amalgamation of the countless years of hardwork and devotion our artists have imprinted in the jazz scene. However the real testement of their genius lies within their music, so see for yourself whether these artists are universal class or not.
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
                  COLLABORATIONS AND ORGINIZATIONS SECTION
                </h2>
              </v-card-title>
              <v-card-text>
                We worked with many organizations and companies, and are always open to the idea of collaborating with others. From anime music compositions, to compositions for famous rappers, our reach spans far and wide and its not stopping anytime soon.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </div>
      </v-timeline>

    </div>

    <!--Artists Section-->
    <div class="artists-artists-background mt-5">
      <div class="flex justify-center mt-5"><h1 class="artists-title">OUR ARTISTS</h1></div>
      <div class="flex justify-center mt-5">
        <div class="w-1/3 flex justify-center">
          <v-btn>
            <v-select
              v-model="selectValue"
              class="menu-color"
              label="Select Genre"
              :items="genres"
              variant="solo-filled"
            ></v-select>
        </v-btn>
        </div>
      </div>

      <!--Artists-->
      <div class="flex artists-scroller-x">
        <div class="flex">
          <iframe class="m-5"
          v-for="(artist, i) in filteredArtists()"
          :key="i"
          :srcs="artist.src"
          style="border-radius:12px" :src="artist.src" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        </div>

      </div>

    </div>

    <!--Promotion Section-->
    <div class="artists-promotion-background mt-5">
      <div class="artists-title2">OUR ARTISTS ACHIEVEMENTS</div>
      <div class="flex justify-center">
        <div class="grid grid-cols-3 grid-rows-5 gap-y-10 gap-x-10 mt-5 background-card-theme">
          <v-card
          v-for="(award, i) in awards"
          :key="i"
          height="120" width="600">
            <v-card-item>
              <v-card-title>{{ award.title }}</v-card-title>

              <v-card-subtitle>{{ award.subtitle }}</v-card-subtitle>
            </v-card-item>
          </v-card>
        </div>
      </div>
  

    </div>

    <!--Collabs Section-->
    <div class="artists-collab-background mt-5 mb-5">
      <div><v-carousel
            cycle
            height="500"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(collab, i) in collabs"
              :key="i"
              :src="collab.src"
            >
            <v-row
            class="fill-height"
            align="center"
            justify="center"
            >
              <div class="collabs-title">
                {{ collab.description }}
              </div>
            </v-row>
            </v-carousel-item>
          </v-carousel></div>
      <div class="flex justify-center artists-title2">WE COLLABORATED WITH MANY...</div>
      <div class="flex justify-center mt-4">
        <div class="w-1/2 overflow-y-auto max-h-96 space-y-10">
          <h1 class="artists-title2">OUR TALENTED ROSTER OF JAZZ ARTISTS</h1>
          <p class="artists-title3">Our talented roster of jazz artists extends beyond their solo endeavors, with several artists showcasing their exceptional skills as composers and collaborators.</p>

          <h1 class="artists-title2">YUJI OHNO: COLLABORATING WITH TMS ENTERTAINMENT</h1>
          <p class="artists-title3">Yuji Ohno, celebrated for his mesmerizing compositions, has made a significant impact through his collaboration with the esteemed animation studio TMS Entertainment for the iconic "Lupin III" series.</p>

          <h1 class="artists-title2">KATSUO OHNO: ENCHANTING MUSIC FOR DECTECTIVE CONAN</h1>
          <p class="artists-title3">Another notable composer in our lineup is Katsuo Ohno, who captivated audiences with his enchanting compositions for the beloved anime series "Detective Conan." The music he created for the series became an integral part of its identity, adding depth and emotion to the thrilling mysteries.</p>

          <h1 class="artists-title2">ROBERT GLASPER: COLLABORATIONS WITH MUSIC LUMINARIES</h1>
          <p class="artists-title3">Furthermore, the multi-faceted Robert Glasper has left an indelible mark with his collaborations alongside music luminaries such as Erykah Badu, Kendrick Lamar, and Common.</p>

          <h1 class="artists-title2">DISCOVER THEIR MUSICAL JOURNEYS</h1>
          <p class="artists-title3">These are just a few examples of our exceptional jazz artists who have crafted beautiful melodies for others and engaged in inspiring collaborations. Discover their unique musical journeys and the harmonies they have created with prominent artists and organizations.</p>
        </div>
      </div>

    </div>

    </div>
</template>