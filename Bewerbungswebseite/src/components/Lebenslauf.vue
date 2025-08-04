<template>
  <div class="cv-container">
    <div class="cv-header">
      <div>
        <h1>Loreno Biffi</h1>
        <div class="cv-contact">
          <a href="mailto:loreno.f.biffi@gmail.com">loreno.f.biffi@gmail.com</a> <br />
          Rudenweg 1, 8084 Zürich <br />
          1. März 2008
        </div>
      </div>
      <div class="header-images">
        <div class="photo-container">
          <img src="@/assets/Bewerbungsfoto.jpg" alt="Bewerbungsfoto" class="profile-image" />
        </div>
        <div class="qr-container">
          <img src="@/assets/qr-code.png" alt="QR-Code zur Webseite" class="qr-image" />
          <a href="https://loreno.ch" class="qr-link">loreno.ch</a>
        </div>
      </div>
    </div>

    <div class="cv-section cv-profile">
      <h2>Kompetenz-Profil</h2>
      <p>
        In der schulischen Berufsausbildung sammle ich Kenntnisse im Projektmanagement mit agilen
        Methoden, im Programmieren (Java, HTML, JavaScript), im Datenbankmanagement (MySQL, MongoDB)
        sowie im Web- und UI/UX-Design. Diese technischen Kompetenzen bilden eine gute Grundlage für
        eine erfolgreiche Projektabwicklung in vielen Bereichen der Informatik.<br />
        Als angehender Applikationsentwickler schätze ich ein funktionierendes Team, in dem
        Zusammenarbeit und Zuverlässigkeit zentral sind. Ich bin ein positiv eingestellter
        Teamplayer mit guten Kommunikationsfähigkeiten, hilfsbereit und motiviert, stetig
        dazuzulernen. Ich bin überzeugt, durch diese Eigenschaften einen positiven Einfluss auf die
        Teamatmosphäre zu haben.
      </p>
    </div>

    <div class="cv-section">
      <h2>Ausbildung</h2>
      <ul>
        <li>
          <strong>Informatiker Applikationsentwicklung</strong>, WISS, Hohlstrasse 535, 8048
          Zürich<br /><span>Aug. 2023 – laufend</span>
        </li>
        <li>
          <strong>Sekundarstufe A</strong>, Albisriederplatz, Norastrasse 20, 8004 Zürich<br /><span
            >Aug. 2020 – Juni 2023</span
          >
        </li>
        <li>
          <strong>Primarstufe</strong>, Kappeli, Badenerstrasse 618, 8048 Zürich<br /><span
            >Aug. 2014 – Juni 2020</span
          >
        </li>
      </ul>
    </div>

    <div class="cv-section">
      <h2>Sprachkenntnisse</h2>
      <ul>
        <li><strong>Deutsch</strong> – Muttersprache</li>
        <li><strong>Italienisch</strong> – Zweitsprache</li>
        <li><strong>Englisch</strong> – Cambridge-Exam mit C1 Absolviert (Zertifikat unten)</li>
        <li><strong>Französisch</strong> – Sek A Kenntnisse</li>
      </ul>
    </div>

    <div class="cv-section">
      <h2>Informatikkenntnisse</h2>
      <ul>
        <li><strong>Web-Development:</strong> Erfahrung mit React, Vue.js und Spring Boot</li>
        <li><strong>App-Development:</strong> Android Studio mit Java</li>
        <li><strong>Programmieren:</strong> Java, HTML, CSS und JS</li>
        <li>
          <strong>UI und UX Design:</strong> Erfahrungen mit Prototypen in Figma und Grundlagen von
          UI/UX Design Prinzipien
        </li>
        <li><strong>Datenbank Management:</strong> mySQL und MongoDB</li>
      </ul>
    </div>

    <div class="cv-section">
      <h2>Hobbies und Interessen</h2>
      <ul>
        <li>Pfadi Leiter (Wolfstufe Pfadi Rudolf Brun)</li>
        <li>3D-Gestaltung in Blender</li>
        <li>Gaming</li>
        <li>Musik machen</li>
        <li>Kochen</li>
        <li>Game-Development</li>
      </ul>
    </div>

    <div class="cv-section">
      <h2>Erfolge</h2>
      <ul>
        <li>
          <strong>Pfadi:</strong> Basiskurs Ausbildungslager (April 25), Meuteleiter Wolfstufe Pfadi
          Rudolf Brun
        </li>
        <li>
          <strong>IT & Engagement:</strong> ICT-Scouts (Zertifikat unten), Kits für Kids Programm
          (Erster der Schule, Zertifikat unten)
        </li>
        <li><strong>Sonstiges:</strong>Nothelferkurs (Februar 25)</li>
      </ul>
    </div>

    <div class="cv-ref"><strong>Referenz:</strong> Auf anfrage gerne verfügbar.</div>
  </div>
