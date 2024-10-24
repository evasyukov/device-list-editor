import { defineStore } from "pinia"
import { reactive } from "vue"

export const useDeviceStore = defineStore("deviceStore", () => {
  const devices = reactive([
    { id: 1, name: "Устройство 1", nodes: [{ id: 1, name: "Узел 1" }] },
    { id: 2, name: "Устройство 2", nodes: [] },
    {
      id: 3,
      name: "Устройство 2",
      nodes: [
        { id: 1, name: "Узел 1" },
        { id: 2, name: "Узел 2" },
      ],
    },
  ])

  return {
    devices,
  }
})
