<template>
  <div>
    <section class="intro-section">
      <div class="intro-content">
        <h1>Mein Name ist <span class="highlight">Loreno Biffi</span></h1>
        <h2>Ich bin gerade in Ausbildung zum Informatiker, als Applikationsentwickeler bei der WISS in Zürich.</h2>
        <p class="intro-text">Ich bin auf der Suche nach einem Praktikum, um meine Lehre abzuschliessen.</p>
        <router-link to="/ueber-mich" class="cta-button">Mehr über mich</router-link>
      </div>
    </section>
    
    <Faehigkeiten id="faehigkeiten" />
    <Kontakt id="kontakt" />
  </div>
</template>

<script>
import Faehigkeiten from '@/components/Faehigkeiten.vue'
import Kontakt from '@/components/Kontakt.vue'

export default {
  name: 'Introduction',
  components: {
    Faehigkeiten,
    Kontakt
  }
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
  color: #14471E;
}

h2 {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 2rem;
  color: #14471E;
}

.intro-text {
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #68904D;
  color: rgb(255, 255, 255);
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