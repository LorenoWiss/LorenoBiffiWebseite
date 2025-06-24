<template>
  <section class="skills-section">
    <h2>Meine Fähigkeiten</h2>
    <div class="skills-grid">
      <div v-for="(skill, index) in skills" :key="index" class="skill-item">
        <div class="skill-icon">
          <!-- Hier kannst du ein Icon einfügen -->
          {{ skill.icon }}
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
        { name: 'Frontend-Entwicklung', icon: '', description: 'Vue und React' },
        { name: 'UI/UX Design', icon: '', description: 'Figma' },
        { name: 'Backend-Entwicklung', icon: '', description: 'Spring Boot' }
      ]
    }
  }
}
</script>

<style scoped>

.skills-section {
  padding: 4rem 5%; /* Mehr Platz */
  margin: 0 auto;
  position: relative; /* Für korrekte Positionierung */
  z-index: 1; /* Über anderen Elementen */
}



.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.skill-item {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.skill-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
