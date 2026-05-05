<template>
  <div class="page">
    <header>
      <h1>Инструкция по интернет-безопасности</h1>
      <p class="subtitle">Памятка для пользователей</p>
    </header>

    <div class="container">
      <img
        class="image"
        src="https://www.osh.by/wp-content/uploads/2022/05/shutterstock_383644120-1.jpg"
      />

      <Section title="Что нужно запомнить сразу">
        <li>Интернет — как большой город</li>
        <li>Соблюдайте простые правила</li>
      </Section>

      <Section title="Создавайте надёжные пароли">
        <li>10–12 символов</li>
        <li>Буквы + цифры</li>
      </Section>
    </div>
  </div>
</template>

<script setup>
import Section from '../components/Section.vue'
</script>

<style scoped>
.page {
  padding: 16px;
}

.container {
  max-width: 900px;
  margin: auto;
}

.image {
  width: 100%;
  border-radius: 6px;
}

/* 📱 адаптив */
@media (max-width: 600px) {
  h1 {
    font-size: 22px;
  }

  .container {
    padding: 0 10px;
  }
}
</style>