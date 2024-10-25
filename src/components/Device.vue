<template>
  <!-- редактирование устройства -->
  <DeviceEditing v-if="editing" :device="device" />

  <!-- блок с информацией о устройстве -->
  <div v-else class="device_info">
    <div class="device_info_name">
      <span>{{ device.name }}</span>
      <button @click="deviceStore.removeDevice(device.id)">Удалить</button>
    </div>

    <ul>
      <li v-for="node in device.nodes" :key="node.id">
        {{ node.name }}
      </li>
    </ul>
    <button class="edit" @click="toggleEdit">Редактировать</button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useDeviceStore } from "../store/devices"

import DeviceEditing from "./DeviceEditing.vue"

const props = defineProps(["device"])
const editing = ref(false)
const deviceName = ref(props.device.name)
const deviceStore = useDeviceStore()

// переключение режима редактирования
const toggleEdit = () => {
  editing.value = !editing.value
}

// сохранение изменений устройства
const saveEdit = () => {
  deviceStore.editDevice(props.device.id, deviceName.value)
  editing.value = false
}
</script>

<style scoped lang="scss">
.device_info {
  span {
    font-weight: 600;
    font-size: 20px;
  }

  ul {
    list-style: disclosure-closed;

    font-size: 18px;
    padding-left: 40px;
  }

  button {
    color: #fff;

    padding: 5px 10px;

    border: 1px solid #000000;
    border-radius: 5px;
    cursor: pointer;

    &.edit {
      margin: 15px 0 0 5px;
      background-color: #328775;

      &:hover {
        background-color: #4ac0a6;
      }
    }
  }

  .device_info_name {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      margin-right: 5px;
      background-color: #f0531d;

      &:hover {
        background-color: #ee8d6c;
      }
    }
  }
}

.nodes {
  margin-top: 10px;
}
</style>
