<template>
  <div class="page">
    <!-- HEADER -->
    <header class="header">
      <h1>Инструкция по интернет-безопасности</h1>
      <p class="subtitle">
        Памятка для пользователей, не знакомых с технологиями
      </p>
    </header>

    <!-- CONTENT -->
    <div class="container">

      <img
        class="image"
        src="https://www.osh.by/wp-content/uploads/2022/05/shutterstock_383644120-1.jpg"
      />

      <!-- sections -->
      <Section title="Что нужно запомнить сразу">
        <li>Интернет — как большой город</li>
        <li>Соблюдайте простые правила</li>
      </Section>

      <Section title="Создавайте надёжные пароли">
        <li>10–12 символов</li>
        <li>Буквы, цифры, символы</li>
        <li>Не используйте дату рождения</li>
      </Section>

      <Section title="Не переходите по подозрительным ссылкам">
        <li>Не открывайте ссылки от незнакомцев</li>
        <li>Проверяйте даже от знакомых</li>
      </Section>

      <Section title="Не сообщайте личные данные">
        <li>Не передавайте пароли и коды</li>
        <li>Банки не спрашивают пароль</li>
      </Section>

      <Section title="Проверяйте сайты">
        <li>Адрес начинается с https://</li>
        <li>Есть значок замка</li>
      </Section>

      <Section title="Устанавливайте обновления">
        <li>Закрывают уязвимости</li>
      </Section>

      <Section title="Используйте антивирус">
        <li>Защита от вредоносных программ</li>
      </Section>

      <Section title="Осторожно с Wi-Fi">
        <li>Не вводите данные в публичных сетях</li>
      </Section>

      <img
        class="image"
        src="https://www.arsis.ru/wp-content/uploads/2023/10/pasted-image-0.png"
      />
    </div>

    <!-- FOOTER -->
    <footer class="footer">
      © 2026. Интернет-безопасность
    </footer>
  </div>
</template>

<script setup>
import Section from '../components/Section.vue'
</script>

<style scoped>
.page {
  font-family: Arial, sans-serif;
}

/* header */
.header {
  padding: 24px 16px;
  text-align: center;
  background: #f2f2f2;
}

.header h1 {
  font-size: 28px;
  margin-bottom: 6px;
}

.subtitle {
  color: #555;
}

/* layout */
.container {
  max-width: 900px;
  margin: 20px auto;
  padding: 0 16px;
}

/* image */
.image {
  width: 100%;
  border-radius: 6px;
  margin: 20px 0;
}

/* footer */
.footer {
  text-align: center;
  padding: 20px;
  color: #777;
}

/* 📱 адаптив */
@media (max-width: 768px) {
  .header h1 {
    font-size: 22px;
  }

  .container {
    padding: 0 12px;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 16px;
  }

  .header h1 {
    font-size: 20px;
  }

  .subtitle {
    font-size: 14px;
  }
}
</style>