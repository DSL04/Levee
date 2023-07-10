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
                <h1>Experience Unforgettable Jazz Events</h1>
                <div class="flex justify-center max-height">
                    <h1 class="w-1/2">Get ready to immerse yourself in the vibrant world of jazz through our exciting lineup of events. From intimate jazz club performances to electrifying festival shows, our Events page offers a diverse range of musical experiences for jazz enthusiasts of all tastes. Discover captivating live performances by renowned jazz artists, witness breathtaking improvisations, and feel the rhythm that moves your soul. Stay tuned for updates on upcoming events and join us in celebrating the timeless art of jazz.</h1>
                </div>
            </div>
            
        </div>


        <!--Events Section-->
        <div class="mt-5 mb-5 events-showcase-background">
            <div class="mt-5">
                <v-sheet
                    class="mx-auto"
                    max-width="600"
                    height="100"
                >
                    <v-slide-group
                    show-arrows
                    >
                    <v-slide-group-item
                        v-for="n in 12"
                        :key="n"
                        v-slot="{ isSelected, toggle }"
                    >
                        <v-btn
                        class="ma-2"
                        rounded
                        :color="isSelected ? 'primary' : undefined"
                        @click="toggle"
                        >
                        Options {{ n }}
                        </v-btn>
                    </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </div>

        </div>
    </div>
</template>