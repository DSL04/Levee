<script lang="ts" src="./booking.ts"></script>
<style lang="scss" src="./booking.scss"></style>

<template>
    <div>

        <!--Booking Video Section-->
        <div class="booking-video-background flex justify-center align-center">
            <h1 class="booking-title">BOOK AN EVENT NOW</h1>
        </div>

        <!--Timeline-->
        <div class="mt-7 booking-timeline-background">
        <div class="mt-4 flex justify-center booking-title2">HERE IS WHAT YOU CAN EXPECT</div>
        <v-timeline class="flex justify-center booking-max-height2">
            <div class="w-1/2">
            <v-timeline-item
                dot-color="purple-lighten-2"
                fill-dot
            >
                <v-card>
                <v-card-title class="bg-purple-lighten-2">
                    <h2 class="font-weight-light">
                    BOOKING SECTION
                    </h2>
                </v-card-title>
                <v-card-text>
                    BOOK NOW, from a selection of our top artists for the years 2023-2024!
                </v-card-text>
                </v-card>
            </v-timeline-item>
            </div>
        </v-timeline>

        </div>

        <!--Booking Section-->
        <div class="booking-section-background mt-5 mb-5">
            <div class="booking-title flex justify-center">ENDULGE IN THE ART OF JAZZ: BOOK ONE OF OUR SHOWS BELOW</div>

            <!--Form Container-->
            <div class="flex justify-center">
                <div class="w-1/2 border booking-max-height">
                    <!--Step 1: Welcome Form-->
                    <div class="booking-title3 flex flex-col space-y-10"
                    v-if="step === 1"
                    >
                        <h1>Welcome to our booking page! Get ready to experience the hottest live jazz performances in town. Our lineup of top-notch jazz artists will blow you away with their soulful tunes and electrifying rhythms.</h1>
                        <h1>Whether you're a die-hard jazz aficionado or just dipping your toes into the genre, our shows guarantee an unforgettable night of pure musical bliss. From smooth jazz melodies to funky fusion grooves, we've got something to satisfy every taste.</h1>
                        <h1>Our cozy venues provide the perfect atmosphere to kick back, relax, and let the music take you on a journey. Picture yourself surrounded by the smooth sounds of saxophones, the mesmerizing chords of a piano, and the soulful beats of a double bass.</h1>
                        <h1>Ready to secure your spot for an incredible night of jazz? Just click that 'Next' button below and get ready to experience the coolest live music scene in town. See you on the flip side, where the jazz never stops and good times are guaranteed. Let's groove together!"</h1>
                        <div class="flex justify-end"><v-btn @click="step++">NEXT</v-btn></div>
                    </div>

                    <!--Step 2: Event Selection Form-->
                    <div class="space-y-10"
                    v-if="step === 2"
                    >
                        <h1 class="booking-title3 flex justify-center">SELECT AN EVENT</h1>
                        <div class="">
                            <v-select
                                v-model="selectedEvent"
                                class="menu-color"
                                color="white"
                                label="SELECT YOUR JAZZ EVENT"
                                :items="eventOptions"
                                variant="solo-filled"
                                ></v-select>

                                <div
                                class="space-y-10"
                                v-for="(event, i) in displayEventInfo(selectedEvent)"
                                :key="i"
                                >
                                    <div class="flex flex-col justify-center items-center">
                                        <div class="booking-title3">{{ event.artistName }}</div>
                                        <div><img class="image-container" :src="event.artistImage"/></div>
                                    </div>

                                    <div class="flex justify-evenly">
                                        <div class="booking-title3">{{ event.theater }}</div>
                                        <div class="booking-title3">{{ event.date }}</div>
                                    </div>

                                    <div v-if="buttonDisplay()" class="flex justify-end"><v-btn @click="incrementStepAndStoreEvent(event)">NEXT</v-btn></div>

                                </div>
                        </div>
                        

                    </div>

                    <!--Step 3: Personal Info Form-->
                    <div
                    v-if="step === 3"
                    >
                        <h1 class="booking-title3 flex justify-center">PLEASE FILL THE FOLLOWING CONTACT INFORMATION</h1>

                        <div>
                            <form class="">
                                <div class=" flex flex-col items-center">
                                    <div class="w-1/2 space-y-10">
                                        <v-text-field
                                        v-model="firstName"
                                        :rules="nameRules"
                                        :counter="10"
                                        label="First name"
                                        required
                                        ></v-text-field>

                                        <v-text-field
                                        v-model="lastName"
                                        :rules="nameRules"
                                        :counter="10"
                                        label="Last name"
                                        required
                                        ></v-text-field>
                                    
                                        <v-text-field
                                        v-model="phoneNumber"
                                        :rules="phoneRules"
                                        type="number"
                                        label="Phone Number"
                                        :counter="10"
                                        required
                                    ></v-text-field>
                                        

                                        <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label="E-mail"
                                        required
                                    ></v-text-field>
                                </div>

                                <div  class="flex space-x-20">
                                    <v-btn @click="step--">BACK</v-btn>
                                    <v-btn @click="clearForm()">CLEAR</v-btn>
                                    <v-btn @click="step++" :disabled="verifyFormInputs()" class="me-4">COMPLETE</v-btn>
                                </div>
                            </div>
                            </form>
                        </div>

                    </div>

                    <!--Step 4: Confirmation Form-->
                    <div
                    v-if="step === 4"

                    >
                    <h1 class="booking-title3">CONGRATS {{ firstName }} {{ lastName }}. A CONFIRMATION EMAIL HAS BEEN SENT TO {{ email }}. TIME TO LEVITATE YOUR WORRIES AWAY</h1>
                    <div>
                        <div class="flex justify-center mt-5"><img class="image-container" src="../../static/bookingCompletion.gif"/></div>
                        <div class="flex">
                            <div class="w-1/2 mt-5 space-y-10">
                                <div class="booking-title4">CONCERT NAME: {{ storedEvent.eventName }}</div>
                                <div class="booking-title4">ARTIST: {{ storedEvent.artistName }}</div>
                                <div class="booking-title4">THEATER: {{ storedEvent.theater }}</div>
                                <div class="booking-title4">DATE: {{ storedEvent.date }}</div>
                            </div>
                            
                            <div class="w-1/2">
                                <div class="flex justify-center mt-4"><img :src="storedEvent.artistImage" class="image-container2"/></div>                                
                            </div>
                        </div>
                    </div>
                    <h1 class="booking-title3 mt-5 flex justify-center">PAYMENTS WILL BE MADE IN PERSON AT THE EVENT SETTING</h1>
                    <div class="flex justify-center"><v-btn href="/booking">BOOK AGAIN</v-btn></div>

                    </div>

                    <v-progress-linear class="mt-5" color="blue" :value="(step / totalSteps) * 100" :height="12"></v-progress-linear>
                    <div class="flex justify-center booking-title2">{{ (step / totalSteps) * 100 }}% OF THE WAY THERE</div>

                </div>
            </div>

        </div>
        
    </div>
</template>