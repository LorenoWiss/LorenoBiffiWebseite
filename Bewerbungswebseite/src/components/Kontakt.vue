<template>
  <section class="contact-section">
    <h2>Kontakt</h2>
    <p>Email: Loreno.f.Biffi@gmail.com</p>
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