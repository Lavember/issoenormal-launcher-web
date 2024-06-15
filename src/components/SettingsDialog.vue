<template>
  <q-card class="cfg-dialog">
    <div class="cfg-container">
      <div>
        <p class="cfg-title">Conta</p>
        <p class="cfg-text">
          Tipo de conta:
          <span style="color: #ffbd59">Original</span> (Herobrine)
        </p>
        <button class="cfg-btn" @click="() => router.push('/login')">
          deslogar
        </button>
        <!-- <button class="cfg-btn">trocar conta</button> -->
      </div>
      <div class="flex justify-between">
        <div>
          <p class="cfg-title">Jogo</p>
        </div>
        <div>
          <p class="cfg-title">Launcher</p>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
</script>

<style>
.cfg-btn {
  border: 1px solid #ffbd59;
  border-radius: 4px;
  color: white;
  background: transparent;
  height: 20px;
  transition: all 0.2s ease;
  font-size: 12px;
  cursor: pointer;
}

.cfg-btn:hover {
  background: #333333;
}

.cfg-btn:active {
  background: #4a4a4a;
  transform: translateY(5%) scale(95%);
}

.cfg-dialog {
  background: #202020;
  border: 2px solid #ffbd59;
  border-top: none;
  border-radius: 2px;
  min-width: 335px;
  font-size: 10px;
  padding: 10px;
}

p.cfg-text {
  margin-bottom: 0;
  font-size: 12px;
}

.cfg-title {
  font-family: "Mine";
  font-size: 14px;
  margin: 0;
}

.cfg-container {
  display: flex;
  flex-direction: column;
}
</style>
