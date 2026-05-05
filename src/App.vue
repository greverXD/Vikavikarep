<template>
  <div>
    <nav class="nav">
      <router-link to="/">Безопасность</router-link>
      <router-link to="/asia-spa">Asia Spa</router-link>
      <router-link to="/third">Соседи помогают</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #111;
  flex-wrap: wrap; /* адаптив */
}

.nav a {
  color: white;
  text-decoration: none;
}

.nav a.router-link-active {
  font-weight: bold;
}
</style>