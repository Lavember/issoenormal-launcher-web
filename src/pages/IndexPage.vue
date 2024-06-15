<template>
  <div class="launcher">
    <div class="jornal">
      <JournalContainer />
    </div>
    <div class="bottom-row">
      <div class="side-square player-square">
        <PlayerInfo />
      </div>

      <div class="side-square server-square">
        <ServerInfo />
      </div>

      <div class="play-container">
        <q-linear-progress
          rounded
          size="13px"
          :value="progress_val"
          class="progress-bar"
        >
          <div class="absolute-full flex flex-center">
            <q-badge
              color=""
              text-color="black"
              :label="Math.min(Math.floor(progress_val * 100), 100) + '%'"
            />
          </div>
        </q-linear-progress>
      </div>
      <q-btn
        push
        label="PLAY"
        @click="playAction"
        class="play-button"
        :ripple="false"
        :loading="progress"
      >
        <template v-slot:loading> {{ playando_text }} </template>
      </q-btn>
      <div class="footer">
        <p>
          <a href="#">suporte</a> / <a href="#">bug report</a> /
          <a href="#">sla tlg</a> <br />
          v. launcher 0.001
        </p>
        <q-btn
          icon="settings"
          class="settings-btn"
          :ripple="false"
          flat
          round
          size="12px"
          padding="none"
          @click="settings_show = true"
        />
      </div>
    </div>
    <q-dialog
      v-model="settings_show"
      position="top"
      :backdrop-filter="'blur(2.5px)'"
    >
      <SettingsDialog></SettingsDialog>
    </q-dialog>
  </div>
</template>

<script setup>
import { Loading, QBtn } from "quasar";
import { ref } from "vue";
import PlayerInfo from "components/PlayerInfo.vue";
import BugText from "../components/BugText.vue";
import JournalContainer from "../components/JournalContainer.vue";
import ServerInfo from "../components/ServerInfo.vue";
import SettingsDialog from "../components/SettingsDialog.vue";

const progress = ref(false);
const progress_val = ref(0.0);
const playando_text = ref("PLAYANDO");

const settings_show = ref(false);

const playAction = () => {
  console.log("play play!");
  progress.value = true;
  setInterval(() => {
    playando_text.value = playando_text.value + ".";
    if (playando_text.value == "PLAYANDO....") {
      playando_text.value = "PLAYANDO";
    }

    if (progress_val.value < 1) {
      progress_val.value += 0.05;
    }
  }, 300);
  eel.start_mine();
};

defineOptions({
  name: "IndexPage",
  inheritAttrs: false,
  customOptions: {},
});
</script>

<style>
.settings-btn {
  background: transparent;
  color: white;
  height: 12px;
}

a {
  color: #38b6ff;
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
}

.footer {
  font-size: 8px;
  color: #c0c0c0;
  display: flex;
  justify-content: space-between;
}

.player-square {
  height: 135px;
}

.launcher {
  width: 642px;
  height: 394px;
  background: #202020;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 10px;
}

.progress-bar {
  width: 164px;
  border-radius: 2px;
}

.play-button {
  width: 170px;
  height: 51px;
  background: #ffbd59;
  color: black;
  font-size: 19px;
  font-weight: 500;
  font-family: "Mine";

  border-bottom: #f1a22a 5px solid;
  border-right: #f1a22a 5px solid;
  border-radius: 2px;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), border 0.3s linear !important;
}

.play-button:hover {
  border-bottom: #c48323 5px solid;
  border-right: #c48323 5px solid;
  border-radius: 2px;
}

.play-button::before {
  border-bottom: none;
  box-shadow: none;
}

/* .play-button:active {
  background: #ffbd59;
} */

.jornal {
  width: 433px;
  height: 374px;
  background: #545454;
}

.bottom-row {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
}

.play-container {
  width: 170px;
  height: 22px;
  background: #545454;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 2px;
}

.side-square {
  width: 170px;

  background: #545454;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 2px;
}

.server-square {
  height: 102px;
}
</style>
