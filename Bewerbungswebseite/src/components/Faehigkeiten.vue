<template>
  <section class="skills-section">
    <h2>Meine Fähigkeiten</h2>
    <div class="skills-grid">
      <div v-for="(skill, index) in skills" :key="index" class="skill-item">
        <div class="skill-icon">
          <font-awesome-icon :icon="skill.icon" />
        </div>
        <h3>{{ skill.name }}</h3>
        <p>{{ skill.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        {
          name: 'Web-Entwicklung',
          icon: ['fas', 'globe'], // faGlobe
          description: 'Erfahrung mit React, Vue.js und Spring Boot',
        },
        {
          name: 'Programmierung',
          icon: ['fas', 'laptop-code'], // faLaptopCode
          description: 'Java (Objektorientiert und Funktional), HTML, CSS, JavaScript',
        },
        {
          name: 'UI/UX Design',
          icon: ['fas', 'paint-brush'], // faPaintBrush
          description:
            'Erfahrung mit Prototypen in Figma und Grundlagen von UI/UX Design Prinzipien',
        },
        {
          name: 'Datenbanken',
          icon: ['fas', 'database'], // faDatabase
          description: 'Erfahrung mit MySQL und MongoDB',
        },
        {
          name: '3D-Design',
          icon: ['fas', 'object-group'], // faObjectGroup
          description: '3D-Gestaltung in Blender',
        },
        {
          name: 'Sprachen',
          icon: ['fas', 'language'], // faLanguage
          description:
            'Deutsch (Muttersprache), Englisch (Cambridge-Exam Vorbereitung), Italienisch (Zweitsprache), Französisch (Sek A Kenntnisse)',
        },
      ],
    }
  },
}
</script>

<style scoped>
.skills-section {
  padding: 4rem 5%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  max-width: 1200px;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skill-item {
  background: azure;
  padding: 1.8rem 1.5rem;
  border-radius: 12px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;
  text-align: center;
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: var(--color-background-mute);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: rgba(104, 144, 77, 0.9);
  background-color: #ffffff00;
  transition: all 0.3s ease;
}

.skill-item:hover .skill-icon {
  transform: scale(1.1);
}

.skill-item h3 {
  margin: 0.8rem 0 0.5rem;
  color: var(--color-heading);
  font-size: 1.2rem;
  font-weight: 600;
}

.skill-item p {
  margin: 0.5rem 0 0;
  color: var(--color-text);
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.9;
}
</style>
