<template>
  <div class="device-list">
    <button class="add-button" @click="addDevice">Добавить устройство</button>
    <ul class="device-items">
      <li v-for="device in devices" :key="device.id" class="device-item"></li>
    </ul>
  </div>
</template>

<script setup>
import { useDeviceStore } from "../store/devices"

const deviceStore = useDeviceStore()
const { devices, addDevice } = deviceStore
</script>

<style scoped lang="scss">
.device-list {
  .add-button {
    background-color: #000000;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #00000056;
    }
  }

  .device-items {
    list-style-type: none;
    padding: 0;
    margin: 0;

    .device-item {
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.648);
      border-radius: 5px;
      margin-top: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
