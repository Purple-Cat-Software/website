<template>
  <v-app>
    <v-main>
      <Hero/>
      <WhoAreWe/>
      <Projects/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import WhoAreWe from "@/components/WhoAreWe.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/Footer.vue";
</script>
