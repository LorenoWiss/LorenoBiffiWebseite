<template>
  <header class="header">
    <nav class="nav">
      <a href="#start" class="logo">Loreno Biffi</a>
      <div class="nav-links">
        <a href="#ueber-mich">Über Mich</a>
        <a href="#faehigkeiten">Fähigkeiten</a>
        <a href="#kontakt">Kontakt</a>
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
  min-height: 10px;
  background: linear-gradient(170deg, #14471E, #68904D 30%);
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