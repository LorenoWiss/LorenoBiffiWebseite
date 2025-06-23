<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="logo">Loreno Biffi</router-link>
      <div class="nav-links">
        <router-link to="/about">Über Mich</router-link>
        <router-link to="/skills">Fähigkeiten</router-link>
        <router-link to="/contact">Kontakt</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header {
  background-color: #2c3e50;
  padding: 1rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
}

.nav-links a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>