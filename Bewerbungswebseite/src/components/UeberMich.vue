<template>
  <section class="about-section">
    <div class="about-container">
      <!-- Profil Header mit Bild -->
      <div class="profile-header">
        <router-link to="/" class="back-button">← Zurück zur Startseite</router-link>
        <div class="profile-image-container">
          <img src="@/assets/profile.png" alt="Loreno Biffi" class="profile-image" loading="lazy" />
          <div class="image-border"></div>
        </div>
        <h1>Loreno Biffi</h1>
        <p class="subtitle">Applikationsentwickler in Ausbildung</p>
      </div>

      <!-- Hauptinhalt -->
      <div class="about-content">
        <!-- Persönliche Einführung -->
        <section class="ich-card">
          <h2><span class="icon">👋</span> Hallo!</h2>
          <p>
            Ich bin 17 Jahre alt und befinde mich in meiner Ausbildung zum Informatiker mit
            Fachrichtung Applikationsentwicklung bei der WISS in Zürich.
          </p>
          <p>
            Meine Leidenschaft für Technologie begann schon früh und hat sich zu einem
            tiefgreifenden Interesse an Softwareentwicklung und modernen Webtechnologien entwickelt.
          </p>
        </section>

        <!-- Ausbildungsweg -->
        <section class="timeline-card">
          <h2><span class="icon">📚</span> Mein Ausbildungsweg</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-date">Aug. 2023 – laufend</div>
              <div class="timeline-content">
                <h3>Informatiker EFZ Applikationsentwicklung</h3>
                <p>WISS, Hohlstrasse 535, 8048 Zürich</p>
                <ul>
                  <li>Schwerpunkt auf Web- und Mobile-Entwicklung</li>
                  <li>Praktische Erfahrung in agilen Projekten</li>
                </ul>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">Aug. 2020 - Juni 2023</div>
              <div class="timeline-content">
                <h3>Sekundarstufe A</h3>
                <p>Albisriderplatz, Norastrasse 20, 8004 Zürich</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">Aug. 2014 - Juni 2020</div>
              <div class="timeline-content">
                <h3>Primarstufe</h3>
                <p>Kappeli, Badenerstrasse 618, 8048 Zürich</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Praktikumssuche -->
        <section class="cta-card">
          <h2><span class="icon">🔍</span> Praktikumssuche</h2>
          <p>
            Ich suche aktuell nach einem spannenden Praktikum, um meine Ausbildung abzuschließen und
            praktische Erfahrung in einem professionellen Umfeld zu sammeln.
          </p>
          <router-link to="/#kontakt" class="cta-button">Kontakt aufnehmen</router-link>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UeberMich',
  metaInfo() {
    return {
      title: 'Über Mich - Loreno Biffi',
    }
  },
}
</script>

<style scoped>
.about-section {
  padding: 2rem 5%;
  max-width: 1200px;
  margin: 0 auto;
  color: #333;
}

.profile-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-button {
  align-self: flex-start;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  text-decoration: none;
  color: #68904d;
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
  white-space: nowrap; 
}

.back-button:hover {
  color: #14471e;
}

.profile-image-container {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  position: relative;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  border: 4px solid white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.image-border {
  position: absolute;
  width: 110%;
  height: 110%;
  top: -5%;
  left: -5%;
  background: linear-gradient(45deg, #68904d, #14471e);
  border-radius: 50%;
  z-index: 1;
}

h1 {
  font-size: 2.5rem;
  color: #14471e;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #68904d;
  font-weight: 500;
}

section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #14471e;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1.3rem;
}

.ich-card,
.timeline-card,
.cta-card {
  margin-bottom: 2rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #68904d;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-date {
  font-weight: 600;
  color: #68904d;
  margin-bottom: 0.5rem;
}

.timeline-content h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

.cta-card {
  background: linear-gradient(135deg, rgba(104, 144, 77, 0.1), rgba(20, 71, 30, 0.1));
  text-align: center;
}

.cta-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #68904d;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s;
}

.cta-button:hover {
  background-color: #14471e;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .about-content {
    grid-template-columns: 1fr 1fr;
  }

  .cta-card {
    grid-column: span 2;
  }

  .profile-image-container {
    width: 180px;
    height: 180px;
  }
}
</style>
