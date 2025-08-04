<template>
  <section class="contact-section">
    <h2>Kontakt</h2>
    <p>Loreno.f.Biffi@gmail.com</p>
    <p>Zürich, Schweiz</p>
    <a href="https://github.com/LorenoWiss" target="_blank" class="github-link">
      <font-awesome-icon :icon="['fab', 'github']" /> GitHub
    </a>
    <p>
      Ich arbeite im Moment noch an einem Kontaktformular. Bitte kontaktieren Sie mich direkt per
      E-Mail.
    </p>
  </section>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub)

export default {
  name: 'ContactForm',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    submitForm() {
      console.log('Formular gesendet:', this.form)
      alert('Vielen Dank für deine Nachricht!')
      this.form = { name: '', email: '', message: '' }
    },
  },
}
</script>

<style scoped>
.contact-section {
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  min-height: 150px;
}

button {
  padding: 0.75rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #1a252f;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #333;
  text-decoration: none;
  margin-top: 1rem;
}

.github-link:hover {
  color: #000;
}
</style>
