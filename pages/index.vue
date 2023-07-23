<template>
  <div>
    <!--Title + Video Section-->
    <div class="flex justify-center home-video-background align-center">
      <h1 class="home-title">ELEVATING THE JAZZ SCENE WITH LEVIATHAN'S GRACE</h1>
    </div>

    <!--TimeLine-->
    <div class="mt-4 home-timeline-background">
      <div class="mt-4 flex justify-center home-title2">HERE IS WHAT YOU CAN EXPECT</div>
      <v-timeline class="flex justify-center max-height">
        <div class="w-1/2">
          <v-timeline-item
            dot-color="purple-lighten-2"
            fill-dot
          >
            <v-card>
              <v-card-title class="bg-purple-lighten-2">
                <h2 class="font-weight-light">
                  FEATURED ARTISTS SECTION
                </h2>
              </v-card-title>
              <v-card-text>
                These Artists carry LeveeJazz on their backs. Without them nothing would have been possible. Get to know our top artists!
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            dot-color="amber-lighten-1"
            fill-dot
            size="x-small"
            class="max-height"
          >
            <v-card>
              <v-card-title class="bg-amber-lighten-1 justify-end">
                <h2 class="me-4 font-weight-light">
                  VENUES SECTION
                </h2>
              </v-card-title>
              <v-card-text>
                These are world renown venues that have hosted the cream of the crop when it comes to the jazz scene. From scenic patios to grand orchestral settings, learn more about why our venues are so special.
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
                  MEDIA AND SAMPLE RECOMMENDATIONS SECTION
                </h2>
              </v-card-title>
              <v-card-text>
                Get a taste of some of our artists BEST, by sampling some of the music composed by them, and witness live performances. And if your that interested, check out our artists page for more info, whether its tailoring your jazz preferences to a certain genre, or viewing the colloborations, either is a testament our greatness.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </div>
      </v-timeline>

    </div>

    <!--Company Description-->
    <div class="flex justify-center mt-10 home-description-background align-center">
      <div class="space-y-10 w-4/5">
        <h1 class="home-title2">Levee is a leading jazz management and promotion agency that represents talented jazz musicians and aims to elevate their careers to new heights.</h1>
        <h1 class="home-title2">With a passion for jazz and a commitment to artistic excellence, Levee connects artists with opportunities, organizes events, and fosters collaborations.</h1>
      </div>
    </div>

    <!--Top Artists Section-->
    <div class=" mt-4 home-artists-background">
      <div class="flex justify-center mt-5"><h1 class="home-title2">OUR FEATURED ARTISTS</h1></div>
      
      <!--Container for Aritists-->
      <div class=" flex mt-5 artist-scroller-x">
        
        <div class="flex p-5" v-for="(artist, i) in topArtists" :key="i">
          <div>
            <div class="flex justify-center">
              <img class="top-artist-image" :src="artist.artistImage" />
            </div>
            <div class="mt-3">
              <div class="space-y-5">
                <h1 class="text-white artist-title flex justify-center"><b>{{ artist.artistName }}</b></h1>
                <h1 class="artist-description">{{ artist.artistDescription }}</h1>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!--Venu Section-->
    <div class="mt-4 home-venu-background">
      <div class="flex justify-center mt-5"><h1 class="home-title2">THE VENUES</h1></div>

      <!--Venu Container-->
      <div class="flex ">
        <div class="w-1/2 h-auto max-height">
          <v-carousel
            cycle
            height="500"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(venue, i) in venues"
              :key="i"
              :src="venue.src"
            >
            <v-row
            class="fill-height"
            align="center"
            justify="center"
            >
              <div class="venues-title">
                {{ venue.description }}
              </div>
            </v-row>
            </v-carousel-item>
          </v-carousel>

        </div>
        <div class="w-1/2 text-white flex justify-center">
          <div class="space-y-8 ml-3 home-title2 max-height">
            <h1>Immerse yourself in the captivating melodies that reverberate through the air as you enter these hallowed halls. Feel the energy and anticipation build as you witness the stage being set for unforgettable performances. Each venue at Levee has a distinct personality, with its own architectural charm and captivating design.</h1>
            <h1>As you explore these iconic spaces, you'll find yourself transported to a realm where jazz takes center stage. From sleek, modern venues boasting breathtaking skyline views to cozy hideaways tucked amidst the hustle and bustle of the city, Levee offers an unparalleled range of settings. Whether you prefer the intimate ambiance of candlelit lounges or the grandeur of expansive concert halls, there's a perfect venue to suit your jazz-loving soul.</h1>
            <h1>With a legacy that spans generations, these renowned venues have hosted jazz legends and rising stars alike. Their names have become synonymous with excellence, attracting performers who seek to showcase their talent in these hallowed grounds. Each performance is a testament to the rich history and cultural significance of jazz, and a testament to the enduring legacy of Levee's venues.</h1>
          </div>
        </div>
      </div>

    </div>

    <!--Media sample Section-->
    <div class="mt-4 home-media-background mb-10">
      <div class="flex justify-evenly">

        <div class=" text-white w-1/3">
          <div class="flex justify-center text-white mt-3"><h1 class="home-title2">LIVE PERFORMANCES</h1></div>
          <div class="flex justify-center home-media-scroller-y">
            <div><iframe width="560" height="352" src="https://www.youtube.com/embed/1PPtCkMRCoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            <div><iframe width="560" height="352" src="https://www.youtube.com/embed/hVf7NfBDEK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            <div><iframe width="560" height="352" src="https://www.youtube.com/embed/7BVLz1UCXWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          </div>

        </div>

        <div class="flex flex-col justify-center w-1/3">
            <div class="home-title2 mt-2">MEDIA</div>
            <div class="home-title2 flex justify-center p-5 align-middle">If you want to tailor your jazz needs to a certain genre, check out our artists page by clicking the button below</div>
            <div class="flex justify-center"><v-btn to="/artists" class="artists-button artists-button-background">Artists</v-btn></div>
        </div>

        <div class="text-white w-1/3">
          <div class="flex justify-center text-white mt-3"><h1 class="home-title2">RECOMMENDATIONS & SAMPLES</h1></div>
          <div class="flex justify-center home-media-scroller-y">
            <div><iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0VE95W6PPqQ3e0chkU2AVZ?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
            <div><iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6XI1bDKgSfXWEyP297UaZS?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
            <div><iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5VZn5Gsn2ckFJ2bmRo9GPe?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
            <div><iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2llFlNkPX4hW1M3HLdEMBm?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
            <div><iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1ZqVP8mAjHnHbQxyVwkhYF?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
            <div><iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4hHPO7Vt4eGqEPreB35Tn7?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script lang="ts" src="./home">
  
</script>

<style lang="scss" src="../assets/global.scss"> </style>
