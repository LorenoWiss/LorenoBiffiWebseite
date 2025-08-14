<template>
  <section class="projekt-section">
    <div class="projekt-container">
      <router-link to="/" class="back-button">← Zurück zur Startseite</router-link>
      <h1 class="page-title">Web-Projekte</h1>
      <p class="info-text">Hier sind einige meiner aktuellen und geplanten Web-Projekte:</p>

      <div class="projects-grid">
        <!-- Erstes Projekt ist einzeln gerendert, um die message darunter richtig darzustellen, aber das ändere ich sobald ich mehr projekte habe -->
        <div class="project-card">
          <div class="project-image">
            <img :src="projects[0].image" :alt="projects[0].title" class="project-logo" />
          </div>
          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ projects[0].title }}</h3>
              <span class="project-date">{{ projects[0].date }}</span>
            </div>
            <p class="project-description">{{ projects[0].description }}</p>
            <div class="project-tags">
              <span v-for="tag in projects[0].tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <a :href="projects[0].link" target="_blank" class="project-button project-link">
              Details ansehen →
            </a>
          </div>
        </div>

        <h3 class="info-text">
          Die folgenden Projekte sind noch in Planung oder in frühen Entwicklungsphasen. Sie finden
          den Fortschritt auf
          <a href="https://github.com/LorenoWiss" target="_blank" class="social-link"> GitHub </a>
          ...
        </h3>

        <!-- Weitere Projekte (XXX-Platzhalter) -->
        <div v-for="project in projects.slice(1)" :key="project.id" class="project-card">
          <div class="project-image">
            <div class="placeholder-image">
              <span class="placeholder-text">{{ project.title }}</span>
            </div>
          </div>
          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <span class="project-date">{{ project.date }}</span>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <button class="project-button" :disabled="true">
              <span>Geplant</span>
            </button>
          </div>
        </div>
      </div>

      <p class="footer-text">
        Diese Seite ist noch ziemlich leer. <br />
        Die Seite <router-link to="/sprachen">Sprachen</router-link> ist ein kleiner Einblick in
        meine Fähigkeiten.
      </p>
    </div>
  </section>
</template>

<script>
import portfolioLogo from '@/assets/logo.png'

export default {
  name: 'WebProjekte',
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Loreno.ch',
          date: 'Juni 2025 - laufend',
          description:
            'Die Portfolio-Website, auf der Sie sich gerade befinden, habe ich als Einblick in meine Fähigkeiten in der Webentwicklung gemacht. SSie zeigt meine Fähigkeiten in der Frontend-Entwicklung.',
          tags: ['Vue 3', 'Vite'],
          status: 'available',
          link: 'https://loreno.ch',
          image: portfolioLogo,
        },
        {
          id: 2,
          title: 'xxxxxxxxxx xxxxxxx',
          date: 'xxxx xxxx - xxxxxxx',
          description:
            'xxxx xxxxxxxxx xxxxxxx xxx xxxxxxxxx, xxxxxxxxxxxxxxxxx xxx xxxxxxxxxxxxxxxxxxxx. xxxxxxx xxx xxxxxxx xxx xxxxxxxx xxx xxxxx.',
          tags: ['xxxxx', 'xxxxxxx', 'xxxxxxx', 'xxxxxxx', 'xxxxx xxx'],
          status: 'planned',
        },
        {
          id: 3,
          title: 'xxxx xxxxxxxxxx xxx',
          date: 'xxx xxxx - xx xxxxxxxxxx',
          description:
            'xxxx xxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxx xxxxxxxx-xxxxxxx, xxxx & xxxx xxxxxxxxx xxx xxxx-xxxxxxxxxxxxxxxxxxxxxx.',
          tags: ['xxx x', 'xxxxxxxx', 'xxxxxxxxxx', 'xxxxxxxx xxx'],
          status: 'planned',
        },
      ],
    }
  },
  metaInfo() {
    return {
      title: this.pageTitle + ' - Loreno Biffi',
    }
  },
}
</script>
<style scoped>
/* Base Styles */
.projekt-section {
  padding: 2rem 5%;
  max-width: 800px;
  margin: 0 auto;
}

/* Typography */
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

.footer-text {
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
}

/* Links */
.back-button {
  display: inline-block;
  margin-bottom: 1.5rem;
  color: #68904d;
  text-decoration: none;
  font-weight: 500;
}

.back-button:hover {
  color: #14471e;
}

.social-link {
  color: #68904d;
  text-decoration: underline;
  font-weight: 500;
}

.social-link:hover {
  color: #14471e;
}

.footer-text a {
  color: #68904d;
  text-decoration: underline;
  font-weight: 500;
}

.footer-text a:hover {
  color: #14471e;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  gap: 2rem;
  margin: 3rem 0;
}

.project-card {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

/* Project Image */
.project-image {
  position: relative;
  min-height: 200px;
  display: flex;
}

.project-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #68904d, #14471e);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-text {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
}

/* Project Content */
.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.4rem;
  color: #14471e;
  margin: 0;
  font-weight: 600;
}

.project-date {
  font-size: 0.9rem;
  color: #68904d;
  font-weight: 500;
  white-space: nowrap;
  margin-left: 1rem;
}

.project-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Tags */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: rgba(104, 144, 77, 0.1);
  color: #14471e;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(104, 144, 77, 0.3);
}

/* Buttons */
.project-button {
  background: #68904d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.project-button:hover {
  background: #14471e;
  transform: translateX(5px);
}

.project-button:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

/* Responsive */
@media (max-width: 768px) {
  .projekt-section {
    padding: 1rem;
  }

  .project-card {
    grid-template-columns: 1fr;
  }

  .project-image {
    min-height: 150px;
  }

  .project-header {
    flex-direction: column;
  }

  .project-date {
    margin-left: 0;
    margin-top: 0.5rem;
  }

  .tag {
    font-size: 0.8rem;
  }
}
</style>
