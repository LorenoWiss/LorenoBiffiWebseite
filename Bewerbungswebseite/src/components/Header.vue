<template>
  <header class="header">
    <nav class="nav">
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="Profilbild" class="profile-image">
        <router-link to="/" class="logo">Loreno Biffi</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/ueber-mich">Über Mich</router-link>
        <router-link to="/#faehigkeiten">Fähigkeiten</router-link>
        <router-link to="/#kontakt">Kontakt</router-link>
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
  align-items: center;
  max-width: auto;
  margin: auto;
  justify-content: space-between;
  padding-left: 2%;
  padding-right: 2%;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-right: 2rem;
}

.logo {
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
}

.nav-links a, .nav-links router-link {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
}

.nav-links a:hover, .nav-links router-link:hover {
  text-decoration: underline;
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>