<script setup lang="ts">

</script>

<template>
  <section class="hero-section d-flex align-center justify-center">
    <v-container class="text-center py-16" style="position:relative; z-index:1;">

      <!-- Logo avatar -->
      <div class="cat-float mb-6" style="filter: drop-shadow(0 0 28px rgba(124,58,237,.65));">
        <v-avatar size="130" color="primary">
          <span style="font-size:64px; line-height:1;">🐱</span>
        </v-avatar>
      </div>

      <!-- Company name -->
      <h1 class="display-font gradient-text mb-3"
          style="font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight:900; line-height:1.1;">
        Purple Cat Software
      </h1>

      <p class="text-purple-lighten-3 mb-10"
         style="font-size:1.1rem; font-weight:300; letter-spacing:.3px;">
        Crafting digital experiences that purr with precision.
      </p>

      <!-- CTA buttons — pure Vuetify v-btn -->
      <v-btn color="primary" variant="elevated" size="large" rounded="xl" class="mr-3" href="#who">
        <v-icon start>mdi-information-outline</v-icon>
        Who We Are
      </v-btn>
      <v-btn color="amber" variant="outlined" size="large" rounded="xl" href="#projects">
        <v-icon start>mdi-briefcase-outline</v-icon>
        Our Projects
      </v-btn>

      <!-- Scroll indicator -->
      <div class="scroll-hint mt-16 d-flex flex-column align-center">
          <span class="text-purple-lighten-3" style="font-size:.7rem; letter-spacing:3px; text-transform:uppercase;">
            Scroll
          </span>
        <v-icon color="purple-lighten-3" size="20" class="mt-1">mdi-chevron-down</v-icon>
      </div>

    </v-container>
  </section>
</template>
