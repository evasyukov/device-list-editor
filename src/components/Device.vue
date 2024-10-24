<template>
  <div class="device">
    <div v-if="editing">

    </div>

    <div v-else>
      <span>{{ device.name }}</span>
      <ul>
        <li v-for="node in device.nodes" :key="node.id">
          {{ node.name }}
        </li>
      </ul>
      <button>Редактировать</button>
      <button>Удалить</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps(["device"])
const editing = ref(false)

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
