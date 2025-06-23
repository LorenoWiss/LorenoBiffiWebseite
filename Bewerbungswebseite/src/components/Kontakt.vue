<template>
  <section class="contact-section">
    <h2>Kontakt</h2>
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="message">Nachricht:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Senden</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Hier würde die Formularverarbeitung stattfinden
      console.log('Formular gesendet:', this.form);
      alert('Vielen Dank für deine Nachricht!');
      this.form = { name: '', email: '', message: '' };
    }
  }
}
</script>

<style scoped>
.contact-section {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
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

input, textarea {
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
</style>    