<template>
  <div id="app">
    <Header />
    <main>
      <Einleitung id="start" />
      <UeberMich id="ueber-mich" />
      <Faehigkeiten id="faehigkeiten" />
      <Kontakt id="kontakt" />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Einleitung from '@/components/Einleitung.vue'
import UeberMich from '@/components/UeberMich.vue'
import Faehigkeiten from '@/components/Faehigkeiten.vue'
import Kontakt from '@/components/Kontakt.vue'

export default {
  name: 'App',
  components: {
    Header,
    Einleitung,
    UeberMich,
    Faehigkeiten,
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