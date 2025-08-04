<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Lebenslauf from './components/Lebenslauf.vue'
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
    // eslint-disable-next-line vue/no-unused-components
    Lebenslauf,
  },
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
}

main {
  flex: 1;
  padding: 20px;
  min-height: calc(100vh - 120px); /* 120px = Header + Footer Höhe */
  padding-bottom: 2rem; /* Abstand zum Footer */
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}
</style>
