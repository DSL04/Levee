<template>
  <div>
    <!--Title + Video Section-->
    <div class="flex justify-center home-video-background align-center">
      <h1 class="home-title">ELEVATING THE JAZZ SCENE WITH LEVIATHAN'S GRACE</h1>
    </div>

    <!--TimeLine-->
    <div class="mt-4 home-timeline-background">
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
                  Featured Artists Section
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
                  Venues Section
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
                  Media and Sample Recommendations Section
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

    <!--Company Description-->
    <div class="flex justify-center mt-10 home-description-background align-center">
      <div class="space-y-10 w-4/5">
        <h1 class="home-title2">Levee is a leading jazz management and promotion agency that represents talented jazz musicians and aims to elevate their careers to new heights.</h1>
        <h1 class="home-title2">With a passion for jazz and a commitment to artistic excellence, Levee connects artists with opportunities, organizes events, and fosters collaborations.</h1>
      </div>
    </div>

    <!--Top Artists Section-->
    <div class=" mt-4 home-artists-background">
      <div class="flex justify-center mt-5"><h1 class="home-title2">Our Featured Artists</h1></div>
      
      <!--Container for Aritists-->
      <div class=" flex mt-5 artist-scroller-x">
        
        <div class="flex">
          <div>
            <div class="flex justify-center"><img class="katsuo-image"/></div>
            <div class=" mt-3">
              <div class="space-y-5">
                <h1 class="text-white artist-title flex justify-center"><b>Katsuo Ohno</b></h1>
                <h1 class=" artist-description">A Japanese musician and composer known for his exceptional mastery of the shamisen, a traditional three-stringed instrument. He combines traditional and contemporary elements in his playing style, creating a unique and influential musical expression.</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="flex">
          <div>
            <div class="flex justify-center"><img class="yuji-image"/></div>
            <div class=" mt-3">
              <div class="space-y-5">
                <h1 class="text-white artist-title flex justify-center"><b>Yuji Ohno</b></h1>
                <h1 class=" artist-description">A Japanese jazz pianist and composer known for his work on the "Lupin III" anime series, creating memorable and dynamic soundtracks that blend jazz, funk, and fusion influences.</h1>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex">
          <div>
            <div class="flex justify-center"><img class="cole-image"/></div>
            <div class=" mt-3">
              <div class="space-y-5">
                <h1 class="text-white artist-title flex justify-center"><b>Steve Cole</b></h1>
                <h1 class=" artist-description">An American smooth jazz saxophonist known for his soulful and melodic playing style, delivering captivating performances and producing chart-topping contemporary jazz hits.</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="flex">
          <div>
            <div class="flex justify-center"><img class="jiro-image"/></div>
            <div class=" mt-3">
              <div class="space-y-5">
                <h1 class="text-white artist-title flex justify-center"><b>Jiro Inagaki</b></h1>
                <h1 class=" artist-description">A Japanese jazz saxophonist and bandleader who played a significant role in popularizing jazz in Japan during the 1960s and 1970s. His music blends elements of traditional Japanese music with jazz, creating a unique and captivating sound.</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="flex">
          <div>
            <div class="flex justify-center"><img class="ben-image"/></div>
            <div class=" mt-3">
              <div class="space-y-5">
                <h1 class="text-white artist-title flex justify-center"><b>Ben Matthews</b></h1>
                <h1 class=" artist-description">A Japanese musician and composer known for his exceptional mastery of the shamisen, a traditional three-stringed instrument. He combines traditional and contemporary elements in his playing style, creating a unique and influential musical expression.</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="flex">
          <div>
            <div class="flex justify-center"><img class="eric-image"/></div>
            <div class=" mt-3">
              <div class="space-y-5">
                <h1 class="text-white artist-title flex justify-center"><b>Eric Darius</b></h1>
                <h1 class=" artist-description">a dynamic saxophonist known for his soulful and energetic jazz performances. With his captivating melodies and infectious groove, he brings a fresh and vibrant sound to the genre, captivating audiences worldwide.</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="flex">
          <div>
            <div class="flex justify-center"><img class="vandell-image"/></div>
            <div class=" mt-3">
              <div class="space-y-5">
                <h1 class="text-white artist-title flex justify-center"><b>Vandell Andrew</b></h1>
                <h1 class=" artist-description">talented jazz vocalist with a mesmerizing voice that effortlessly blends soul, R&B, and jazz influences. Her expressive performances and heartfelt lyrics resonate deeply, creating a powerful connection with her listeners.</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="flex">
          <div>
            <div class="flex justify-center"><img class="yusuf-image"/></div>
            <div class=" mt-3">
              <div class="space-y-5">
                <h1 class="text-white artist-title flex justify-center"><b>Yusuf Lateef</b></h1>
                <h1 class=" artist-description">groundbreaking multi-instrumentalist and composer who pushes the boundaries of jazz and embraces a diverse range of musical traditions. His innovative blend of Eastern and Western influences, coupled with his mastery of various instruments, creates a rich and captivating musical experience that continues to inspire and influence musicians today.</h1>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!--Venu Section-->
    <div class="mt-4 home-venu-background">
      <div class="flex justify-center mt-5"><h1 class="home-title2">The Venues</h1></div>

      <!--Venu Container-->
      <div class="flex">
        <div class="w-1/2 h-auto">
          <v-carousel
            cycle
            height="500"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            >
            <v-row
            class="fill-height"
            align="center"
            justify="center"
            >
              <div class="venues-title">
                {{ item.description }}
              </div>
            </v-row>
            </v-carousel-item>
          </v-carousel>

        </div>
        <div class="w-1/2 text-white flex justify-center">
          <div class="space-y-8 ml-3 home-title3 overflow-y-hidden height-600">
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
          <div class="flex justify-center text-white mt-3"><h1 class="home-title2">Live Performances</h1></div>
          <div class="flex justify-center media-scroller-y">
            <div><iframe width="560" height="352" src="https://www.youtube.com/embed/1PPtCkMRCoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            <div><iframe width="560" height="352" src="https://www.youtube.com/embed/hVf7NfBDEK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            <div><iframe width="560" height="352" src="https://www.youtube.com/embed/7BVLz1UCXWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          </div>

        </div>

        <div class="flex flex-col justify-center w-1/3">
            <div class="home-title2 mt-2">Media</div>
            <div class="home-title2 flex justify-center mt-5 align-middle">If you want to tailor your jazz needs to a certain genre, check out our artists page by clicking the button below</div>
            <div class="flex justify-center"><v-btn class="button">Artists</v-btn></div>
        </div>

        <div class="text-white w-1/3">
          <div class="flex justify-center text-white mt-3"><h1 class="home-title2">Recommendations & Samples</h1></div>
          <div class="flex justify-center media-scroller-y">
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

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
  }

})
export default class IndexPage extends Vue {
  public items = [
    {
      src: require('../static/venu1.jpg') ,
      description: "Harmonia Heights Jazz Club"
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5e74322153980d7786e4455a/cea07e96-dddc-4e31-a065-480c1c80a695/dizzys-color-header.jpg',
      description: "Melody Mansion Lounge"
    },
    {
      src: require('../static/venu3.jpg') ,
      description: "Jazzscape Terrace"
    },
    {
      src: require('../static/venu4.jpg') ,
      description: "Rhythm Haven Auditorium"
    },
  ];

