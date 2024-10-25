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

  background-color: #1df0c2 ;
  border-radius: 12px;

  box-shadow: 0px 0px 10px 7px #99a78692;
}
</style>
