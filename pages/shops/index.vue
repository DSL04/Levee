<script lang="ts" src="./shops"></script>
<style lang=scss src="./shops.scss"></style>

<template>
    <div>
        <!--Shop Video Section-->
        <div class="shop-video-background flex justify-center align-center">
            <h1 class="shop-title">SHOP</h1>
        </div>

        <!--Timeline-->
        <div class="mt-7 shop-timeline-background">
        <div class="mt-4 flex justify-center shop-title2">HERE IS WHAT YOU CAN EXPECT</div>
        <v-timeline class="flex justify-center shop-max-height2">
            <div class="w-1/2">
            <v-timeline-item
                dot-color="purple-lighten-2"
                fill-dot
            >
                <v-card>
                <v-card-title class="bg-purple-lighten-2">
                    <h2 class="font-weight-light">
                    SHOP SECTION
                    </h2>
                </v-card-title>
                <v-card-text>
                    Shop some of our limited edition albums from some of our best artists that withstoud the test of time!
                </v-card-text>
                </v-card>
            </v-timeline-item>
            </div>
        </v-timeline>

        </div>

        <!--Shop Section-->
        <div class="shop-section-background mt-5 mb-5">
            <div class="shop-title2 flex justify-center">FOR A LIMITED TIME, SHOP OUR 1ST EDITION ALBUMS FROM SOME OF OUR TOP ARTISTS</div>
            
            <!--Search Function-->
            <div class="flex justify-center mt-5">
                <div class="w-1/2">
                    <v-combobox
                    v-model="searchedItem"
                    clearable
                    filled
                    outlined
                    solo
                    :items="searchableItems"
                    label="SEARCH HERE"
                    ></v-combobox>
                </div>
            </div>

            <!--Albums in display(sample) & Faceted search options-->
            <div class="flex">
                <!--Faceted-->
                <div class="w-1/3">
                        <v-card
                            class="mx-auto"
                            height="600"
                            width="350"
                        >
                            <v-navigation-drawer
                            absolute
                            dark
                            width="100%"
                            permanent
                            >
                            
                            <v-list>
                                <v-list-item-title class="text-h6 p-2">
                                FILTER WITH THE FOLLOWING:
                                </v-list-item-title>
                                <div class=" mt-5 flex flex-col space-y-10 items-center">
                                    <div>
                                        <!--Prices Select-->
                                        <v-btn>
                                            <v-select
                                            v-model="priceValue"
                                            class="menu-color"
                                            label="Select Price Points"
                                            :items="prices"
                                            variant="solo-filled"
                                            >

                                            </v-select>

                                        </v-btn>
                                    </div>

                                    <div>
                                        <!--Era Select-->
                                        <v-btn>
                                            <v-select
                                            v-model="eraValue"
                                            class="menu-color"
                                            label="Select Eras"
                                            :items="eras"
                                            variant="solo-filled"
                                            >

                                            </v-select>

                                        </v-btn>
                                    </div>
                                    
                                </div>

                            </v-list>
                            </v-navigation-drawer>
                        </v-card>
                </div>

                <!--Main Album Display And Cart-->
                <div class="w-2/3 album-cart-background ml-5 ">
                    <!--Album Display-->
                    <div class="h-1/2 p-5 ">
                        <div class="shop-title2 flex justify-center">OUR LIMITED EDITION ALBUMS</div>
                        <div class=" shop-scroller-x">
                            <div class="flex flex-col justify-center items-center"
                            v-for="(album, i) in filterBySearch()"
                            :key="i"
                            >
                                <iframe  
                                style="border-radius:12px" 
                                :src="album.album.src" 
                                width="70%" 
                                height="200px" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                                ></iframe>
                                <div class="flex shop-title3 space-x-10 mb-10">
                                    <div>Price: {{ album.album.price }}</div>
                                    <div>Era: {{ album.album.era }}</div>
                                </div>
                                <div><v-btn @click="cartItem.push(album.album)">ADD TO CART</v-btn></div>
                            </div>
                               
                        </div>
                        
                    </div>
                    
                    
                    <!--Cart Section(conditional Display)-->
                    <div class="h-1/2 mt-12"
                    v-if="cartItem.length != 0"
                    >
                        <div class="shop-title2 flex justify-center">YOUR CART</div>

                        <div class=" shop-scroller-x">
                            <div class="flex flex-col justify-center items-center"
                            v-for="(album, i) in cartDisplay(cartItem)"
                            :key="i"
                            >
                                <iframe  
                                style="border-radius:12px" 
                                :src="album.src" 
                                width="70%" 
                                height="200px" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                                ></iframe>
                                <div class="flex shop-title3 space-x-10 mb-10">
                                    <div>Price: {{ album.price }}</div>
                                    <div>Era: {{ album.era }}</div>
                                </div>
                                <div class="mb-5"><v-btn @click="removeItem(i)">REMOVE</v-btn></div>
                                
                            </div>
                        </div>

                    </div>
                        

                </div>

                
                <!--Filler Space-->
                <div class="w-1/3"></div>
            </div>

            

            

        </div>



    </div>
</template>