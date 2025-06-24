<template>
  <section class="intro-section">
    <div class="intro-content">
      <h1>Herzlich Willkommen auf meiner Webseite, mein Name ist <span class="highlight">Loreno Biffi</span>
      </h1>
      <h2>Ich bin gerade in Ausbildung zum Informatiker, als Applikationsentwickeler bei der WISS in Zürich.
      </h2>
      <p class="intro-text">Ich bin auf der Suche nach einem Praktikum, um meine Lehre abzuschliessen.
      </p>
       <a href="#ueber-mich" class="cta-button">Mehr über mich</a>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Introduction'
}
</script>

<style scoped>
.intro-section {
  min-height: 30vh;
  display: flex;
  align-items: center auto;
  background: linear-gradient(50deg,#DA6A00, #EE9B01 30%);
  padding: 2rem;
  border-radius: 25px;
}

.intro-content {
  max-width: 90%;
padding-left: 3%;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.highlight {
  color: #2c3e50;
}

h2 {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 2rem;
  color: #555;
}

.intro-text {
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #1a252f;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
