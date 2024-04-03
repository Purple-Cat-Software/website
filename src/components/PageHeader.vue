<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();

const onChangeTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <v-app-bar :elevation="2" rounded>
    <v-app-bar-title>Purple Cat Software</v-app-bar-title>

    <template v-slot:append>
      <v-btn
        :icon="theme.name.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click='onChangeTheme'
      />
    </template>
  </v-app-bar>
</template>
