<template>
  <div>
    <h2 class="title">❗ {{ title }}</h2>
    <div class="card">
      <ul>
        <slot />
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style scoped>
.title {
  color: #b30000;
  margin-top: 20px;
}

.card {
  background: #fafafa;
  padding: 12px;
  border-left: 4px solid red;
}
</style>