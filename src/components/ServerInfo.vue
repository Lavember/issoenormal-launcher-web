<template>
  <div class="server-container">
    <div class="player-count">
      <p>
        <q-icon
          name="wifi"
          style="top: -2px; margin-left: 3px; margin-right: 3px"
        /><span style="color: #ffbd59">21</span>
        players online!
      </p>
    </div>
    <div class="events-container">
      <p><span style="color: #ffbd59">Eventos</span> acontecendo!!!</p>
      <q-carousel
        animated
        v-model="slide"
        infinite
        autoplay
        transition-prev="slide-right"
        transition-next="slide-left"
        class="events-carousel"
      >
        <q-carousel-slide
          v-for="sl in slides"
          :key="sl.id"
          :name="sl.id"
          class="events-slide"
        >
          {{ sl.text }}
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(1);
const slides = ref([
  {
    id: 1,
    text: "SKYWARS",
  },
  {
    id: 2,
    text: "EVENTO BUG",
  },
]);
</script>

<style>
.server-container {
  width: 160px;
  height: 90px;
  background: #202020;
  border-radius: 2px;
}

.events-carousel,
.events-slide {
  width: 145px;
  height: 30px;
  font-size: 20px;
  background: #ffbd59;
  padding: 0;
}

.events-carousel {
  margin-left: 7px;
}

.events-slide {
  display: grid;
  align-items: center;
  justify-items: center;
  color: black;
}

.player-count {
  margin: 4px;
  font-size: 15.5px;
}

.player-count p {
  margin-bottom: -5px;
}

.events-container p {
  font-size: 11px;
  margin: 8px;
}
</style>
