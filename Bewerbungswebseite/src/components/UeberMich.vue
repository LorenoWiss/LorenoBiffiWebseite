<template>
  <section class="about-section">
    <h2>Über Mich</h2>
    <div class="about-content">
      <img src="@/assets/profile.png" alt="Profilbild" class="profile-image">
      <div class="about-text">
        <p>Hallo!</p>
        <p>Ich bin 17 Jahre alt und bin im Vierten Semester bei der WISS in Zürich</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UeberMich',
}
</script>

<style scoped>
.about-section {
  padding-left: 5%;
  max-width: 1200px;

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
