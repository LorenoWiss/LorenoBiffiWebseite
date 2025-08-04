<template>
  <section class="projekt-section">
    <div class="projekt-container">
      <router-link to="/" class="back-button">← Zurück zur Startseite</router-link>
      <h1 class="page-title">Web-Projekte</h1>
      <p class="info-text">
        Die Projekte auf dieser Seite sind aktuell noch in Arbeit. Bitte schauen Sie später wieder
        vorbei! <br />
        Die Seiten <router-link to="/sprachen">Sprachen</router-link> und
        <router-link to="/3d-projekte">3D-Projekte</router-link> sind ein kleiner Einblick in meine
        Fähigkeiten.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WebProjekte',
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  metaInfo() {
    return {
      title: this.pageTitle + ' - Loreno Biffi',
    }
  },
}
</script>

<style scoped>
.projekt-section {
  padding: 2rem 5%;
  max-width: 800px;
  margin: 0 auto;
}

.back-button {
  display: inline-block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: #68904d;
  font-weight: 500;
  transition: color 0.3s;
}

.back-button:hover {
  color: #14471e;
}

.page-title {
  font-size: 2rem;
  color: #14471e;
  margin-bottom: 1rem;
  text-align: center;
}

.info-text {
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  line-height: 1.6;
}

.info-text a,
.info-text .router-link {
  color: #68904d;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.3s;
}

.info-text a:hover,
.info-text .router-link:hover {
  color: #14471e;
}
</style>