  public title = [
    'Test 1',
    'Test 2',
    'Test 3',
    'Test 4',

  ]

}
</script>

<style>
.video-container {
  width: 100%;
  height: 400px; /* Adjust the height as needed */
}

.home-title {
    color: #fff;
    text-align: center;
    font-size: 40px;
    font-family: '?????';
}

.home-title2 {
    color: #fff;
    text-align: center;
    font-size: 35px;
    font-family: '?????';
}

.home-title3 {
    color: #fff;
    font-size: 20px;
    font-family: '?????';
    text-align: -webkit-center;
}

.venues-title {
    color: #fff;
    font-size: 35px;
    font-family: '?????';
    text-shadow:
    -2px -2px 0 #4e0076,
    2px -2px 0 #4e0076,
    -2px 2px 0 #4e0076,
    2px 2px 0 #4e0076;
}

.height-600 {
  height: 600px;
}

.button {
  .v-btn__content {
    color: black !important;
    font-family: '?????'!important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 25px !important;
  }
}

.home-video-background {
  width: -webkit-fill-available;
  height: 474px;
  flex-shrink: 0;
  background: #000;
  /* box-shadow: 4px 4px 4px 4px #a60cff; */
}

.home-timeline-background {
  width: -webkit-fill-available;
  height: 600px;
  flex-shrink: 0;
  background: #555555;
  /* box-shadow: 4px 4px 4px 4px #a60cff; */
}

