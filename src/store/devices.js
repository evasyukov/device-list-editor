import { defineStore } from "pinia"
import { reactive } from "vue"

export const useDeviceStore = defineStore("deviceStore", () => {
  const devices = reactive([
    { id: 1, name: "Телефон", nodes: [{ id: 1, name: "Нокиа" }] },
    { id: 2, name: "Пылесос", nodes: [] },
    {
      id: 3,
      name: "Ноутбук",
      nodes: [
        { id: 1, name: "Леново" },
        { id: 2, name: "Самсунг" },
      ],
    },
  ])

  // генерация id для устройств
  const generateIdDevice = () => {
    let deviceIdCounter = devices.length + 1
    return deviceIdCounter
  }

  // генерация id для узлов
  const generateIdNode = () => {
    let nodeIdCounter =
      Math.max(...devices.flatMap((d) => d.nodes.map((n) => n.id)), 0) + 1
    return () => nodeIdCounter++
  }

  // добавление устройства
  const addDevice = () => {
    devices.push({
      id: generateIdDevice(),
      name: "Новое устройство",
      nodes: [],
    })
  }

  // редактирование устройства
  const editDevice = (id, newName) => {
    const device = devices.find((device) => device.id === id)
    if (device) {
      device.name = newName
    }
  }

  // редактирование узла
  const editNode = (deviceId, nodeId, newName) => {
    const device = devices.find((d) => d.id === deviceId)
    if (device) {
      const node = device.nodes.find((n) => n.id === nodeId)
      if (node) {
        node.name = newName
      }
    }
  }

  // удаление устройства
  const removeDevice = (id) => {
    const index = devices.findIndex((device) => device.id === id)
    if (index !== -1) {
      devices.splice(index, 1)
    }
  }

  // добавление узла к устройству
  const addNodeToDevice = (deviceId) => {
    const device = devices.find((device) => device.id === deviceId)
    if (device) {
      device.nodes.push({ id: generateIdNode(), name: "Новый узел" })
    }
  }

  // удаление узла
  const removeNodeFromDevice = (deviceId, nodeId) => {
    const device = devices.find((d) => d.id === deviceId)
    if (device) {
      device.nodes = device.nodes.filter((node) => node.id !== nodeId)
    }
  }

  return {
    devices,
    addDevice,
    editDevice,
    editNode,
    removeDevice,
    addNodeToDevice,
    removeNodeFromDevice,
  }
})
