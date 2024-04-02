<script setup lang="ts">
const icons = [
  "mdi-github",
  "mdi-mail"
]
</script>

<template>
  <v-footer>
    <v-row
      justify="center"
      no-gutters
    >
      <v-icon
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        size="x-large"
      />
      <v-col
        class="text-center mt-4"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Purple Cat Software</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