.home-description-background {
  width: -webkit-fill-available;
  height: 600px;
  flex-shrink: 0;
  /* background: linear-gradient(to bottom, rgb(75, 12, 86), #280142); */
  background: rgb(56, 56, 56);
  /* box-shadow: 4px 4px 4px 4px #a60cff; */
}

.home-artists-background {
  width: -webkit-fill-available;
  height: 600px;
  flex-shrink: 0;
  /* background: linear-gradient(to bottom, rgb(75, 12, 86), #280142); */
  background: #000;
  /* box-shadow: 4px 4px 4px 4px #a60cff; */

}

.home-venu-background {
  width: -webkit-fill-available;
  height: 600px;
  flex-shrink: 0;
  /* background: linear-gradient(to bottom, rgb(75, 12, 86), #280142); */
  background: #000;
  /* box-shadow: 4px 4px 4px 4px #a60cff; */

}

.home-media-background {
  width: -webkit-fill-available;
  height: 600px;
  flex-shrink: 0;
  /* background: linear-gradient(to bottom, rgb(75, 12, 86), #280142); */
  background: #000;
  /* box-shadow: 4px 4px 4px 4px #a60cff; */

}

.katsuo-image {
  background-image: url(../static/katsuo.jpeg);
  width: 350px;
  height: 250px;
  background-size: cover;
  /* border-radius: 70%; */
  /* box-shadow: 4px 4px 4px 4px  #712c9a; */

}

.cole-image {
  background-image: url(../static/Cole.jpg);
  width: 350px;
  height: 250px;
  background-size: cover;
  /* border-radius: 70%; */
  /* box-shadow: 4px 4px 4px 4px  #712c9a; */
}

.yuji-image {
  background-image: url(../static/Yuji.jpg);
  width: 350px;
  height: 250px;
  background-size: cover;
  /* border-radius: 70%; */
  /* box-shadow: 4px 4px 4px 4px  #712c9a; */

}

.jiro-image {
  background-image: url(../static/Jiro.jpg);
  width: 350px;
  height: 250px;
  background-size: cover;
  background-position: center;
  /* border-radius: 70%; */
  /* box-shadow: 4px 4px 4px 4px  #712c9a; */
}

.ben-image {
  background-image: url(../static/Ben.jpg);
  width: 350px;
  height: 250px;
  background-size: cover;
  background-position: center;
  /* border-radius: 70%; */
  /* box-shadow: 4px 4px 4px 4px  #712c9a; */
}

.eric-image {
  background-image: url(../static/Eric.jpg);
  width: 350px;
  height: 250px;
  background-size: cover;
  /* border-radius: 70%; */
  /* box-shadow: 4px 4px 4px 4px  #712c9a; */
}

.vandell-image {
  background-image: url(../static/Vandell.jpg);
  width: 350px;
  height: 250px;
  background-size: cover;
  /* border-radius: 70%; */
  /* box-shadow: 4px 4px 4px 4px  #712c9a; */
}

.yusuf-image {
  background-image: url(../static/Yusuf.jpg);
  width: 350px;
  height: 250px;
  background-size: cover;
  /* border-radius: 70%; */
  /* box-shadow: 4px 4px 4px 4px  #712c9a; */
}

.artist-title {
    font-family: '?????';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.2em;

    color: #fff;
}

.artist-description {
  font-family: '?????';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.2em;
    text-transform: capitalize;

    color: #fff;
}

.artist-scroller-x {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 23%;
  overflow-x:auto;
  }

.media-scroller-y {
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 83%;
  overflow-y: auto;
  height: 500px;
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
