<template>
  <section class="contact-section">
    <h2>Kontakt</h2>
    <p>Loreno.f.Biffi@gmail.com</p>
    <p>Zürich, Schweiz</p>
    
    <form 
      action="https://formspree.io/f/xvgqwrga" 
      method="POST" 
      class="contact-form"
      @submit="handleSubmit"
      novalidate
    >
      <div class="form-group">
        <label for="name">Name *</label>
        <input type="text" id="name" name="name" v-model="form.name"
               :class="{ 'error': errors.name }">
        <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
      </div>
      
      <div class="form-group">
        <label for="email">E-Mail *</label>
        <input type="email" id="email" name="email" v-model="form.email"
               :class="{ 'error': errors.email }">
        <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
      </div>
      
      <div class="form-group">
        <label for="company">Unternehmen</label>
        <input type="text" id="company" name="company" v-model="form.company">
      </div>
      
      <div class="form-group">
        <label for="message">Nachricht *</label>
        <textarea id="message" name="message" v-model="form.message"
                  placeholder="Beschreiben Sie kurz Ihr Praktikumsangebot oder Ihre Anfrage..."
                  :class="{ 'error': errors.message }"></textarea>
        <span v-if="errors.message" class="error-text">{{ errors.message }}</span>
      </div>
      
      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Wird gesendet...' : 'Nachricht senden' }}
      </button>
    </form>
    
    <div v-if="submitStatus === 'success'" class="success-message">
      Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
    </div>
    
    <div v-if="submitStatus === 'error'" class="error-message">
      Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an Loreno.f.Biffi@gmail.com
    </div>
    
    <div class="formspree-attribution">
      <a href="https://formspree.io" target="_blank" class="formspree-link">
        <img src="@/assets/formspree-logo-no-text.svg" alt="Formspree" class="formspree-logo">
        Powered by Formspree
      </a>
    </div>
    
    <div class="social-links">
      <a href="https://github.com/LorenoWiss" target="_blank" class="social-link">
        <font-awesome-icon :icon="['fab', 'github']" /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/loreno-biffi-261658377/" target="_blank" class="social-link">
        <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
      </a>
    </div>
  </section>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin)

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
        company: '',
        message: '',
      },
      isSubmitting: false,
      submitStatus: null, // 'success', 'error', null
      errors: {},
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      if (!this.form.name.trim()) {
        this.errors.name = 'Bitte geben Sie Ihren Namen ein'
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = 'Bitte geben Sie eine Nachricht ein'
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = 'Die Nachricht muss mindestens 10 Zeichen lang sein'
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    async handleSubmit(event) {
      event.preventDefault()
      
      if (this.isSubmitting) return
      
      if (!this.validateForm()) {
        return
      }
      
      this.isSubmitting = true
      this.submitStatus = null
      
      try {
        const formData = new FormData(event.target)
        const response = await fetch(event.target.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
        
        if (response.ok) {
          this.submitStatus = 'success'
          this.form = { name: '', email: '', company: '', message: '' }
        } else {
          this.submitStatus = 'error'
        }
      } catch {
        this.submitStatus = 'error'
      } finally {
        this.isSubmitting = false
      }
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
  gap: 1.5rem;
  margin-top: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
}

input,
textarea {
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #68904d;
}

input.error,
textarea.error {
  border-color: #dc3545;
}

.error-text {
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

button {
  padding: 1rem;
  background-color: #68904d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s;
  margin-top: 0.5rem;
}

button:hover:not(:disabled) {
  background-color: #14471e;
  transform: translateY(-1px);
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  transform: none;
}

.success-message,
.error-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.success-message {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.formspree-attribution {
  text-align: center;
  margin-top: 1.5rem;
}

.formspree-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #999;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s;
}

.formspree-link:hover {
  color: #68904d;
}

.formspree-logo {
  width: 16px;
  height: 16px;
  opacity: 0.7;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s;
}

.social-link:hover {
  color: #000;
  background-color: #f0f0f0;
}
</style>
