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

  // редактирование узла устройства
  const editDevice = (id, newName) => {
    const device = devices.find((device) => device.id === id)
    if (device) {
      device.name = newName
    }
  }

  return {
    devices,
    editDevice,
  }
})
