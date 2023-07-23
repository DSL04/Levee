<script lang="ts" src="./contact.ts"></script>
<style lang="scss" src="./contact.scss"></style>

<template>
  <div>

    <!--COntact Video Section-->
    <div class="flex flex-col justify-center contact-video-background align-center">
      <div class="mb-10">
        <v-btn @click="switchToEnglish()">ENG</v-btn>
        <v-btn @click="switchToFrench()">FR</v-btn> 
      </div>
      <h1 class="contact-title">{{ videoTitle }}</h1>
    </div>

    <!--Timeline-->
    <div class="mt-7 contact-timeline-background">
        <div class="mt-4 flex justify-center contact-title2">{{ timeLineTitle }}</div>
        <v-timeline class="flex justify-center contact-max-height2">
            <div class="w-1/2">
            <v-timeline-item
                dot-color="purple-lighten-2"
                fill-dot
            >
                <v-card>
                <v-card-title class="bg-purple-lighten-2">
                    <h2 class="font-weight-light">
                    {{ timeLineCardTitle1 }}
                    </h2>
                </v-card-title>
                <v-card-text>
                    {{ timeLineCardDescription1 }}
                </v-card-text>
                </v-card>
            </v-timeline-item>

            <v-timeline-item
                dot-color="purple-lighten-2"
                fill-dot
            >
                <v-card>
                <v-card-title class="bg-purple-lighten-2">
                    <h2 class="font-weight-light">
                    {{ timeLineCardTitle2 }}
                    </h2>
                </v-card-title>
                <v-card-text>
                    {{ timeLineCardDescription2 }}
                </v-card-text>
                </v-card>
            </v-timeline-item>
            </div>
        </v-timeline>

        </div>



    <!--Contact info Section-->
    <div class="contact-info-background mt-5">
      <div class="flex justify-center contact-title2">{{ contactInfoTitle }}</div>
      <div class="mt-5 flex">

        <div class="w-1/3 flex flex-col items-center">
            <div class="location-image" alt="Location Image"></div>
            <div class="flex flex-col items-center">
              <div class="contact-title2">{{ locationTitle }}</div>
              <div class="contact-title3">{{ contactLocation }}</div>
            </div>
        </div>

        <div class="w-1/3 flex flex-col items-center">
            <div class="phone-image" alt="Phone Image"></div>
            <div class="flex flex-col items-center">
              <div class="contact-title2">{{ phoneTitle }}</div>
              <div class="contact-title3">{{ contactPhone }}</div>
            </div>
            <div></div>
        </div>

        <div class="w-1/3 flex flex-col items-center">
            <div class="email-image" alt="Email Image"></div>
            <div class="flex flex-col items-center">
              <div class="contact-title2">{{ emailTitle }}</div>
              <div class="contact-title3">{{ contactEmail }}</div>
            </div>
        </div>

      </div>

    </div>

    <!--Join sign up section-->
    <div class="flex flex-col contact-query-background mt-10 mb-10">
      <div class="flex justify-center contact-title2">{{ formTitle }}</div>
      <div class="flex">
        <div class="w-1/2 flex-col flex items-center">

          <div class="w-1/2">
            <v-text-field
              v-model="firstName"
              :rules="nameRules"
              :counter="10"
              :label="firstNameLabel"
              required
            ></v-text-field>

            <v-text-field
            v-model="phoneNumber"
            :rules="phoneRules"
            type="number"
            :counter="10"
            :label="phoneNumberLabel"
            required
          ></v-text-field>
          </div>

        </div>

        <div class="w-1/2 flex-col flex items-center">
          <div class="w-1/2">
            <v-text-field
              v-model="lastName"
              :rules="nameRules"
              :counter="10"
              :label="lastNameLabel"
              required
            ></v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules"
            :label="emailLabel"
            required
          ></v-text-field>
          </div>
        </div>

      </div>

      <div class="flex justify-center">
        <div class="w-1/2">
        <v-textarea
            :label="commentLabel"
          ></v-textarea>
        </div>
      </div>
      <div class="flex justify-center">
       
        <div class=" w-1/12 flex justify-evenly">
          <v-btn @click="clearForm()">{{ clearButtonText }}</v-btn>
          <v-btn :disabled="verifyFormInputs()" @click="overlay = !overlay" class="me-4" >{{ submitButtonText }}
            <v-overlay
              :z-index="zIndex"
              :value="overlay"
            > 
              <!--Modal Content-->
              <div class="form-completion-background flex justify-center items-center" alt="Form Completion Image">
                <div class="w-1/2"><h1 class="form-title text-wrap"><b>{{ confirmationText }}</b></h1></div>

              </div>
              
            </v-overlay>
          </v-btn>
        </div>

      </div>

    </div>

  </div>
</template>


