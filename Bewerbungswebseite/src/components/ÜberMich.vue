<template>
  <section class="about-section">
    <h2>Über Mich</h2>
    <div class="about-content">
      <img src="@/assets/profile.jpg" alt="Profilbild" class="profile-image">
      <div class="about-text">
        <p>Hallo! Ich bin [Dein Name], ein leidenschaftlicher [Dein Beruf].</p>
        <p>Mit [X] Jahren Erfahrung in [Bereich] liebe ich es, [was du machst].</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped>
.about-section {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-content {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }
}
</style>