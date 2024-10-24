<template>
  <div class="app-container">
    <DeviceList />
  </div>
</template>

<script setup>
import DeviceList from "./components/DeviceList.vue"
</script>

<style lang="scss">
.app-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #adacac57;
  border-radius: 8px;
}
</style>
