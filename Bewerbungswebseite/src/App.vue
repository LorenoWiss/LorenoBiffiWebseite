<template>
  <div id="app">
    <Header />
    <main>
      <Einleitung />
      <ÜberMich />
      <Fähigkeiten />
      <Kontakt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Einleitung from '@/components/Einleitung.vue'
import ÜberMich from '@/components/ÜberMich.vue'
import Fähigkeiten from '@/components/Fähigkeiten.vue'
import Kontakt from '@/components/Kontakt.vue'

export default {
  name: 'App',
  components: {
    Header,
    Einleitung,
    ÜberMich,
    Fähigkeiten,
    Kontakt
  }
}
</script>

<style>
/* Globale Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
}
</style>