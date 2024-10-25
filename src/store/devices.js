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

  // генерация id устройства
  const generateId = () => {
    let id = devices.length + 1
    return id
  }

  // редактирование устройства
  const editDevice = (id, newName) => {
    const device = devices.find((device) => device.id === id)
    if (device) {
      device.name = newName
    }
  }

  // добавление устройства
  const addDevice = () => {
    devices.push({
      id: generateId(),
      name: "Новое устройство",
      nodes: [],
    })
  }

  // удаление устройства
  const removeDevice = (id) => {
    const index = devices.findIndex((device) => device.id === id)
    if (index !== -1) {
      devices.splice(index, 1)
    }
  }

  return {
    devices,
    addDevice,
    removeDevice,
    editDevice,
  }
})
