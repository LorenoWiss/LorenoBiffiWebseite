<template>
  <header class="header">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Profilbild" class="profile-image">
      <router-link to="/" class="logo">Loreno Biffi</router-link>
    </div>
    
    <button class="menu-toggle" @click="toggleMenu" aria-label="Menü öffnen">
      <span class="hamburger"></span>
    </button>
    
    <nav class="nav" :class="{ 'active': menuOpen }" @click="closeMenu">
      <div class="nav-links">
        <router-link v-if="$route.path !== '/ueber-mich'" to="/ueber-mich" class="nav-link">Über Mich</router-link>
        <router-link v-else to="/" class="nav-link">Startseite</router-link>
        <a href="/#faehigkeiten" class="nav-link">Fähigkeiten</a>
        <a href="/#kontakt" class="nav-link">Kontakt</a>
      </div>
    </nav>
    
    <div class="menu-overlay" :class="{ 'active': menuOpen }" @click="closeMenu"></div>
  </header>
</template>

<script>
export default {
  name: 'GlassHeader',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      document.body.style.overflow = this.menuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.menuOpen = false
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: linear-gradient(170deg, rgba(20, 71, 30, 0.9), rgba(104, 144, 77, 0.9) 30%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1002;
}

.profile-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border: none;
  border-radius: 0;
}

.logo {
  color: white;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.2rem;
  transition: opacity 0.3s;
}

.logo:hover {
  opacity: 0.9;
}

/* Hamburger Menu */
.menu-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  position: relative;
  transition: all 0.3s;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: white;
  transition: all 0.3s;
}

.hamburger::before {
  transform: translateY(-7px);
}

.hamburger::after {
  transform: translateY(7px);
}

.nav.active + .menu-toggle .hamburger {
  background: transparent;
}

.nav.active + .menu-toggle .hamburger::before {
  transform: rotate(45deg);
}

.nav.active + .menu-toggle .hamburger::after {
  transform: rotate(-45deg);
}

/* Navigation */
.nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background: linear-gradient(160deg, rgba(20, 71, 30, 0.95), rgba(104, 144, 77, 0.95) 40%);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  padding: 6rem 1.5rem 2rem;
  transition: right 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 1001;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav.active {
  right: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  transition: all 0.3s;
  display: block;
  white-space: nowrap;
  text-align: center;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(5px);
}

/* Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 1000;
}

.menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Desktop Version */
@media (min-width: 768px) {
  .menu-toggle,
  .menu-overlay {
    display: none;
  }
  
  .nav {
    position: static;
    width: auto;
    height: auto;
    background: transparent;
    backdrop-filter: none;
    padding: 0;
  }
  
  .nav-links {
    flex-direction: row;
    gap: 0.8rem;
  }
  
  .nav-link {
    padding: 0.5rem 0.8rem;
    font-size: 0.95rem;
  }
  
  .nav-link:hover,
  .nav-link.router-link-exact-active {
    transform: none;
    background: rgba(255, 255, 255, 0.1);
  }
}
</style>