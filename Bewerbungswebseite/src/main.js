// src/main.js (ohne Router)
import { createApp } from 'vue'
import App from './App.vue'
import Introduction from './components/Einleitung.vue'
import AboutMe from './components/ÜberMich.vue'
import Skills from './components/Fähigkeiten.vue'
import Contact from './components/Kontakt.vue'

const app = createApp(App)

// Globale Komponenten registrieren (optional)
app.component('Introduction', Introduction)
app.component('AboutMe', AboutMe)
app.component('Skills', Skills)
app.component('Contact', Contact)

app.mount('#app')