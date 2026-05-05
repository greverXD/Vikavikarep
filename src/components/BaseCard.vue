<template>
  <div class="card">
    <div class="card-title">{{ item.title }}</div>
    <div class="card-text">{{ item.text }}</div>
  </div>
</template>

<script setup>
defineProps({
  item: Object
})
</script>

<style scoped>
.card {
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #eee;
}

.card-title {
  font-weight: 600;
  margin-bottom: 6px;
}

.card-text {
  font-size: 14px;
  color: #555;
}
</style>