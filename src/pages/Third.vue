<template>
  <div class="page">

    <!-- HEADER -->
    <header class="header">
      <div class="logo">СоседиПомогают</div>

      <nav class="nav">
        <a href="#problem">Проблема</a>
        <a href="#solution">Решение</a>
        <a href="#actors">Участники</a>
        <a href="#work">Как работает</a>
        <a href="#monetization">Монетизация</a>
      </nav>
    </header>

    <!-- HERO -->
    <section class="section hero">
      <div>
        <h1 class="title">
          СоседиПомогают — платформа взаимопомощи в вашем районе
        </h1>

        <p class="subtitle">
          Обменивайтесь услугами и вещами с людьми рядом
        </p>

        <div class="buttons">
          <button class="btn btn-primary">Зарегистрироваться</button>
          <button class="btn btn-secondary">Как это работает</button>
        </div>

        <div class="tags">
          <span class="tag" v-for="t in tags" :key="t">{{ t }}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Популярные категории</div>
        <div v-for="c in categories" :key="c" class="card-text">
          • {{ c }}
        </div>
      </div>
    </section>

    <!-- PROBLEM -->
    <section class="section" id="problem">
      <h2 class="title">Почему это нужно</h2>
      <p class="subtitle">
        Люди не знают соседей, помощь рядом недоступна, ресурсы простаивают.
      </p>
    </section>

    <!-- SOLUTION -->
    <section class="section" id="solution">
      <h2 class="title">Решение</h2>

      <div class="grid">
        <Card v-for="item in solution" :key="item.title" :item="item" />
      </div>
    </section>

    <!-- ACTORS -->
    <section class="section" id="actors">
      <h2 class="title">Участники</h2>

      <div class="grid">
        <Card v-for="actor in actors" :key="actor.title" :item="actor" />
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="section" id="work">
      <h2 class="title">Как работает</h2>

      <div class="steps">
        <div v-for="(step, i) in steps" :key="i" class="step">
          <div class="step-number">Шаг {{ i + 1 }}</div>
          <div class="step-title">{{ step.title }}</div>
          <div class="step-text">{{ step.text }}</div>
        </div>
      </div>
    </section>

    <!-- MONETIZATION -->
    <section class="section" id="monetization">
      <h2 class="title">Монетизация</h2>

      <div class="grid">
        <Card v-for="m in monetization" :key="m.title" :item="m" />
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section contact">
      <h2 class="contact-title">Присоединяйтесь</h2>

      <div class="contact-buttons">
        <button class="btn btn-primary">Начать</button>
        <button class="btn btn-secondary">Стать провайдером</button>
      </div>
    </section>

  </div>
</template>

<script setup>
import Card from '../components/BaseCard.vue'

const tags = [
  "Помощь рядом",
  "Экономия времени",
  "Доверие"
]

const categories = [
  "Ремонт",
  "Доставка",
  "Инструменты",
  "Питомцы",
  "Помощь пожилым"
]

const solution = [
  { title: "Локальный рынок", text: "Исполнители рядом" },
  { title: "Обмен вещами", text: "Инструменты и техника" },
  { title: "Помощь пожилым", text: "Поддержка рядом" },
  { title: "Безопасные платежи", text: "Оплата онлайн" }
]

const actors = [
  { title: "Провайдеры", text: "Оказывают услуги" },
  { title: "Потребители", text: "Заказывают помощь" },
  { title: "Соседи", text: "Делятся вещами" },
  { title: "Бизнес", text: "Продвигает услуги" }
]

const steps = [
  { title: "Выбор", text: "Категория услуг" },
  { title: "Поиск", text: "Соседи рядом" },
  { title: "Заявка", text: "Создание заказа" },
  { title: "Выполнение", text: "Чат и детали" },
  { title: "Отзыв", text: "Рейтинг" }
]

const monetization = [
  { title: "Комиссия", text: "5–10%" },
  { title: "Подписка", text: "Сосед+" },
  { title: "Реклама", text: "Бизнес" },
  { title: "Продвижение", text: "Закрепление" }
]
</script>

<style scoped>
.page {
  font-family: system-ui;
}

/* header */
.header {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: white;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
}

.nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* layout */
.section {
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 16px;
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 30px;
}

/* UI */
.title {
  font-size: 28px;
  font-weight: 700;
}

.subtitle {
  color: #555;
}

.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.steps {
  display: grid;
  gap: 16px;
}

.step {
  background: #fff;
  padding: 16px;
  border-radius: 12px;
}

.tag {
  background: #eef2ff;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
}

/* buttons */
.btn {
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: #2563eb;
  color: white;
}

.btn-secondary {
  background: #e5e7eb;
}

/* contact */
.contact {
  background: #111;
  color: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
}

/* 📱 адаптив */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 22px;
  }

  .header {
    flex-direction: column;
    gap: 10px;
  }
}
</style>