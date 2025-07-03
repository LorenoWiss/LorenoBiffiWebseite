import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGlobe,
  faLaptopCode,
  faDatabase,
  faPaintBrush,
  faObjectGroup,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons'

// Icons zur Bibliothek hinzufügen
library.add(faGlobe, faLaptopCode, faDatabase, faPaintBrush, faObjectGroup, faLanguage)

const app = createApp(App)

// Font Awesome global registrieren
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router).mount('#app')
