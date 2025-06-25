<template>
  <header class="header">
    <div class="logo-container" :class="{ 'hidden': menuOpen }">
      <img src="@/assets/logo.png" alt="Profilbild" class="profile-image">
      <router-link to="/" class="logo">Loreno Biffi</router-link>
    </div>
    
    <button class="menu-toggle" @click="toggleMenu" aria-label="Menü öffnen">
      <span class="hamburger"></span>
    </button>
    
    <nav class="nav" :class="{ 'active': menuOpen }">
      <div class="nav-header">
        <img src="@/assets/logo.png" alt="Profilbild" class="drawer-logo">
        <span class="drawer-title">Loreno Biffi</span>
      </div>
      <div class="nav-links">
        <router-link v-if="$route.path !== '/ueber-mich'" to="/ueber-mich" class="nav-link" @click="closeMenu">Über Mich</router-link>
        <router-link v-else to="/" class="nav-link" @click="closeMenu">Startseite</router-link>
        <a href="/#faehigkeiten" class="nav-link" @click="closeMenu">Fähigkeiten</a>
        <a href="/#kontakt" class="nav-link" @click="closeMenu">Kontakt</a>
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
  mounted() {
    window.addEventListener('scroll', this.closeMenu);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.closeMenu);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      document.body.classList.toggle('no-scroll', this.menuOpen);
    },
    closeMenu() {
      this.menuOpen = false;
      document.body.classList.remove('no-scroll');
    }
  }
}
</script>

<style scoped>
:global(.no-scroll) {
  overflow: hidden;
  position: fixed;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: linear-gradient(170deg, rgba(20, 71, 30, 0.9), rgba(104, 144, 77, 0.9) 30%);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: opacity 0.3s ease;
}

.logo-container.hidden {
  opacity: 0;
}

.profile-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.logo {
  color: white;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.2rem;
}

/* Hamburger Menu */
.menu-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1002;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: white;
  transition: transform 0.3s;
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
  width: 45%; /* Deutlich schmaler */
  max-width: 200px; /* Maximale Breite begrenzt */
  height: 100vh;
  background: linear-gradient(160deg, #14471E, #68904D 40%);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  transition: right 0.3s ease-out;
  z-index: 1001;
  box-shadow: -2px 0 10px rgba(0,0,0,0.2);
}

.nav-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  margin-bottom: 1rem;
}

.drawer-logo {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

.drawer-title {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
}

.nav.active {
  right: 0;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.75rem 0.5rem;
  border-radius: 4px;
  transition: background 0.3s;
}

.nav-link:hover {
  background: rgba(255,255,255,0.1);
}

/* Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
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
    flex-direction: row;
    padding: 0;
    max-width: none;
    box-shadow: none;
  }
  
  .nav-header {
    display: none;
  }
  
  .nav-links {
    flex-direction: row;
    gap: 1rem;
  }
  
  .nav-link {
    padding: 0.5rem 1rem;
  }
  
  .logo-container.hidden {
    opacity: 1;
  }
}
</style>