<template>
  <div class="device">
    <div v-if="editing">
        
      <input v-model="deviceName" placeholder="Название устройства" />
      <div class="nodes">
        <h4>Узлы устройства</h4>
        <ul>
          <li v-for="node in device.nodes" :key="node.id">
            {{ node.name }}
          </li>
        </ul>
        <button @click="addNode">Добавить узел</button>
      </div>

      <button @click="saveEdit">Сохранить</button>
    </div>

    <div v-else>
      <span>{{ device.name }}</span>
      <ul>
        <li v-for="node in device.nodes" :key="node.id">
          {{ node.name }}
        </li>
      </ul>
      <button @click="toggleEdit">Редактировать</button>
      <button>Удалить</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useDeviceStore } from '../store/devices'

import Node from "./Node.vue"

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

<style scoped>
.device {
  margin-bottom: 20px;
}

.nodes {
  margin-top: 10px;
}

button {
  margin-top: 10px;
}
</style>
