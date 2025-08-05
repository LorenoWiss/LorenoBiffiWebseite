<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 Loreno Biffi</p>
      <div class="footer-social">
        <a href="https://github.com/LorenoWiss" target="_blank" class="footer-social-link">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://www.linkedin.com/in/loreno-biffi-261658377/" target="_blank" class="footer-social-link">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin)

export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Footer',
  components: {
    FontAwesomeIcon,
  },
}
</script>

<style scoped>
.footer {
  padding: 1rem 5%;
  background: linear-gradient(350deg, rgba(20, 71, 30, 0.9), rgba(104, 144, 77, 0.9) 30%);
  backdrop-filter: blur(10px);
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;
  color: white;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content p {
  margin: 0;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.footer-social-link {
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s;
  text-decoration: none;
}

.footer-social-link:hover {
  color: #e0e0e0;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
