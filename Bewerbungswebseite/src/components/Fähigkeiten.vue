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
        { name: 'Webentwicklung', icon: '🖥️', description: 'HTML, CSS, JavaScript, Vue' },
        { name: 'Design', icon: '🎨', description: 'UI/UX, Figma, Adobe XD' },
        { name: 'Backend', icon: '⚙️', description: 'Node.js, Express, Datenbanken' }
      ]
    }
  }
}
</script>

<style scoped>
.skills-section {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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