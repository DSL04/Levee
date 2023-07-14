<script lang="ts" src="./contact.ts"></script>
<style lang="scss" src="./contact.scss"></style>

<template>
  <div>

    <div class="flex justify-center contact-video-background align-center">
      <h1 class="contact-title">HOLLER AT US....</h1>
    </div>

    <div class="flex contact-info-background mt-5">
      <div class="mt-5 flex">

        <div class="w-1/3 flex flex-col items-center">
            <div class="location-image"></div>
            <div class="flex flex-col items-center">
              <div class="contact-title">Location</div>
              <div class="contact-title2">123 Main Street, City, Country</div>
            </div>
        </div>

        <div class="w-1/3 flex flex-col items-center">
            <div class="phone-image"></div>
            <div class="flex flex-col items-center">
              <div class="contact-title">Phone</div>
              <div class="contact-title2">123-456-7890</div>
            </div>
            <div></div>
        </div>

        <div class="w-1/3 flex flex-col items-center">
            <div class="email-image"></div>
            <div class="flex flex-col items-center">
              <div class="contact-title">Email</div>
              <div class="contact-title2">info@example.com</div>
            </div>
        </div>

      </div>

    </div>

    <div class="flex flex-col contact-query-background mt-10 mb-10">
      <div class="flex justify-center contact-title">Interested in joining our company as a Jazz artist?</div>
      <div class="flex">
        <div class="w-1/2 flex-col flex items-center">

          <div class="w-1/2">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>

            <v-text-field
            v-model="phone"
            label="Phone Number"
            required
          ></v-text-field>
          </div>

        </div>

        <div class="w-1/2 flex-col flex items-center">
          <div class="w-1/2">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          </div>
        </div>

      </div>

      <div class="flex justify-center">
        <div class="w-1/2">
        <v-textarea
            label="Write anything you deem interesting about yourself, or you thought we should know"
          ></v-textarea>
        </div>
      </div>
      <div class="flex justify-center">
       
        <div class=" w-1/12">
          <v-btn @click="overlay = !overlay" class="me-4" >SUBMIT
            <v-overlay
              :z-index="zIndex"
              :value="overlay"
            > 
              <!--Modal Content-->
              <div></div>
              
            </v-overlay>
          </v-btn>
        </div>

      </div>

    </div>

  </div>
</template>


