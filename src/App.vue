<template>
  <v-app :theme="isDark ? 'purple_cat_dark' : 'purple_cat_light'" :class="isDark ? 'theme-dark' : 'theme-light'">
    <div class="theme-toggle">
      <v-btn
        :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        :color="isDark ? 'amber' : 'primary'"
        variant="elevated"
        rounded="xl"
        size="large"
        elevation="6"
        @click="isDark = !isDark"
      />
    </div>

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
import { ref } from "vue";

const isDark = ref(true);
</script>
