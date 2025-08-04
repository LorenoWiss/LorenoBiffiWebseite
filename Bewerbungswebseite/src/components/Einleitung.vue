<template>
  <div>
    <section class="intro-section">
      <div class="intro-content">
        <h1>Mein Name ist <span class="highlight">Loreno Biffi</span></h1>
        <h2>
          Ich bin gerade in Ausbildung zum Informatiker, als Applikationsentwickler bei der WISS in
          Zürich.
        </h2>
        <p class="intro-text">Ich suche nach einem Praktikum, um meine Lehre abzuschliessen.</p>
        <router-link to="/ueber-mich" class="cta-button">Mehr über mich</router-link>
      </div>
      <img src="@/assets/Bewerbungsfoto_green.png" alt="Profilbild" class="profile-image" />
    </section>

    <Faehigkeiten id="faehigkeiten" />
    <Kontakt id="kontakt" />
  </div>
</template>

<script>
import Faehigkeiten from '@/components/Faehigkeiten.vue'
import Kontakt from '@/components/Kontakt.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Introduction',
  components: {
    Faehigkeiten,
    Kontakt,
  },
}
</script>

<style scoped>
.intro-section {
  min-height: 30vh;
  display: flex;
  align-items: center;
  background: linear-gradient(50deg, #da6a00, #ee9b01 30%);
  padding: 2rem;
  border-radius: 25px;
  position: relative;
}

.intro-content {
  max-width: 90%;
  padding-left: 3%;
  z-index: 1;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.highlight {
  color: #14471e;
}

h2 {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 2rem;
  color: #14471e;
}

.intro-text {
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #68904d;
  color: rgb(255, 255, 255);
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #1a252f;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: auto;
  margin-right: 5%;
  margin-top: 2rem;
  box-shadow: 0 4px 10px rgba(2, 69, 2, 0.771);
}

/* Mobile Version - Bild ausblenden */
@media (max-width: 768px) {
  .profile-image {
    display: none;
  }

  .intro-content {
    max-width: 100%;
    padding: 0 5%;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  .intro-section {
    flex-direction: column;
    padding: 2rem 1rem;
    text-align: center;
  }

  .cta-button {
    margin: 0 auto;
  }
}
</style>
