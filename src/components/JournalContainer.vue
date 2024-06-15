<template>
  <div class="journal-container">
    <div class="header flex justify-between">
      <div class="header-left">
        <img src="logo.png" class="logo" />
        <p class="title">ISSO É NORMAL?</p>
      </div>
      <div class="header-btns">
        <q-btn
          push
          icon="img:cord.png"
          :ripple="false"
          class="header-btn icon-btn"
        />
        <q-btn push class="header-btn" :ripple="false">Patch Notes</q-btn>
        <q-btn
          push
          icon="img:dario.png"
          :ripple="false"
          class="header-btn icon-btn"
        />
      </div>
    </div>
    <div class="slide-container">
      <swiper-container
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :mousewheel="true"
        :cardsEffect="{ slideShadows: true, rotate: false, perSlideOffset: 43 }"
        :slideActiveClass="'active-slide'"
        class="carousel"
      >
        <swiper-slide v-for="n in 4" :key="n" class="swiper-slide"
          ><div class="slide"><img src="jornal.png" class="slide-img" /></div
        ></swiper-slide>
        ...
      </swiper-container>

      <!-- <q-carousel
      animated
      v-model="slide"
      arrows
      infinite
      transition-prev="slide-right"
      transition-next="slide-right"
      class="carousel"
    >
      <q-carousel-slide :name="1" img-src="jornal.png" class="slide" />
      <q-carousel-slide :name="2" img-src="jornal.png" class="slide" />
      <q-carousel-slide :name="3" img-src="jornal.png" class="slide" />
    </q-carousel> -->
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import Swiper from "swiper";
import "swiper/css";
import "swiper/css/bundle";

// Now you can use Swiper
import { EffectCards, Mousewheel, Navigation } from "swiper/modules";
const modules = [EffectCards, Mousewheel, Navigation];
</script>
<style>
.logo {
  width: 30px;
  height: 30px;
  margin: 0;
  margin-left: 4px;
  border: 2px solid #ffbd59;
  border-radius: 2px;
}

.header-left {
  display: flex;
  flex-direction: row;
}

.title {
  font-size: 16px;
  margin-left: 10px;
  margin-top: 4px;
}

.journal-container {
  font-family: "Mine";
}

.active-slide img {
  opacity: 1 !important;
}

.header-btn {
  background: #f6ffff;
  color: #636363;
  padding: 6px;
  font-size: 8.5px;
  padding: 6px;
  margin-left: 5px;
  border-radius: 2px;
  height: 30px;
}

.header-btn.icon-btn {
  font-size: 12px;
  padding: 0px;
  height: 30px;
  width: 30px;
}

.navNext {
  background: black;
}

.header {
  height: 49px;
  margin: 0px 15px 0 15px;
  padding-top: 15px;
}

.carousel {
  width: 248px !important;
  height: 317px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background: none;
  margin-left: 20px;
}

.swiper-slide {
  box-shadow: 37px 13px 30px -10px rgba(0, 0, 0, 0.74);
  -webkit-box-shadow: 37px 13px 30px -10px rgba(0, 0, 0, 0.74);
  -moz-box-shadow: 37px 13px 30px -10px rgba(0, 0, 0, 0.74);
}

.slide {
  background: #545454;
  width: auto;
  height: auto;
  margin: 10px;
  margin: 0;
}

.slide img {
  opacity: 0.5;
  transition: opacity 0.2s ease 0s;
}

.slide-container {
  width: 434px;
  height: 325px;
  display: flex;
  align-items: center;
  justify-items: start;
  overflow: hidden;
}

.slide-img {
  width: 248px;
  height: 317px;
}
</style>