</template>

<script>
export default {
  name: 'CurriculumVitae',
  // You can add component logic here if needed
}
</script>

<style>
body {
  font-family: 'Trebuchet MS', Arial, sans-serif;
  background: #f6f8fa;
  margin: 0;
  padding: 0;
}
.cv-container {
  max-width: 700px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 32px 28px 28px 28px;
}
@media (min-width: 600px) {
  .cv-container {
    padding: 32px 36px 28px 36px;
  }
}
.cv-header {
  background: linear-gradient(90deg, #8fda7e 0%, #b9e2b0 100%);
  border-bottom: 2px solid #e0e0e0;
  padding: 36px 40px 18px 40px;
  margin: -36px -40px 24px -40px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cv-header h1 {
  color: #2d7c4c;
  font-size: 2.1em;
  margin: 0 0 0.2em 0;
  font-weight: bold;
}
.cv-header .cv-contact {
  color: #2d7c4c;
  font-size: 1em;
  margin-bottom: 0.2em;
}
.cv-header .cv-contact a {
  color: #2d7c4c;
  text-decoration: none;
}
.cv-header .cv-birth {
  color: #2d7c4c;
  margin-top: 0.2em;
}
.cv-section {
  margin-bottom: 28px;
}
.cv-section h2 {
  color: #2d7c4c;
  font-size: 1.15em;
  margin-bottom: 0.5em;
  letter-spacing: 0.5px;
}
.cv-section ul {
  margin: 0.2em 0 0.5em 1.2em;
  padding: 0;
}
.cv-section li {
  margin-bottom: 0.4em;
}
.cv-section strong {
  color: #385723;
}
.cv-profile {
  margin-bottom: 1.2em;
  color: #222;
}
.cv-columns {
  display: flex;
  gap: 32px;
}
.cv-col {
  flex: 1;
}
.cv-list {
  list-style: none;
  padding: 0;
  margin: 0.2em 0 0.5em 0;
}
.cv-list li {
  margin-bottom: 0.3em;
}
.cv-ref {
  font-size: 0.95em;
  color: #385723;
  margin-top: 1.2em;
  background: #ffffff;
  padding: 10px 16px;
  border-radius: 6px;
}
.qr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.qr-link {
  color: #2d7c4c;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;
}
.photo-container {
  height: 138px;
  display: flex;
  align-items: center;
}
.header-images {
  display: flex;
  align-items: center;
  gap: 18px;
}
.profile-image {
  width: 110px;
  height: 138px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(44, 124, 76, 0.18);
  object-position: center top;
}
.qr-image {
  width: 110px;
  height: 110px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(44, 124, 76, 0.1);
}
@media (max-width: 800px) {
  .cv-container {
    padding: 16px;
  }
  .cv-columns {
    flex-direction: column;
    gap: 0;
  }
}
@media print {
  body,
  html {
    margin: 0 !important;
    padding: 0 !important;
    width: 210mm !important;
    height: 297mm !important;
    box-sizing: border-box !important;
  }
  .cv-container {
    margin: 0 !important;
    padding: 0 !important;
    width: 100vw !important;
    max-width: 100vw !important;
    box-shadow: none !important;
    box-sizing: border-box !important;
  }
  .cv-header {
    margin: 0 !important;
    border-radius: 0 !important;
    padding: 18px 0 12px 0 !important;
    width: 100vw !important;
    box-sizing: border-box !important;
  }
  .cv-header > div {
    padding-left: 10mm !important;
  }
  .cv-header img {
    margin-left: 18px !important;
    margin-right: 10mm !important;
  }
  .cv-section,
  .cv-ref {
    padding-left: 10mm !important;
    padding-right: 10mm !important;
    box-sizing: border-box !important;
  }
}
</style>
