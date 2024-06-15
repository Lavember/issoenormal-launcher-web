<template>
  <div>
    <div class="container flex">
      <div>
        <div class="avatar-container row">
          <img src="avatar.png" alt="" class="avatar" />
          <div class="player-text justify-start">
            <p class="player-name">Herobrine</p>
            <p class="points-text">
              <span style="color: #ffbd59">344 pts</span>
            </p>
          </div>
        </div>
        <p class="awards-text">Suas conquistas</p>
      </div>
      <div class="scroll-shadow"></div>
      <QScrollArea
        style="max-width: 100%"
        dark
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        :visible="true"
        class="awards-container"
      >
        <div class="awards">
          <div
            class="award pixel-border"
            v-for="award in awardList"
            :key="award.id"
            ref="awardRefs"
            @mouseenter="showPreview(awardRefs[award.id], award.id)"
            @mouseleave="hidePreview"
          >
            <img class="award-icon" src="MARTELO_6_BORDA.png" />
          </div>
        </div>
      </QScrollArea>
    </div>
    <div class="awards-hover" ref="awardPreview" style="display: none">
      <div class="border-div">
        <div class="awards-upper-info">
          <img class="award-icon-large" src="MARTELO_6_BORDA.png" />

          <p v-if="awardList[selectedAward].viewable == true">
            {{ awardList[selectedAward].name }}
          </p>
          <BugText v-else :value="awardList[selectedAward].name" />
        </div>
        <p
          class="award-description"
          v-if="awardList[selectedAward].viewable == true"
        >
          {{ awardList[selectedAward].description }}
        </p>
        <BugText
          v-else
          :value="awardList[selectedAward].description"
          class="award-description"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { QScrollArea } from "quasar";
import BugText from "./BugText.vue";
import anime from "animejs";
import { ref } from "vue";

var thumbStyle = {
  right: "0.5px",
  borderRadius: "5px",
  backgroundColor: "#ffffff",
  width: "2px",
  opacity: 0.75,
};

var barStyle = {
  right: "0px",
  borderRadius: "9px",
  backgroundColor: "#adadad",
  width: "3px",
  opacity: 1,
};

let _awards = [
  {
    id: 0,
    name: "SECRETO!!! ",
    description: "conquista secreta!",
    type: "secret",
    viewable: false,
  },
];
for (let i = 1; i < 40; i++) {
  _awards.push({
    id: i,
    name: "Tribunado: " + i.toString(),
    description: "Descricaozera!",
    type: "normal",
    viewable: true,
  });
}

const awardList = ref(_awards);
const awardRefs = ref([]);
const awardPreview = ref(null);
const selectedAward = ref(0);

const OFFSET = 10;
function showPreview(clickRef, index) {
  selectedAward.value = index;
  const element = awardPreview.value;
  element.style.display = "block";
  const origin = clickRef;
  let {
    x: oX,
    y: oY,
    width: oWidth,
    height: oHeight,
  } = origin.getBoundingClientRect();
  let {
    x: eX,
    y: eY,
    width: eWidth,
    height: eHeight,
  } = element.getBoundingClientRect();
  oX /= 1.5;
  oY /= 1.5;
  oWidth /= 1.5;
  oHeight /= 1.5;
  eX /= 1.5;
  eY /= 1.5;
  eWidth /= 1.5;
  eHeight /= 1.5;

  let computedX = oX - eWidth - OFFSET,
    computedY = oY;

  element.style.left = computedX + "px";
  element.style.top = computedY + "px";
}

function hidePreview() {
  const element = awardPreview.value;
  element.style.display = "none";
}
</script>

<style>
.awards-hover {
  position: absolute;
  background: #202020;
  width: 176px;
  height: 96px;
  left: 0;
  top: 0;
  transform-origin: top left;
  z-index: 3;
  padding: 2px;
  border-radius: 4px;
}

.awards-upper-info {
  display: flex;
  align-items: center;
}

.awards-upper-info p {
  margin-bottom: -5px;
  margin-left: 10px;
  font-size: 12px;
}

.awards-hover .border-div {
  border: 2px solid #c0c0c0;
  border-radius: 2px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 6px;
}

.award-icon-large {
  width: 34px;
  height: 34px;
}

.award-description {
  margin: 0;
  font-size: 10px;
}

.awards-container {
  margin-top: 10px;
  height: 65px;
  margin-left: 2px;
}

.container {
  margin: 6px;
  padding: 6px;
  background: #202020;
  width: 159px;
  height: 124px;
  flex-direction: column;
  overflow: visible;
  position: relative;
}

.scroll-shadow {
  position: absolute;
  z-index: 1;
  margin-left: -5px;
  width: 100%;
  bottom: 0;
  height: 16px;
  background: rgb(0, 0, 0);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #202020 59%);
}

.awards-text {
  margin-bottom: -10px;
  margin-left: 1.5px;
  font-size: 10px;
}

.awards {
  /* margin-top: 8px; */
  display: flex;
  flex-wrap: wrap;
  gap: 0px;
  width: auto;
  overflow: visible;
}

.award {
  /* background: #ffbd59; */
  width: 28px;
  height: 28px;

  background-size: cover;
  box-sizing: border-box;
  transition: all 0.1s ease-out;
}

.award-icon {
  width: 25.2px;
  height: 25.2px;
  margin: 1px;
  --zoom: 25;
  --block-size: 48px;
  border-image: url("assets/achievement-panel.png");
  border-width: calc(var(--block-size) / var(--zoom));
  border-image-width: calc(var(--block-size) / var(--zoom));
  border-image-slice: 43% 43% fill;
  border-image-repeat: stretch;
}

.award:hover {
  transform: scale(1.05);
}

.points-container {
  margin-bottom: 0px;
}

.avatar-container {
  font-size: 10px;
}

.avatar {
  width: 28px;
  height: 28px;
  margin-left: 1px;
}

.player-text {
  display: flex;
  flex-direction: column;

  margin-left: 4px;
}

.player-text p {
  margin: 0;
  margin-top: -4px;
}

.player-name {
  font-size: 15px;
}

.points-text {
  font-size: 11px;
  margin: 0;
}
</style>
