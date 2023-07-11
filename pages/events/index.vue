<script lang="ts" src="./events.ts"></script>
<style lang="scss" src="./events.scss"></style>

<template>
    <div>

        <!--Events Video Section-->
        <div class="flex justify-center events-video-background align-center">
            <h1 class="events-title">EVENTS</h1>
        </div>

        <!--TimeLine-->
        <div class="mt-4 events-timeline-background ">
            <div class="mt-4 flex flex-col justify-center events-title2 space-y-4">
                <h1 class="flex justify-center">Experience Unforgettable Jazz Events</h1>
                <div class="flex justify-center max-height">
                    <h1 class="w-1/2">Get ready to immerse yourself in the vibrant world of jazz through our exciting lineup of events. From intimate jazz club performances to electrifying festival shows, our Events page offers a diverse range of musical experiences for jazz enthusiasts of all tastes. Discover captivating live performances by renowned jazz artists, witness breathtaking improvisations, and feel the rhythm that moves your soul. Stay tuned for updates on upcoming events and join us in celebrating the timeless art of jazz.</h1>
                </div>
            </div>
            
        </div>


        <!--Events Section-->
        <div class="mt-5 mb-5 events-showcase-background">
            <div class="events-title2 flex justify-center mt-3">SELECT A DATE TO WATCH ONE OF OUR JAZZ EVENTS....</div>
            <div class="mt-5">
                <v-sheet
                    class="mx-auto"
                    max-width="600"
                >
                    <v-slide-group
                    show-arrows
                    class="scroll-background"
                    >
                    <v-slide-item
                        v-for="(date, i) in dates"
                        :key="i"
                    >
                        <v-btn
                        class="ma-2"

                        rounded
                        @click="setDate(date)"
                        >
                        {{ date }}
                        </v-btn>
                    </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </div>

            <div class="grid grid-cols-1 grid-flow-row gap-4">
                <div class="mt-5"
                v-for="(event, i) in filterEvents()"
                :key="i"
                >
                    <v-divider color="purple"></v-divider>
                    
                    <div class="flex space-x-10">
                        <div class="w-1/2 flex flex-col items-center">
                            <div class="events-title3">{{ event.date }}</div>
                            <div class="events-title3">{{ event.theater }}</div>
                            <div><img class="artist-image" :src="event.artistImage"/></div>                            
                        </div>

                        <div class="w-1/2 flex flex-col items-start justify-center space-y-10 ">
                            <h1 class="events-title3 text-break">{{ event.artistName }}</h1>
                            <div class=""><h1 class="events-title3 text-break w-3/4">{{ event.eventDescription }}</h1></div>
                            <v-btn class="">BOOK NOW</v-btn>
                        </div>
                    </div>                    

                </div>
                
            </div>

        </div>
    </div>
</template>