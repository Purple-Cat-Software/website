<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <LandingPage />
    </v-responsive>
  </v-container>
  <v-container>
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <AboutUs />
      <div class="py-4" />
      <Projects />
    </v-responsive>
  </v-container>
  <Footer />
</template>

<script lang="ts" setup>
//
</script>
