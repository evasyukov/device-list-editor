<template>
  <div class="device-editing">
    <input v-model="deviceName" placeholder="Название устройства" />

    <!-- список узлов устройства -->
    <div
      class="device-editing_node"
      v-for="node in device.nodes"
      :key="node.id"
    >
      <input v-model="node.name" placeholder="Название узла" />
      <button @click="removeNode(node.id)">Удалить узел</button>
    </div>

    <!-- кнопки управления -->
    <div class="device-editing_controls">
      <button class="add" @click="addNode">Добавить узел</button>
      <button class="save" @click="saveEdit">Сохранить</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useDeviceStore } from "../store/devices"

const props = defineProps(["device"])
const emit = defineEmits(["toggleEdit"])
const deviceStore = useDeviceStore()

const deviceName = ref(props.device.name)

// сохранение изменений
const saveEdit = () => {
  deviceStore.editDevice(props.device.id, deviceName.value)

  emit("toggleEdit")
}

// добавление узла
const addNode = () => {
  deviceStore.addNodeToDevice(props.device.id)
}

// удаление узла
const removeNode = (nodeId) => {
  deviceStore.removeNodeFromDevice(props.device.id, nodeId)
}
</script>

<style scoped lang="scss">
.device-editing {
  margin-bottom: 20px;

  input {
    background-color: #328775;
    color: #fff;

    border: none;
    border-radius: 5px;

    padding: 7px;
    margin-bottom: 10px;
    font-size: 20px;
  }

  &_controls {
    button {
      background-color: #74df8e;
      color: #000;
      font-size: 12px;

      padding: 5px 10px;
      margin: 10px 5px 0;

      border: 1px solid #000000;
      border-radius: 5px;

      cursor: pointer;

      &:hover {
        background-color: #80cb93be;
      }
    }
  }

  &_node {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 5px;
    border-top: 1px solid #000000;

    input {
      background-color: #328774b3;
      color: #fff;

      border: none;
      border-radius: 5px;

      padding: 7px;
      margin-top: 5px;
      font-size: 16px;
    }

    button {
      margin-right: 5px;
      background-color: #f0531d;
      color: #fff;
      font-size: 12px;
      padding: 5px 10px;

      border: 1px solid #000000;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #ee8d6c;
      }
    }
  }
}

.node {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;

  // border: 1px solid #000000;

  input {
    background-color: #328774b3;
    color: #fff;

    border: none;
    border-radius: 5px;

    padding: 7px;
    margin-top: 5px;
    font-size: 16px;
  }
}
</style>
