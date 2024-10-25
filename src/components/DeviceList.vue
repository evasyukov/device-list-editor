<template>
  <div class="device-list">
    <button class="add-button" @click="addDevice">Добавить устройство</button>
    <ul class="device-items">
      <li v-for="device in devices" :key="device.id" class="device-item">
        <Device :device="device" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useDeviceStore } from "../store/devices"
import Device from "./Device.vue"

const deviceStore = useDeviceStore()
const { devices, addDevice } = deviceStore
</script>

<style scoped lang="scss">
.device-list {
  .add-button {
    background-color: #328775;
    color: #fff;

    padding: 10px 20px;
    
    border: none;
    border-radius: 12px;
    cursor: pointer;

   &:hover {
      background-color: #51d1b5;
    }
  }

  .device-items {
    list-style-type: none;
    padding: 0;
    margin: 0;

    .device-item {
      padding: 10px;
      background-color: #edf5e1b8 ;
      border-radius: 5px;
      margin-top: 10px;
      box-shadow: 2px 2px 4px rgb(0, 0, 0);
    }
  }
}
</style>
