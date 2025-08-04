<template>
  <section class="projekt-section">
    <div class="projekt-container">
      <router-link to="/" class="back-button">← Zurück zur Startseite</router-link>
      <h1 class="page-title">3D-Projekte</h1>
      <p class="info-text">
        Die 3D-Projekte auf dieser Seite sind aktuell noch in Arbeit. Bitte schauen Sie später
        wieder vorbei! <br />
        Hier ist ein kleiner Einblick in meine Fähigkeiten im Bereich 3D-Design:
      </p>
      <video
        autoplay
        loop
        muted
        playsinline
        :src="videoSource"
        class="video-player"
        style="max-width: 100%; border-radius: 8px"
      >
        Ihr Browser unterstützt das Video-Tag nicht.
      </video>
    </div>
  </section>
</template>

<script>
import videoSource from '@/assets/ShaderTest.mp4'

export default {
  name: '3DProjekte',
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

  data() {
    return {
      videoSource: videoSource,
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

.video-player {
  display: block;
  margin: 20px auto;
}
</style>
